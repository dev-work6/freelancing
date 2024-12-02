import { NextResponse } from "next/server";
import dbConnect from "@/lib/db/db";
import HourlyService from "@/models/hourlyService";
import { verifyToken } from "@/lib/auth/jwt";

export async function GET(request: Request) {
  try {
    await dbConnect();
    const { searchParams } = new URL(request.url);
    
    // Build query filters
    const filters: any = { status: "available" };
    
    if (searchParams.get('skill')) {
      filters.skills = { $in: [searchParams.get('skill')] };
    }
    
    if (searchParams.get('minRate')) {
      filters.hourlyRate = { $gte: parseInt(searchParams.get('minRate')!) };
    }
    
    if (searchParams.get('maxRate')) {
      filters.hourlyRate = { ...filters.hourlyRate, $lte: parseInt(searchParams.get('maxRate')!) };
    }

    const services = await HourlyService.find(filters)
      .populate('userId', 'name email')
      .sort({ rating: -1, createdAt: -1 })
      .limit(20);

    return NextResponse.json(services);
  } catch (error) {
    console.error('GET hourly services error:', error);
    return NextResponse.json(
      { error: "Failed to fetch hourly services" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const authHeader = request.headers.get('authorization');
    if (!authHeader) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const token = authHeader.split(' ')[1];
    const decoded = verifyToken(token);
    if (!decoded || typeof decoded === 'string') {
      return NextResponse.json({ error: "Invalid token" }, { status: 401 });
    }

    await dbConnect();
    const body = await request.json();

    // Validate required fields
    const requiredFields = ['name', 'description', 'hourlyRate', 'currency', 'minimumHours', 'availability'];
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `${field} is required` },
          { status: 400 }
        );
      }
    }

    const service = await HourlyService.create({
      ...body,
      userId: decoded.userId  
    });

    return NextResponse.json(service, { status: 201 });
  } catch (error: any) {
    console.error('POST hourly service error:', error);
    return NextResponse.json(
      { error: error.message || "Failed to create hourly service" },
      { status: 400 }
    );
  }
}