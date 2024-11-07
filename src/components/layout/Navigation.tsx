"use client";

import ICON from "@/constants/ICON";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Updated to use next/navigation

const BOTTOM_MENU = [
  { path: "/", text: "메인", icon: ICON.nav.home },
  { path: "/upload", text: "등록하기", icon: ICON.nav.upload },
  { path: "/mypage", text: "마이페이지", icon: ICON.nav.mypage },
] as const;

export default function Navigation() {
  const pathname = usePathname(); // Get the current path using usePathname

  // Check if the current path is active
  const isActive = (path: string) => pathname === path;

  return (
    <nav>
      {BOTTOM_MENU.map((item) => (
        <Link href={item.path} key={item.path}>
          <div>
            <Image src={item.icon} alt={item.icon} width={20} height={20} />
            <div
              className={`${
                isActive(item.path) ? "text-[#330218]" : "text-[#999999]"
              }`}>
              {item.text}
            </div>
          </div>
        </Link>
      ))}
    </nav>
  );
}
