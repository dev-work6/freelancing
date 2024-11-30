import Testimonial from "@/models/testimonial";
import connectDB from "@/lib/db/db";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
): Promise<Response> {
  const { id } = params;
  await connectDB();
  const testimonial = await Testimonial.findById(id);
  if (!testimonial) {
    return new Response(JSON.stringify({ error: "Testimonial not found" }), {
      status: 404,
    });
  }
  return NextResponse.json(testimonial, { status: 200 });
}

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
): Promise<Response> {
  const { id } = params;
  const data = await req.json();
  await connectDB();
  const testimonial = await Testimonial.findByIdAndUpdate(id, data, {
    new: true,
  });
  if (!testimonial) {
    return new Response(JSON.stringify({ error: "Testimonial not found" }), {
      status: 404,
    });
  }
  return NextResponse.json(testimonial, { status: 200 });
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
): Promise<Response> {
  const { id } = params;
  await connectDB();
  const testimonial = await Testimonial.findByIdAndDelete(id);
  if (!testimonial) {
    return new Response(JSON.stringify({ error: "Testimonial not found" }), {
      status: 404,
    });
  }
  return NextResponse.json(null, { status: 204 });
}
