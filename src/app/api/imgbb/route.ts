import { NextRequest, NextResponse } from "next/server";
import { imgbbAPI } from "../instance";

export async function POST(req: NextRequest) {
  const body = await req.formData();

  const res = await imgbbAPI.post("/1/upload", body);

  const data = res.data;

  return NextResponse.json(data);
}
