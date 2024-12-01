import { NextResponse } from "next/server";
import connectDB from "@/lib/db/db";
import User from "@/models/user";
import { signToken } from "@/lib/auth/jwt";

export async function POST(req: Request) {
  try {
    await connectDB();

    const { email, password, name } = await req.json();

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    // Create new user
    const user = await User.create({
      email,
      password,
      name,
    });

    // Generate token
    const token = signToken({ userId: user._id });

    // Create response with user data
    const response = NextResponse.json({
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
      },
      token,
    });

    // Set HTTP-only cookie
    response.cookies.set({
      name: "authToken",
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      // 1 day expiry
      maxAge: 60 * 60 * 24,
    });

    return response;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ error: 'An unknown error occurred' }, { status: 500 });
  }
}
