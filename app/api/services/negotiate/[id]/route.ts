import { NextResponse } from "next/server";
import connectDB from "@/lib/db/db";
import Negotiation from "@/models/negotitate";

// Get a specific negotiation by ID
export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
): Promise<Response> {
  try {
    const id = (await params).id;
    await connectDB();
    const negotiation = await Negotiation.findById(id).populate('service');
    
    if (!negotiation) {
      return NextResponse.json(
        { error: "Negotiation not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(negotiation);
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json(
        { error: "Failed to fetch negotiation", details: error.message },
        { status: 500 }
      );
    }
    return NextResponse.json(
      { error: "Failed to fetch negotiation" },
      { status: 500 }
    );
  }
}

// Update a negotiation status
export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
): Promise<Response> {
  try {
    const id = (await params).id;
    const data = await req.json();
    const { status } = data;

    if (!status || !["pending", "accepted", "rejected", "completed"].includes(status)) {
      return NextResponse.json(
        { error: "Invalid status" },
        { status: 400 }
      );
    }

    await connectDB();
    const negotiation = await Negotiation.findByIdAndUpdate(
      id,
      { status },
      { new: true, runValidators: true }
    );

    if (!negotiation) {
      return NextResponse.json(
        { error: "Negotiation not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(negotiation);
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json(
        { error: "Failed to update negotiation", details: error.message },
        { status: 500 }
      );
    }
    return NextResponse.json(
      { error: "Failed to update negotiation" },
      { status: 500 }
    );
  }
}

// Delete a negotiation
export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
): Promise<Response> {
  try {
    const id = (await params).id;
    await connectDB();
    const negotiation = await Negotiation.findByIdAndDelete(id);

    if (!negotiation) {
      return NextResponse.json(
        { error: "Negotiation not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: "Negotiation deleted successfully" });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json(
        { error: "Failed to delete negotiation", details: error.message },
        { status: 500 }
      );
    }
    return NextResponse.json(
      { error: "Failed to delete negotiation" },
      { status: 500 }
    );
  }
}
