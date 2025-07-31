import { NextRequest, NextResponse } from "next/server";
import { writeFile, readFile, mkdir } from "fs/promises";
import path from "path";

const logFile = path.join(process.cwd(), "public", "log.json");

export async function GET(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for") || "unknown";
  const ua = req.headers.get("user-agent") || "unknown";
  const timestamp = new Date().toISOString();

  let logs: any[] = [];

  try {
    const existing = await readFile(logFile, "utf8");
    logs = JSON.parse(existing);
  } catch {}

  logs.push({ ip, ua, timestamp });

  await writeFile(logFile, JSON.stringify(logs, null, 2));

  return new NextResponse(null, { status: 204 });
}
