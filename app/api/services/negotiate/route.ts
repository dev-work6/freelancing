import { NextResponse } from "next/server";
import connectDB from "@/lib/db/db";
import Service from "@/models/service";
import Negotiation from "@/models/negotitate";

export async function GET(): Promise<Response> {
  try {
    await connectDB();
    // Only fetch active negotiations and populate essential service fields
    const negotiations = await Negotiation.find()
      .populate("service", "title pricing")
      .sort({ createdAt: -1 })
      .select("-__v");

    if (!negotiations) {
      return NextResponse.json(
        { error: "No negotiations found" },
        { status: 404 }
      );
    }

    return NextResponse.json(negotiations, { status: 200 });
  } catch (error: any) {
    console.error("Error fetching negotiations:", error);
    return NextResponse.json(
      {
        error: "Failed to fetch negotiations",
        details: error.message,
      },
      { status: 500 }
    );
  }
}

export async function POST(req: Request): Promise<Response> {
  try {
    const data = await req.json();
    const { serviceId, name, email, phone, budget, message, currency } = data;

    if (!serviceId || !name || !email || !budget || !message || !currency) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    await connectDB();

    // Verify service exists
    const service = await Service.findById(serviceId);
    if (!service) {
      return NextResponse.json({ error: "Service not found" }, { status: 404 });
    }

    // Create negotiation request
    const negotiation = await Negotiation.create({
      service: serviceId,
      name,
      email,
      currency,
      phone,
      budget: parseFloat(budget),
      message,
      status: "pending",
    });

    return NextResponse.json(negotiation, { status: 201 });
  } catch (error: any) {
    console.error("Error creating negotiation:", error);
    return NextResponse.json(
      {
        error: "Failed to create negotiation request",
        details: error.message,
      },
      { status: 500 }
    );
  }
}
