import { db } from "@/firebase";
import { PostRecipeRequestI } from "@/interface/server";
import {
  collection,
  doc,
  getDocs,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  const recipeSnapshot = await getDocs(collection(db, "recipe"));
  const results = recipeSnapshot.docs.map((doc) => doc.data());

  return NextResponse.json(results);
}

export async function POST(req: NextRequest, res: NextResponse) {
  const newRef = doc(collection(db, "recipe"));

  const body: PostRecipeRequestI = await req.json();
  const data = { id: newRef.id, ...body, timestamp: serverTimestamp() };

  await setDoc(newRef, data);

  return NextResponse.json(data);
}
