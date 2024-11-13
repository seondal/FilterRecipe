// pages/api/users.js
import { db } from "@/firebase";
import { doc, getDoc } from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const ref = doc(db, "recipe", params.id);

  try {
    const snap = await getDoc(ref);

    if (!snap.exists()) {
      return NextResponse.json(
        { error: "경로의 레시피 아이디를 확인해주세요" },
        { status: 404 }
      );
    }

    return NextResponse.json(snap.data());
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
