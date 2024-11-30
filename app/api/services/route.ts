import Service from "@/models/service";
import connectDB from "@/lib/db/db";
import { NextResponse } from "next/server";

export async function GET(): Promise<Response> {
  await connectDB();
  const services = await Service.find({});
  return NextResponse.json(services, { status: 200 });
}

export async function POST(req: Request): Promise<Response> {
  const data = await req.json();
  await connectDB();
  const service = await Service.create(data);
  return NextResponse.json(service, { status: 201 });
}
