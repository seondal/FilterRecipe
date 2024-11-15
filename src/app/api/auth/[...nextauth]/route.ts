// src/app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import KakaoProvider from "next-auth/providers/kakao";
import { NextAuthOptions } from "next-auth";

// NextAuth 설정을 객체로 정의
const authOptions: NextAuthOptions = {
  providers: [
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID || "",
      clientSecret: process.env.KAKAO_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    session: ({ session, token }) => ({
      ...session,
      user: {
        ...session.user,
        id: token.sub,
      },
    }),
  },
};

// NextAuth 핸들러를 GET과 POST 메서드에 맞게 내보내기
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
