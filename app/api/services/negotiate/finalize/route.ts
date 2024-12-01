import { NextResponse } from "next/server";
import connectDB from "@/lib/db/db";
import Negotiation from "@/models/negotitate";
import { sendMail } from "@/lib/mail";

export async function POST(req: Request): Promise<Response> {
  try {
    const data = await req.json();
    const { negotiationId, status, finalAmount } = data;

    if (!negotiationId || !status || !["accepted", "rejected", "completed"].includes(status)) {
      return NextResponse.json(
        { error: "Invalid request data" },
        { status: 400 }
      );
    }

    await connectDB();

    const negotiation = await Negotiation.findById(negotiationId);
    if (!negotiation) {
      return NextResponse.json(
        { error: "Negotiation not found" },
        { status: 404 }
      );
    }

    // Format currency for email
    const formatCurrency = (amount: number, currency: string) => {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: currency,
      }).format(amount);
    };

    negotiation.status = status;
    if (status === "accepted" && finalAmount) {
      negotiation.finalAmount = finalAmount;
    }

    await negotiation.save();

    // Send notification email
    const emailSubject = `Service Negotiation ${status.charAt(0).toUpperCase() + status.slice(1)}`;
    const emailContent = `
        <div style="max-width: 700px; margin: 0 auto; padding: 40px 20px; font-family: 'Helvetica Neue', Arial, sans-serif; background-color: #ffffff;">
          <div style="background: linear-gradient(135deg, #1a1a1a 0%, #333333 100%); padding: 40px; border-radius: 16px; margin-bottom: 30px; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
            <img src="${process.env.NEXT_PUBLIC_APP_URL}/logo.png" alt="Dev Daim Logo" style="width: 180px; margin-bottom: 30px; filter: brightness(0) invert(1);"/>
            <h2 style="color: #ffffff; font-size: 28px; margin-bottom: 25px; font-weight: 600;">${emailSubject}</h2>
            <div style="background-color: rgba(255,255,255,0.95); padding: 30px; border-radius: 12px; border-left: 6px solid #00ff88; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
              <p style="color: #2c2c2c; line-height: 1.8; font-size: 16px; margin-bottom: 25px;">Your service negotiation has been ${status}.</p>
              ${finalAmount ? `<p style="color: #2c2c2c; font-size: 18px; font-weight: 600; margin-bottom: 25px;">Final Agreed Amount: ${formatCurrency(finalAmount, negotiation.currency)}</p>` : ""}
              ${status === "accepted" ? '<p style="color: #2c2c2c; line-height: 1.8; font-size: 16px; margin-bottom: 25px;">Our team will contact you shortly with next steps.</p>' : ''}
            </div>
          </div>
          <div style="padding: 0 20px;">
            <p style="color: #2c2c2c; font-size: 16px; margin-bottom: 8px;">Ready to transform your ideas into reality?</p>
            <p style="font-weight: 600; color: #1a1a1a; font-size: 20px; margin-bottom: 25px;">Dev Daim | Professional Development Solutions</p>
            <div style="margin-top: 25px; text-align: center;">
              <a href="${process.env.NEXT_PUBLIC_APP_URL}" style="display: inline-block; background: linear-gradient(135deg, #00ff88 0%, #00cc6a 100%); color: #1a1a1a; text-decoration: none; padding: 15px 30px; border-radius: 30px; font-weight: 600; margin: 0 10px; transition: all 0.3s ease;">Explore Our Work</a>
              <a href="https://wa.me/917889557560" style="display: inline-block; background: #1a1a1a; color: #ffffff; text-decoration: none; padding: 15px 30px; border-radius: 30px; font-weight: 600; margin: 0 10px; transition: all 0.3s ease;">Let's Connect</a>
            </div>
          </div>
        </div>
    `;

    await sendMail({
      to: negotiation.email,
      subject: emailSubject,
      html: emailContent
    });

    return NextResponse.json(negotiation, { status: 200 });
  } catch (error: unknown) {
    console.error("Error finalizing negotiation:", error);
    return NextResponse.json(
      {
        error: "Failed to finalize negotiation",
        details: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    );
  }
}