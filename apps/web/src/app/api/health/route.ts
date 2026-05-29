import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    {
      success: true,
      message: "New Home frontend API is running.",
      app: "New Home",
      service: "web",
      status: "healthy",
      timestamp: new Date().toISOString()
    },
    {
      status: 200
    }
  );
}