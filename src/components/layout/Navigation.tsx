"use client";

import ICON from "@/constants/ICON";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BOTTOM_MENU = [
  { path: "/", text: "메인", icon: ICON.nav.home },
  { path: "/upload", text: "등록하기", icon: ICON.nav.upload },
  { path: "/mypage", text: "마이페이지", icon: ICON.nav.mypage },
] as const;

export default function Navigation() {
  const pathname = usePathname();
  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  return (
    <nav>
      {BOTTOM_MENU.map((item) => (
        <Link href={item.path} key={item.path}>
          <button
            className={`${isActive(item.path) ? "primary" : "secondary"}`}>
            {item.text}
          </button>
        </Link>
      ))}
    </nav>
  );
}
