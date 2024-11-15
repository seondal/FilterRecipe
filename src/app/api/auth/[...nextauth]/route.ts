import NextAuth from "next-auth";
import Kakao from "next-auth/providers/kakao";

const handler = NextAuth({
  providers: [
    // OAuth authentication providers...
    Kakao({
      clientId: process.env.KAKAO_CLIENT_ID || "",
      clientSecret: process.env.KAKAO_CLIENT_SECRET || "",
    }),
  ],
});

export { handler as GET, handler as POST };
