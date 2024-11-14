import { db } from "@/firebase";
import {
  collection,
  doc,
  getDocs,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";
import { myApi } from "../instance";
import { RecipeI } from "@/interface/recipe";
import { SITE } from "@/constants/env";

/** GET Recipe */
export async function GET(req: NextRequest, res: NextResponse) {
  const recipeSnapshot = await getDocs(collection(db, "recipe"));
  const results = recipeSnapshot.docs.map((doc) => doc.data());

  return NextResponse.json(results);
}

/** POST Recipe */
export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const body = await req.formData();

    // 보정 전 이미지 업로드
    const beforeImgbbRes = await myApi.post(`/imgbb/beforeImage`, body);
    const beforeImgData = beforeImgbbRes.data;

    // 보정 후 이미지 업로드
    const afterImgbbRes = await myApi.post(`/imgbb/afterImage`, body);
    const afterImgData = afterImgbbRes.data;

    const data = {
      title: body.get("title") as string,
      image: {
        before: beforeImgData.url,
        after: afterImgData.url,
      },
      category: {
        main: body.get("mainCategory") as string,
        sub: body.get("subCategory") as string,
      },
      description: body.get("description") as string,
      property: {
        exposure: parseInt(body.get("exposure") as string),
        brightness: parseFloat(body.get("brightness") as string),
        highlight: parseFloat(body.get("highlight") as string),
        shadow: parseFloat(body.get("shadow") as string),
        contrast: parseFloat(body.get("contrast") as string),
        lightness: parseFloat(body.get("lightness") as string),
        blackPoint: parseFloat(body.get("blackPoint") as string),
        saturation: parseFloat(body.get("saturation") as string),
        colorClarity: parseFloat(body.get("colorClarity") as string),
        warmth: parseFloat(body.get("warmth") as string),
        hue: parseFloat(body.get("hue") as string),
        sharpness: parseFloat(body.get("sharpness") as string),
        clarity: parseFloat(body.get("clarity") as string),
        noiseReduction: parseFloat(body.get("noiseReduction") as string),
        vignette: parseFloat(body.get("vignette") as string),
      },
    };

    const newRef = doc(collection(db, "recipe"));
    const newDoc: RecipeI = {
      id: newRef.id,
      ...data,
      timestamp: serverTimestamp(),
    };
    await setDoc(newRef, newDoc);

    const redirectUrl = `${SITE}/recipe/${newRef.id}`;
    return NextResponse.redirect(redirectUrl);
  } catch (error) {
    console.log(error);
    return NextResponse.redirect(SITE);
  }
}
