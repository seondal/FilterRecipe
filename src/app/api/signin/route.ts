import { NextRequest, NextResponse } from "next/server";
import { KAKAO_CLIENT_ID, KAKAO_REDIRECT_URI } from "@/constants/env";
import { kakaoApi } from "../instance";
interface PostKakaoTokenI {
  access_token: string;
  token_type: string;
  refresh_token: string;
  id_token: string;
  expires_in: number;
  scope: string;
  refresh_token_expires_in: number;
}

/**
 * @swagger
 * /signin:
 *   get:
 *     summary: 카카오 OAuth 토큰 발급
 *     description: "카카오 OAuth 인증 후, 받은 인증 코드를 이용하여 액세스 토큰을 발급받는 API"
 *     operationId: "getKakaoToken"
 *     parameters:
 *       - in: query
 *         name: code
 *         description: "카카오 로그인 후 리다이렉트 URL에 포함된 인증 코드"
 *         required: true
 *         schema:
 *           type: string
 *           example: "12345abcde67890fghij"
 *     responses:
 *       '200':
 *         description: "카카오 토큰 발급 성공"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 access_token:
 *                   type: string
 *                   description: "카카오 API에 접근할 수 있는 액세스 토큰"
 *                   example: "access_token_example"
 *                 token_type:
 *                   type: string
 *                   description: "토큰 타입, 일반적으로 'bearer'"
 *                   example: "bearer"
 *                 refresh_token:
 *                   type: string
 *                   description: "액세스 토큰 갱신을 위한 리프레시 토큰"
 *                   example: "refresh_token_example"
 *                 id_token:
 *                   type: string
 *                   description: "사용자 인증 정보를 담은 ID 토큰"
 *                   example: "id_token_example"
 *                 expires_in:
 *                   type: integer
 *                   description: "액세스 토큰의 만료 시간(초 단위)"
 *                   example: 3600
 *                 scope:
 *                   type: string
 *                   description: "토큰의 유효 범위"
 *                   example: "account_info, profile"
 *                 refresh_token_expires_in:
 *                   type: integer
 *                   description: "리프레시 토큰의 만료 시간(초 단위)"
 *                   example: 86400
 *       '400':
 *         description: "잘못된 요청, 인증 코드가 없거나 잘못된 경우"
 *       '401':
 *         description: "Unauthorized, 유효하지 않은 인증 코드"
 *       '500':
 *         description: "서버 오류, 토큰 발급 중 문제 발생"
 */

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");

  try {
    const kakaoRes = await kakaoApi.post<PostKakaoTokenI>(
      "/oauth/token",
      {
        grant_type: "authorization_code",
        client_id: KAKAO_CLIENT_ID,
        redirect_uri: KAKAO_REDIRECT_URI,
        code: code,
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        },
      }
    );
    const data = kakaoRes.data;

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(error);
  }
}
