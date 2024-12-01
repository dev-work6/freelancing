import connectDB from "@/lib/db/db";
import Payment from "@/models/payment";
import Stripe from "stripe";
import { NextResponse } from "next/server";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export async function POST(req: Request): Promise<Response> {
  let payment;
  try {
    const { serviceId, userId, amount, customerName, customerAddress } =
      await req.json();

    if (!customerName || !customerAddress) {
      return NextResponse.json(
        {
          error:
            "Customer name and address are required for export transactions",
        },
        { status: 400 }
      );
    }

    await connectDB();

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      customer_email: customerName,
      line_items: [
        {
          price_data: {
            currency: "inr",
            product_data: {
              name: "Service Payment",
              metadata: {
                customer_name: customerName,
                customer_address: customerAddress,
              },
            },
            unit_amount: amount * 100,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_URL}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_URL}/payment/cancel`,
      payment_intent_data: {
        shipping: {
          name: customerName,
          address: {
            line1: customerAddress,
            country: "IN",
          },
        },
      },
    });

    payment = await Payment.create({
      userId,
      serviceId,
      amount,
      stripeSessionId: session.id,
      paymentStatus: "pending",
      customerName,
      customerAddress,
      currency: "inr",
      paymentMethod: "card",
      shipping: {
        name: customerName,
        address: {
          line1: customerAddress,
          country: "IN",
        },
      },
    });

    return NextResponse.json({ url: session.url }, { status: 200 });
  } catch (error: unknown) {
    if (error instanceof Error && 'type' in error && 'code' in error && 'decline_code' in error) {
      const stripeError = error as Stripe.errors.StripeError;
      if (stripeError.type === "StripeCardError") {
        let errorMessage = "Payment failed";
        const errorCode = stripeError.code;

        switch (stripeError.code) {
          case "card_declined":
            switch (stripeError.decline_code) {
              case "insufficient_funds":
                errorMessage = "Insufficient funds in the card";
                break;
              case "lost_card":
                errorMessage = "This card has been reported as lost";
                break;
              case "stolen_card":
                errorMessage = "This card has been reported as stolen";
                break;
              case "card_velocity_exceeded":
                errorMessage = "Card velocity limit exceeded";
                break;
              default:
                errorMessage = "Card was declined";
            }
            break;
          case "expired_card":
            errorMessage = "The card has expired";
            break;
          case "incorrect_cvc":
            errorMessage = "Incorrect CVC code";
            break;
          case "processing_error":
            errorMessage = "An error occurred while processing the card";
            break;
          case "incorrect_number":
            errorMessage = "Invalid card number";
            break;
        }

        // Update payment record with error details
        if (payment) {
          await Payment.findOneAndUpdate(
            { stripeSessionId: payment.stripeSessionId },
            {
              paymentStatus: "failed",
              errorCode: errorCode,
              errorMessage: errorMessage,
            }
          );
        }

        return NextResponse.json({ error: errorMessage }, { status: 400 });
      }
    }

    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}

export async function GET(req: Request): Promise<Response> {
  try {
    const { searchParams } = new URL(req.url);
    const sessionId = searchParams.get("session_id");

    if (!sessionId) {
      return NextResponse.json(
        { error: "Session ID required" },
        { status: 400 }
      );
    }

    await connectDB();
    const payment = await Payment.findOne({ stripeSessionId: sessionId });

    if (!payment) {
      return NextResponse.json({ error: "Payment not found" }, { status: 404 });
    }

    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (
      session.payment_status === "paid" &&
      payment.paymentStatus !== "success"
    ) {
      payment.paymentStatus = "success";
      await payment.save();
      return NextResponse.json(
        { status: "Payment completed" },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { status: payment.paymentStatus || "pending" },
      { status: 200 }
    );
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Payment status check error:", error.message);
    } else {
      console.error("Payment status check error:", String(error));
    }
    return NextResponse.json(
      { error: "An error occurred while checking payment status" },
      { status: 500 }
    );
  }
}
