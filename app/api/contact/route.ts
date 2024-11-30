import { NextResponse } from "next/server";
import Contact from "@/models/contact";
import connectDB from "@/lib/db/db";

export async function POST(req: Request): Promise<Response> {
  const data = await req.json();
  await connectDB();
  const contact = await Contact.create(data);
  return NextResponse.json(contact, { status: 201 });
}

export async function GET(req: Request): Promise<Response> {
  try {
    const { searchParams } = new URL(req.url);
    
    // Pagination
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const skip = (page - 1) * limit;

    // Filtering
    const filterParams: any = {};
    if (searchParams.get("name")) {
      filterParams.name = { $regex: searchParams.get("name"), $options: "i" };
    }
    if (searchParams.get("email")) {
      filterParams.email = { $regex: searchParams.get("email"), $options: "i" };
    }
    if (searchParams.get("status")) {
      filterParams.status = searchParams.get("status");
    }

    // Sorting
    const sortField = searchParams.get("sortBy") || "createdAt";
    const sortOrder = searchParams.get("order") === "asc" ? 1 : -1;
    const sortOptions = { [sortField]: sortOrder };

    await connectDB();

    // Get total count for pagination
    const totalCount = await Contact.countDocuments(filterParams);

    // Get filtered and paginated contacts
    const contacts = await Contact.find(filterParams)
      .sort({ [sortField]: sortOrder })
      .skip(skip)
      .limit(limit)
      .lean();

    return NextResponse.json({
      contacts,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(totalCount / limit),
        totalItems: totalCount,
        itemsPerPage: limit
      }
    }, { 
      status: 200,
      headers: {
        'Cache-Control': 'public, max-age=300' // 5 minutes cache
      }
    });

  } catch (error) {
    console.error("Error fetching contacts:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
