import { NextResponse } from "next/server";
import dbConnect from "@/lib/db/db";
import HourlyService from "@/models/hourlyService";
import { verifyToken } from "@/lib/auth/jwt";
import { sendMail } from "@/lib/mail";

export async function POST(request: Request) {
  try {
    const authHeader = request.headers.get('authorization');
    if (!authHeader) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const token = authHeader.split(' ')[1];
    const decoded = verifyToken(token);
    if (!decoded || typeof decoded === 'string') {
      return NextResponse.json({ error: "Invalid token" }, { status: 401 });
    }

    await dbConnect();
    const body = await request.json();
    const { serviceId, message, offerAmount } = body;

    if (!serviceId || !message) {
      return NextResponse.json(
        { error: "Service ID and message are required" },
        { status: 400 }
      );
    }

    const service = await HourlyService.findById(serviceId).populate('userId', 'name email');

    if (!service) {
      return NextResponse.json(
        { error: "Hourly service not found" },
        { status: 404 }
      );
    }

    // Check if user is admin
    const isAdmin = decoded.role === "admin";

    // Prevent duplicate replies in quick succession
    const recentReply = service.replies.find(
      (reply: { userId: { toString: () => string }; createdAt: Date }) =>
        reply.userId.toString() === decoded.userId &&
        new Date().getTime() - new Date(reply.createdAt).getTime() < 60000 // 1 minute
    );

    if (recentReply) {
      return NextResponse.json(
        { error: "Please wait before sending another reply" },
        { status: 429 }
      );
    }

    service.replies.push({
      message,
      offerAmount,
      isFromAdmin: isAdmin,
      userId: decoded.userId,
      createdAt: new Date(),
    });

    await service.save();

    // Populate user information before returning
    await service.populate("replies.userId", "name email");

    // Send email notification
    const emailSubject = isAdmin
      ? "Response to Your Service Request"
      : "New Service Message";

    const emailContent = `
        <div style="max-width: 700px; margin: 0 auto; padding: 40px 20px; font-family: 'Helvetica Neue', Arial, sans-serif; background-color: #ffffff;">
          <div style="background: linear-gradient(135deg, #1a1a1a 0%, #333333 100%); padding: 40px; border-radius: 16px; margin-bottom: 30px; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
            <img src="${process.env.NEXT_PUBLIC_APP_URL}/logo.png" alt="Dev Daim Logo" style="width: 180px; margin-bottom: 30px; filter: brightness(0) invert(1);"/>
            <h2 style="color: #ffffff; font-size: 28px; margin-bottom: 25px; font-weight: 600;">${emailSubject}</h2>
            <div style="background-color: rgba(255,255,255,0.95); padding: 30px; border-radius: 12px; border-left: 6px solid #00ff88; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
              <p style="color: #2c2c2c; line-height: 1.8; font-size: 16px; margin-bottom: 25px;">${message}</p>
              ${offerAmount ? `<p style="color: #2c2c2c; font-size: 18px; font-weight: 600; margin-bottom: 25px;">Offered Amount: ${offerAmount}</p>` : ""}
            </div>
          </div>
          <div style="padding: 0 20px;">
            <p style="color: #2c2c2c; font-size: 16px; margin-bottom: 8px;">We'll get back to you soon with our response.</p>
            <p style="font-weight: 600; color: #1a1a1a; font-size: 20px; margin-bottom: 25px;">Dev Daim | Professional Development Solutions</p>
            <div style="margin-top: 25px; text-align: center;">
              <a href="https://wa.me/917889557560" style="display: inline-block; background: #25D366; color: #ffffff; text-decoration: none; padding: 15px 30px; border-radius: 30px; font-weight: 600; margin: 0 10px; transition: all 0.3s ease;">
                <svg style="width: 20px; height: 20px; vertical-align: middle; margin-right: 8px; fill: currentColor;" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 16.78c-.249.694-1.446 1.328-2.017 1.413-.511.077-1.159.109-1.871-.118-.432-.136-.985-.319-1.694-.625-2.981-1.287-4.928-4.289-5.077-4.487-.148-.199-1.213-1.612-1.213-3.074 0-1.463.768-2.182 1.04-2.479.272-.298.594-.372.792-.372.199 0 .397.002.57.01.182.01.427-.069.669.51.247.595.841 2.058.916 2.207.075.149.124.322.025.52-.1.199-.149.323-.298.497-.148.173-.312.387-.446.52-.148.148-.303.309-.13.606.173.298.77 1.271 1.653 2.059 1.135 1.012 2.093 1.325 2.39 1.475.297.148.471.124.644-.075.173-.198.743-.867.94-1.164.199-.298.397-.249.67-.15.272.1 1.733.818 2.03.967.298.149.496.223.57.347.075.124.075.719-.173 1.413z"/>
                </svg>
                Let's Discuss
              </a>
            </div>
          </div>
        </div>
    `;

    await sendMail({
      to: service.userId.email,
      subject: emailSubject,
      html: emailContent
    });

    return NextResponse.json(service, { status: 201 });
  } catch (error: any) {
    console.error("POST reply error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to add reply" },
      { status: 400 }
    );
  }
}
