import { Metadata } from "next";
import { GOOGLE_ADSENSE, GOOGLE_SEARCH, NAVER_SEARCH } from "./env";

export const META_DATA: Metadata = {
  title: {
    default: `필터레시피`,
    template: `필터레시피 | %s`,
  },
  description: "망한 사진도, 인생 사진으로",
  openGraph: {
    title: "필터레시피",
    description: "망한 사진도, 인생 사진으로",
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
