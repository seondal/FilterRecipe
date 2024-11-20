export const GOOGLE_ANALYITICS = process.env.NEXT_PUBLIC_ANALYTICS_ID || "";
export const GOOGLE_ADSENSE = process.env.NEXT_PUBLIC_ADSENSE || "";
export const NAVER_SEARCH = process.env.NEXT_PUBLIC_NAVER_SEARCH || "";
export const GOOGLE_SEARCH = process.env.NEXT_PUBLIC_GOOGLE_SEARCH || "";

export const DEVELOPER = process.env.NEXT_PUBLIC_DEVELOPER || "";

export const SITE = process.env.NEXT_PUBLIC_SITE || "http://localhost:3000";

export const KAKAO_CLIENT_ID = process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID || "";
export const KAKAO_REDIRECT_URI = `${SITE}/auth/signin`;
export const KAKAO_AUTHORIZE = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;
