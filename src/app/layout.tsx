import "@picocss/pico";
import "@/style/globals.css";
import "@/style/theme.css";

import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";
import { GOOGLE_ADSENSE, GOOGLE_ANALYITICS } from "@/constants/env";
import { META_DATA } from "@/constants/META_DATA";
import Header from "@/components/layout/Header";

export const metadata = META_DATA;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kor">
      <head>
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${GOOGLE_ADSENSE}`}
          crossOrigin="anonymous"></Script>
      </head>
      <body className="max-w-mobile m-auto min-h-screen bg-default">
        <header>
          <Header />
        </header>
        <main className="p-4">
          {children}
          <div className="h-16" />
        </main>
        <GoogleAnalytics gaId={GOOGLE_ANALYITICS} />
      </body>
    </html>
  );
}
