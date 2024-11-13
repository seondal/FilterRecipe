// pages/api/users.js
import { db } from "@/firebase";
import { collection, getDocs } from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  const recipeSnapshot = await getDocs(collection(db, "recipe"));
  const results = recipeSnapshot.docs.map((doc) => doc.data());

  return NextResponse.json(results);
}
