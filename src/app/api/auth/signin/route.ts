import { NextRequest, NextResponse } from "next/server";
import { kakaoApi } from "../../instance";
import { KAKAO_CLIENT_ID, KAKAO_REDIRECT_URI } from "@/constants/env";
import { OAuthProvider } from "firebase/auth/web-extension";
import { signInWithCredential } from "firebase/auth";
import { auth } from "@/firebase";

interface PostKakaoTokenI {
  access_token: string;
  token_type: string;
  refresh_token: string;
  id_token: string;
  expires_in: number;
  scope: string;
  refresh_token_expires_in: number;
}

interface FirebaseTokenI {
  providerId: "oidc.kakao";
  signinMethod: "oidc.kakao";
  pendingToken: string;
  idToken: string;
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");

  const provider = new OAuthProvider("oidc.kakao");

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
    const { id_token } = kakaoRes.data;

    const credential = provider.credential({
      idToken: id_token,
    });
    const firebaseRes = await signInWithCredential(auth, credential);
    const data = firebaseRes.user;

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(error);
  }
}
