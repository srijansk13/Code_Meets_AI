import { NextResponse } from "next/server";

// In-memory counter for development purposes
let count = 0;

export async function POST() {
  count += 1;
  
  // Log to terminal as requested
  console.log(`🚀 CODE MEETS AI | New interest registered | Total: ${count}`);
  
  return NextResponse.json({
    success: true,
    interestedCount: count
  });
}
