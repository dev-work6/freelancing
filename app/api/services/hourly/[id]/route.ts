import { NextResponse } from "next/server";
import dbConnect from "@/lib/db/db";
import HourlyService from "@/models/hourlyService";

export async function GET(
  _: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const id = (await params).id;
    await dbConnect();
    const service = await HourlyService.findById(id);

    if (!service) {
      return NextResponse.json(
        { error: "Hourly service not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(service);
  } catch (err: unknown ) {
    const errorMessage = err instanceof Error ? err.message : "Failed to fetch hourly service";
    console.error("Error fetching hourly service:", err);
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const id = (await params).id;
    await dbConnect();
    const body = await request.json();

    const service = await HourlyService.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });

    if (!service) {
      return NextResponse.json(
        { error: "Hourly service not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(service);
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "Failed to update hourly service";
    return NextResponse.json(
      { error: errorMessage },
      { status: 400 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await dbConnect();
    const id = (await params).id;
    const service = await HourlyService.findByIdAndDelete(id);

    if (!service) {
      return NextResponse.json(
        { error: "Hourly service not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: "Hourly service deleted successfully",
    });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "Failed to delete hourly service";
    console.error("Error deleting hourly service:", err);
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
