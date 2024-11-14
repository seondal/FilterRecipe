import { db } from "@/firebase";
import { PostRecipeRequestI } from "@/interface/server";
import axios from "axios";
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
  const body = await req.formData();

  // 보정 전 이미지 업로드
  const formDataForBefore = new FormData();
  const beforeImage = body.get("beforeImage") as File;
  formDataForBefore.append("image", beforeImage);
  const beforeImagebbRes = await axios.post(`/api/imgbb`, formDataForBefore);
  const beforeImagebbData = beforeImagebbRes.data;
  console.log("🚀 ~ POST ~ beforeImagebbData:", beforeImagebbData);

  // 보정 후 이미지 업로드
  const formDataForAfter = new FormData();
  const afterImage = body.get("afterImage") as File;
  formDataForAfter.append("image", afterImage);
  const afterImagebbRes = await axios.post(`/api/imgbb`, formDataForAfter);
  const afterImagebbData = afterImagebbRes.data;
  console.log("🚀 ~ POST ~ afterImagebbData:", afterImagebbData);

  // const newRef = doc(collection(db, "recipe"));
  // const newDoc = { id: newRef.id, ...data, timestamp: serverTimestamp() };
  // await setDoc(newRef, newDoc);

  return NextResponse.json({});
}
