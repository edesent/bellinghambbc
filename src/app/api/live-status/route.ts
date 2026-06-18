import { NextResponse } from "next/server";
import { getLiveStatus } from "@/lib/live";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export async function GET() {
  const start = Date.now();
  const result = await getLiveStatus("UCgZhLi5jHOWD3j9dhY24S-g");
  return NextResponse.json({ ...result, elapsedMs: Date.now() - start });
}
