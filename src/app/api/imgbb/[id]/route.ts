import { NextRequest, NextResponse } from "next/server";
import { imgbbAPI } from "../../instance";

export async function POST(req: NextRequest, { params }: ParamsWithIdI) {
  const body = await req.formData();

  const formData = new FormData();
  const file = body.get(params.id) as File;
  formData.append("image", file);

  const res = await imgbbAPI.post("/1/upload", formData, {
    params: { name: params.id },
  });

  const data = res.data.data;

  const result = { url: data.url };

  return NextResponse.json(result);
}
