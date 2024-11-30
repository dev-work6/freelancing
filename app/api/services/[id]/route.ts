import Service from "@/models/service";
import connectDB from "@/lib/db/db";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
): Promise<Response> {
  const { id } = params;
  await connectDB();
  const service = await Service.findById(id);
  if (!service) {
    return new Response(JSON.stringify({ error: "Service not found" }), {
      status: 404,
    });
  }
  return NextResponse.json(service, { status: 200 });
}

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
): Promise<Response> {
  const { id } = params;
  const data = await req.json();
  await connectDB();
  const service = await Service.findByIdAndUpdate(id, data, { new: true });
  if (!service) {
    return new Response(JSON.stringify({ error: "Service not found" }), {
      status: 404,
    });
  }
  return NextResponse.json(service, { status: 200 });
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
): Promise<Response> {
  const { id } = params;
  await connectDB();
  const service = await Service.findByIdAndDelete(id);
  if (!service) {
    return new Response(JSON.stringify({ error: "Service not found" }), {
      status: 404,
    });
  }
  return NextResponse.json(null, { status: 204 });
}