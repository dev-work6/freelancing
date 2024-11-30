import { NextResponse } from "next/server";
import Stripe from "stripe";
import { updatePaymentStatus } from "@/models/payment";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: Request) {
  try {
    const { session_id } = await request.json();

    const session = await stripe.checkout.sessions.retrieve(session_id);

    if (session.payment_status === "paid") {
      // Update payment status in database
      await updatePaymentStatus(session_id, "completed");

      // Redirect to success page with session ID
      return NextResponse.json({
        success: true,
        redirect: `/payment/success?session_id=${session_id}`,
      });
    } else {
      // Redirect to failure page with error
      return NextResponse.json({
        success: false,
        redirect: `/payment/failed?error=Payment%20verification%20failed`,
      });
    }
  } catch (error) {
    console.error("Payment verification error:", error);
    return NextResponse.json({
      success: false,
      redirect: `/payment/failed?error=Payment%20verification%20failed`,
    });
  }
}
