import { NextRequest } from "next/server";
import { getRecipe } from "./getRecipe";
import { postRecipe } from "./postRecipe";

export async function GET(req: NextRequest) {
  return getRecipe(req);
}

export async function POST(req: NextRequest) {
  return postRecipe(req);
}
