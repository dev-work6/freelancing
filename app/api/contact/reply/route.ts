import { NextResponse } from "next/server";
import Contact from "@/models/contact";
import connectDB from "@/lib/db/db";
import { sendMail } from "@/lib/mail";
import { isBlocked } from "@/lib/utils/blockCheck";

export async function POST(request: Request): Promise<Response> {
  try {
    const body = await request.json();
    const { contactId, reply, email } = body;

    if (!contactId || !reply || !email) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    await connectDB();

    // Check if email is blocked
    const blockStatus = await isBlocked({
      email,
    });

    if (blockStatus.blocked) {
      return NextResponse.json(
        {
          error: "Unable to send reply",
          message: "This email address has been blocked",
        },
        { status: 403 }
      );
    }

    // Update contact status and add reply to the replies array
    const updatedContact = await Contact.findByIdAndUpdate(
      contactId,
      {
        status: "replied",
        $push: { replies: { message: reply } },
      },
      { new: true }
    );

    if (!updatedContact) {
      return NextResponse.json({ error: "Contact not found" }, { status: 404 });
    }

    // Send email reply
    const info = await sendMail({
      to: email,
      subject:
        "Your Inquiry Response | Dev Daim - Professional Development Solutions",
      text: reply,
      html: `
        <div style="max-width: 700px; margin: 0 auto; padding: 40px 20px; font-family: 'Helvetica Neue', Arial, sans-serif; background-color: #ffffff;">
          <div style="background: linear-gradient(135deg, #1a1a1a 0%, #333333 100%); padding: 40px; border-radius: 16px; margin-bottom: 30px; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
            <img src="${process.env.NEXT_PUBLIC_APP_URL}/logo.png" alt="Dev Daim Logo" style="width: 180px; margin-bottom: 30px; filter: brightness(0) invert(1);"/>
            <h2 style="color: #ffffff; font-size: 28px; margin-bottom: 25px; font-weight: 600;">Thank You for Reaching Out</h2>
            <div style="background-color: rgba(255,255,255,0.95); padding: 30px; border-radius: 12px; border-left: 6px solid #00ff88; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
              <p style="color: #2c2c2c; line-height: 1.8; font-size: 16px; margin-bottom: 25px;">${reply}</p>
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
      `,
    });

    console.log("Email sent successfully:", info);
    return NextResponse.json(
      { message: "Reply sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending reply:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
