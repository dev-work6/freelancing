import { NextResponse } from "next/server";
import Contact from "@/models/contact";
import connectDB from "@/lib/db/db";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
): Promise<Response> {
  try {
    await connectDB();

    const contact = await Contact.findById(params.id)
      .select('+replies')
      .lean();

    if (!contact) {
      return NextResponse.json({ error: "Contact not found" }, { status: 404 });
    }
    // Only update status to read if not already replied
    if (!Array.isArray(contact) && contact.status === "unread") {
      await Contact.findByIdAndUpdate(params.id, { status: "read" });
    }

    return NextResponse.json(contact, {
      status: 200,
      headers: {
        "Cache-Control": "public, max-age=10",
      },
    });
  } catch (error) {
    console.error("Error fetching contact:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
