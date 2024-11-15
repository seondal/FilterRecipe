import "@picocss/pico";
import "@/style/globals.css";
import "@/style/theme.css";

import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";
import { GOOGLE_ADSENSE, GOOGLE_ANALYITICS } from "@/constants/env";
import { META_DATA } from "@/constants/META_DATA";
import Header from "@/components/Header";
import AuthContext from "@/context/AuthContext";
import { getSession } from "next-auth/react";

export const metadata = META_DATA;

export default async function RootLayout({ children }: LayoutI) {
  const session = await getSession();

  return (
    <html lang="kor" className="modal-is-opening">
      <head>
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${GOOGLE_ADSENSE}`}
          crossOrigin="anonymous"></Script>
      </head>
      <body className="max-w-mobile m-auto min-h-screen bg-default">
        <AuthContext session={session}>
          <header>
            <Header />
          </header>
          <main className="p-4">{children}</main>
        </AuthContext>
        <GoogleAnalytics gaId={GOOGLE_ANALYITICS} />
      </body>
    </html>
  );
}
