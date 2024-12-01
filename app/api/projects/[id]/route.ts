import { NextResponse } from "next/server";
import Project from "@/models/project";
import connectDB from "@/lib/db/db";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
): Promise<Response> {
  const id = (await params).id;
  await connectDB();
  const project = await Project.findById(id);
  if (!project) {
    return new Response(JSON.stringify({ error: "Project not found" }), {
      status: 404,
    });
  }
  return NextResponse.json(project, { status: 200 });
}

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
): Promise<Response> {
  const id = (await params).id;
  const data = await req.json();
  await connectDB();
  const project = await Project.findByIdAndUpdate(id, data, { new: true });
  if (!project) {
    return new Response(JSON.stringify({ error: "Project not found" }), {
      status: 404,
    });
  }
  return NextResponse.json(project, { status: 200 });
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
): Promise<Response> {
  const id = (await params).id;
  await connectDB();
  const project = await Project.findByIdAndDelete(id);
  if (!project) {
    return new Response(JSON.stringify({ error: "Project not found" }), {
      status: 404,
    });
  }
  return NextResponse.json(null, { status: 204 });
}
