import { NextResponse } from "next/server";
import Blocklist from "@/models/blocklist";
import connectDB from "@/lib/db/db";

export async function POST(req: Request): Promise<Response> {
  try {
    await connectDB();

    const { email, reason } = await req.json();

    if (!email || !reason) {
      return NextResponse.json(
        { error: "Email and reason are required" },
        { status: 400 }
      );
    }

    // Check if email exists in blocklist
    const existingBlock = await Blocklist.findOne({ 
      email: email.toLowerCase()
    });

    if (existingBlock) {
      // If exists but inactive, reactivate it with new reason
      if (!existingBlock.active) {
        const updatedBlock = await Blocklist.findByIdAndUpdate(
          existingBlock._id,
          { 
            active: true, 
            reason,
            $push: { 
              history: { 
                action: 'reactivated',
                reason,
                date: new Date()
              }
            }
          },
          { new: true }
        );
        return NextResponse.json(updatedBlock, { status: 200 });
      }
      
      // If already active, return error
      return NextResponse.json(
        { error: "Email is already blocked" },
        { status: 400 }
      );
    }

    // Create new block entry
    const blocklistData = {
      email: email.toLowerCase(),
      reason,
      active: true,
      history: [{
        action: 'blocked',
        reason,
        date: new Date()
      }]
    };

    const blocklist = await Blocklist.create(blocklistData);
    return NextResponse.json(blocklist, { status: 201 });

  } catch (error) {
    console.error("Error blocking email:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET(): Promise<Response> {
  try {
    await connectDB();

    const blocklist = await Blocklist.find({ active: true })
      .populate('userId', 'name email')
      .sort({ createdAt: -1 });
    
    return NextResponse.json(blocklist, { 
      status: 200,
      headers: {
        "Cache-Control": "public, max-age=10"
      }
    });
  } catch (error) {
    console.error("Error fetching blocklist:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request): Promise<Response> {
  try {
    await connectDB();

    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    const result = await Blocklist.findOneAndUpdate(
      { email: email.toLowerCase(), active: true },
      { active: false },
      { new: true }
    );

    if (!result) {
      return NextResponse.json(
        { error: "Email not found in blocklist" },
        { status: 404 }
      );
    }

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error("Error removing from blocklist:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
