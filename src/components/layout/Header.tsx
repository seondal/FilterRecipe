"use client";

import { Bars3Icon } from "@heroicons/react/20/solid";
import { ArrowUpTrayIcon, BackspaceIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const isMain = pathname === "/";

  return (
    <nav>
      <h1>Filter Recipe</h1>
      {isMain ? (
        <ul>
          <Link href="/upload">
            <button>
              <ArrowUpTrayIcon className="icon-text" />
              업로드
            </button>
          </Link>
          <Link href="/mypage">
            <Bars3Icon className="icon-button" />
          </Link>
        </ul>
      ) : (
        <BackspaceIcon onClick={() => router.back()} className="size-12" />
      )}
    </nav>
  );
}
