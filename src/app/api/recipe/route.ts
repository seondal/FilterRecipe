import { NextRequest } from "next/server";
import { getRecipe } from "./getRecipe";
import { postRecipe } from "./postRecipe";

/**
 * @swagger
 * /recipe:
 *   get:
 *     summary: 레시피 목록 반환
 *     description: 카테고리, 업로드한 유저 아이디, 검색 키워드 쿼리를 기반으로 조건에 맞는 레시피 정보의 목록을 반환합니다
 *     parameters:
 *       - name: category
 *         in: query
 *         description: 카테고리 단어
 *         required: false
 *         schema:
 *           type: string
 *           example: "하늘,노을"
 *       - name: keyword
 *         in: query
 *         description: 검색 키워드
 *         required: false
 *         schema:
 *           type: string
 *           example: "손톱"
 *       - name: userid
 *         in: query
 *         description: 유저 아아디 (firebase auth uid)
 *         required: false
 *         schema:
 *           type: string
 *           example: "zbvnZWA4E8VY0El42YlbONb1YZO2"
 *     responses:
 *       200:
 *         description: 레시피 정보 목록
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */
export async function GET(req: NextRequest) {
  return getRecipe(req);
}

/**
 * @swagger
 * /recipe:
 *   post:
 *     summary: 레시피 업로드
 *     description: 업로드 페이지에서 레시피를 업로드합니다
 *     parameters:
 *       - in: query
 *         name: userid
 *         description: 업로드하는 유저 아이디
 *         required: true
 *         schema:
 *           type: string
 *           example: "zbvnZWA4E8VY0El42YlbONb1YZO2"
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *          required: true
 *          schema:
 *            type: object
 *            properties:
 *              title:
 *                type: string
 *                description: 레시피 제목
 *              beforeImage:
 *                type: string
 *                format: binary
 *                description: 보정 전 이미지
 *              afterImage:
 *                type: string
 *                format: binary
 *                description: 보정 후 이미지
 *              description:
 *                type: string
 *                description: 레시피 설명
 *              mainCategory:
 *                type: string
 *                description: 메인 카테고리
 *              subCategory:
 *                type: string
 *                description: 서브 카테고리
 *              exposure:
 *                type: number
 *                description: "노출"
 *              brightness:
 *                type: number
 *                description: "휘도"
 *              highlight:
 *                type: number
 *                description: 하이라이트"
 *              shadow:
 *                type: number
 *                description: "그림자"
 *              contrast:
 *                type: number
 *                description: "대비"
 *              lightness:
 *                type: number
 *                description: "밝기"
 *              blackPoint:
 *                type: number
 *                description: "블랙포인트"
 *              saturation:
 *                type: number
 *                description: "채도"
 *              colorClarity:
 *                type: number
 *                description: "색 선명도"
 *              warmth:
 *                type: number
 *                description: "따뜻함"
 *              hue:
 *                type: number
 *                description: "색조"
 *              sharpness:
 *                type: number
 *                description: "선명도"
 *              clarity:
 *                type: number
 *                description: "명료도"
 *              noiseReduction:
 *                type: number
 *                description: "노이즈 감소"
 *              vignette:
 *                type: number
 *                description: "비네트"
 *     responses:
 *       200:
 *         description: 업로드한 레시피의 상세보기 페이지로 리다이렉트
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */
export async function POST(req: NextRequest) {
  return postRecipe(req);
}
