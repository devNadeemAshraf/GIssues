import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export function GET() {
  return NextResponse.json("/GET");
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const token = body.token;

  if (!token) {
    return new NextResponse("Invalid Token", { status: 400 });
  }

  try {
    const resp = await axios.get("https://api.github.com/issues", {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: "Bearer " + token,
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });
    const data = await resp.data;
    
    return NextResponse.json(data);
  } catch (error) {
    return new NextResponse(error as string, { status: 500 });
  }
}
