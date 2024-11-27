import { db } from "@/firebase";
import { ParamsWithIdI } from "@/interface/page";
import { doc, getDoc } from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";

/**
 * @swagger
 * /recipe/{id}:
 *   get:
 *     summary: 레시피 상세보기
 *     description: 레시피 아이디 파라미터를 기반으로 레시피 정보를 반환합니다
 *     parameters:
 *       - name: id
 *         in: path
 *         description: 레시피 아이디 (레시피 상세보기 경로와 동일)
 *         required: true
 *         schema:
 *           type: string
 *           example: "OCewCpg7SCVJhUJQ4w6o"
 *     responses:
 *       200:
 *         description: 레시피 정보
 *       404:
 *         description: 주어진 아이디에 해당하는 레시피가 없음
 *       500:
 *         description: Internal server error
 */
export async function GET(req: NextRequest, { params }: ParamsWithIdI) {
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
