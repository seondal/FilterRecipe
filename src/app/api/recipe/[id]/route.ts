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
        { error: "해당하는 아이디를 가진 레시피가 존재하지 않아요" },
        { status: 404 }
      );
    }

    return NextResponse.json(snap.data());
  } catch (error) {
    return NextResponse.json(
      { error: "개발자에게 문의해주세요" },
      { status: 500 }
    );
  }
}
