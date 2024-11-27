import { NextRequest } from "next/server";
import { getRecipe } from "./getRecipe";
import { postRecipe } from "./postRecipe";

/**
 * @swagger
 * /recipe:
 *   get:
 *     summary: 레시피 목록 반환
 *     description: 파라미터를 기반으로 조건에 맞는 레시피를 반환합니다
 *     parameters:
 *       - name: category
 *         in: query
 *         description: Filter recipes by category
 *         required: false
 *         schema:
 *           type: string
 *       - name: keyword
 *         in: query
 *         description: Search recipes by keyword
 *         required: false
 *         schema:
 *           type: string
 *       - name: userid
 *         in: query
 *         description: Filter recipes by user ID
 *         required: false
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: 레시피 목록
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
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               userid:
 *                 type: string
 *                 description: User ID
 *               beforeImage:
 *                 type: string
 *                 format: binary
 *               afterImage:
 *                 type: string
 *                 format: binary
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Success
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */
export async function POST(req: NextRequest) {
  return postRecipe(req);
}
