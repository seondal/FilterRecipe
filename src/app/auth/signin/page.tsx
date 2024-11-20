import { kakaoApi, myApi } from "@/app/api/instance";
import { KAKAO_CLIENT_ID, KAKAO_REDIRECT_URI } from "@/constants/env";
import { redirect } from "next/navigation";

interface SigninPageI {
  searchParams: { code: string };
}

export default async function SigninPage({ searchParams }: SigninPageI) {
  const code = searchParams.code;

  const res = myApi.get(`/auth/signin`, { params: { code: code } });
  console.log("🚀 ~ SigninPage ~ res:", res);
  redirect("/mypage");
}
