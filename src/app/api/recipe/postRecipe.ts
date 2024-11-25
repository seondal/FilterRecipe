import { db } from "@/firebase";
import {
  collection,
  doc,
  DocumentData,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";
import { imgbbAPI } from "../instance";
import { RecipeI } from "@/interface/recipe";
import { SITE } from "@/constants/env";

export async function postRecipe(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const userid = searchParams.get("userid");
  if (!userid || userid === "") {
    return NextResponse.json(
      { error: "업로드는 로그인 후 가능해요" },
      { status: 401 }
    );
  }

  try {
    const body = await req.formData();

    // 보정 전 이미지 업로드
    const formData1 = new FormData();
    const file1 = body.get("beforeImage") as File;
    formData1.append("image", file1);
    const beforeImgbbRes = await imgbbAPI.post("/1/upload", formData1, {
      params: { name: "beforeImage" },
    });
    const beforeImgData = beforeImgbbRes.data;

    // 보정 후 이미지 업로드
    const formData2 = new FormData();
    const file2 = body.get("afterImage") as File;
    formData2.append("image", file2);
    const afterImageRes = await imgbbAPI.post("/1/upload", formData2, {
      params: { name: "afterImage" },
    });
    const afterImgData = afterImageRes.data;

    const data = {
      userId: userid,
      title: body.get("title") as string,
      image: {
        before: beforeImgData.data.url,
        after: afterImgData.data.url,
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
