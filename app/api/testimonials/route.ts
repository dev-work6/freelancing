import Testimonial from "@/models/testimonial";
import connectDB from "@/lib/db/db";
import { NextResponse } from "next/server";

export async function GET(): Promise<Response> {
  await connectDB();
  const testimonials = await Testimonial.find({});
  return NextResponse.json(testimonials, { status: 200 });
}

export async function POST(req: Request): Promise<Response> {
  const data = await req.json();
  await connectDB();
  const testimonial = await Testimonial.create(data);
  return NextResponse.json(testimonial, { status: 201 });
}
