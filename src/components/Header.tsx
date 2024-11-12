"use client";

import {
  ArrowUpTrayIcon,
  BackspaceIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const isMain = pathname === "/";

  return (
    <nav className="px-4 items-center">
      <h1 style={{ marginBottom: "0px" }}>Filter Recipe</h1>
      {isMain ? (
        <nav className="gap-4">
          <Link href="/upload">
            <button>
              <ArrowUpTrayIcon className="icon-text" />
              등록하기
            </button>
          </Link>
          <Bars3Icon
            className="icon-button"
            onClick={() => router.push("/mypage")}
          />
        </nav>
      ) : (
        <BackspaceIcon onClick={() => router.back()} className="size-12" />
      )}
    </nav>
  );
}
