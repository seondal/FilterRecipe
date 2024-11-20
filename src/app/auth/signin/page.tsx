"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { myApi } from "@/app/api/instance";
import { auth } from "@/firebase";
import {
  browserLocalPersistence,
  OAuthProvider,
  setPersistence,
  signInWithCredential,
} from "firebase/auth";

interface SigninPageI {
  searchParams: { code: string };
}

export default function SigninPage({ searchParams }: SigninPageI) {
  const router = useRouter(); // 클라이언트에서 리디렉션을 처리하기 위한 router 사용
  const code = searchParams.code;

  useEffect(() => {
    const signIn = async () => {
      try {
        // API 호출
        const res = await myApi.get(`/auth/signin`, { params: { code: code } });
        const data = res.data;

        // OAuth provider 설정
        const provider = new OAuthProvider("oidc.kakao");
        const credential = provider.credential({
          idToken: data.id_token,
        });

        // Firebase 인증 설정 및 로그인
        await setPersistence(auth, browserLocalPersistence);
        const fbRes = await signInWithCredential(auth, credential);

        // 로그인 성공 후 리디렉션
        router.replace("/mypage");
      } catch (error) {
        console.error("Error during sign-in:", error);
      }
    };

    signIn();
  }, [code, router]);

  return <div>로그인중...</div>;
}
