import Project from "@/models/project";
import connectDB from "@/lib/db/db";
import { NextResponse } from "next/server";

export async function GET(): Promise<Response> {
  await connectDB();
  const projects = await Project.find({});
  return NextResponse.json(projects, { status: 200 });
}

export async function POST(req: Request): Promise<Response> {
  const data = await req.json();
  await connectDB();
  const project = await Project.create(data);
  return NextResponse.json(project, { status: 201 });
}
