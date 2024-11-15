"use client";

import {
  ArrowUpTrayIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const isMain = pathname === "/";

  return (
    <nav className="px-4 items-center">
      <h2 style={{ marginBottom: "0px" }}>Filter Recipe</h2>
      {isMain ? (
        <nav className="gap-4">
          <Link href="/upload">
            <button className="h-10 flex items-center">
              <ArrowUpTrayIcon className="icon-text" />
              레시피 등록
            </button>
          </Link>
          <Bars3Icon
            className="icon-button"
            onClick={() => router.push("/mypage")}
          />
        </nav>
      ) : (
        <XMarkIcon onClick={() => router.back()} className="icon-button" />
      )}
    </nav>
  );
}
