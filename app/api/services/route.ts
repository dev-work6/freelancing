import Service from "@/models/service";
import connectDB from "@/lib/db/db";
import { NextResponse } from "next/server";

export async function GET(): Promise<Response> {
  try {
    await connectDB();
    // Only return active services by default
    const services = await Service.find({ status: "active" }).select(
      "title description shortDescription category pricing features deliverables timeline technologies status"
    );
    return NextResponse.json(services, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch services" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request): Promise<Response> {
  try {
    const data = await req.json();

    // Ensure arrays are properly initialized
    const serviceData = {
      ...data,
      features: data.features || [],
      technologies: data.technologies || [],
      deliverables: data.deliverables || [],
      images: data.images || [],
      customization: {
        isCustomizable: data.customization?.isCustomizable ?? true,
        options: data.customization?.options || [],
      },
      support: {
        includedHours: data.support?.includedHours,
        responseTime: data.support?.responseTime,
        channels: data.support?.channels || [],
      },
      status: data.status || "active",
    };

    await connectDB();
    
    try {
      const service = await Service.create(serviceData);
      return NextResponse.json(service, { status: 201 });
    } catch (validationError: any) {
      // Handle validation errors
      if (validationError.name === 'ValidationError') {
        const errors = Object.values(validationError.errors).map((err: any) => err.message);
        return NextResponse.json(
          { 
            error: "Validation failed", 
            details: errors.join(', ')
          },
          { status: 400 }
        );
      }
      throw validationError;
    }
  } catch (error: any) {
    console.error("Error creating service:", error);
    return NextResponse.json(
      {
        error: "Failed to create service",
        details: error.message,
      },
      { status: 500 }
    );
  }
}
