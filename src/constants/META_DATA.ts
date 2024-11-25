import { Metadata } from "next";
import { GOOGLE_ADSENSE, GOOGLE_SEARCH, NAVER_SEARCH } from "./env";

export const META_DATA: Metadata = {
  title: {
    default: `필터레시피`,
    template: `필터레시피 | %s`,
  },
  description: "#아이폰 #인스타 보정법 모아보기",
  keywords: [
    "보정",
    "보정법",
    "아이폰",
    "인스타",
    "필터",
    "보정팁",
    "아이폰 보정",
    "인스타 보정",
    "사진 보정",
  ],
  openGraph: {
    title: "필터레시피",
    description: "#아이폰 #인스타 보정법 모아보기",
    images: ["/meta/og.png"],
  },
  icons: {
    icon: "/meta/favicon.ico",
    apple: "/meta/favicon.ico",
  },
  verification: {
    google: GOOGLE_SEARCH,
  },
  other: {
    "naver-site-verification": NAVER_SEARCH,
    "google-adsense-account": GOOGLE_ADSENSE,
  },
};
