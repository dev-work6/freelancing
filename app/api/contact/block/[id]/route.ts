import { NextResponse } from "next/server";
import connectDB from "@/lib/db/db";
import Blocklist from "@/models/blocklist";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
): Promise<Response> {
  try {
    await connectDB();

    const blockedEmail = await Blocklist.findOne({
      _id: params.id,
      active: true
    });

    if (!blockedEmail) {
      return NextResponse.json(
        { error: "Blocked email not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(blockedEmail, { status: 200 });
  } catch (error) {
    console.error("Error fetching blocked email:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
): Promise<Response> {
  try {
    await connectDB();

    const { reason, active } = await req.json();
    const updateData: { reason?: string; active?: boolean } = {};

    if (reason !== undefined) updateData.reason = reason;
    if (active !== undefined) updateData.active = active;

    if (Object.keys(updateData).length === 0) {
      return NextResponse.json(
        { error: "No valid update fields provided" },
        { status: 400 }
      );
    }

    // First check if document exists and is active
    const existingBlock = await Blocklist.findOne({
      _id: params.id,
      active: true
    });

    if (!existingBlock) {
      return NextResponse.json(
        { error: "Active blocked email not found" },
        { status: 404 }
      );
    }

    const updatedBlock = await Blocklist.findByIdAndUpdate(
      params.id,
      updateData,
      { new: true }
    );

    return NextResponse.json(updatedBlock, { status: 200 });
  } catch (error) {
    console.error("Error updating blocked email:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
