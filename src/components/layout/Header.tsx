"use client";

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
          <Link href="/upload">업로드</Link>
          <Link href="/mypage">마이페이지</Link>
        </ul>
      ) : (
        <button onClick={() => router.back()}>뒤로가기</button>
      )}
    </nav>
  );
}
