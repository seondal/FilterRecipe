"use client";

import { auth } from "@/firebase";
import {
  ArrowUpTrayIcon,
  Bars3Icon,
  UserCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const data = auth.currentUser;
  const pathname = usePathname();
  const router = useRouter();
  const isMain = pathname === "/";

  function handleUploadButton() {
    if (data) {
      return router.push("/upload");
    }
    alert("로그인하고 나만의 레시피를 공유해보세요!");
    return router.push("/mypage");
  }

  return (
    <nav className="px-4 items-center">
      <h2
        style={{ marginBottom: "0px" }}
        className="cursor-pointer"
        onClick={() => router.push("/")}>
        Filter Recipe
      </h2>
      {isMain ? (
        <nav className="gap-4">
          <button
            className="h-10 flex items-center"
            onClick={handleUploadButton}>
            <ArrowUpTrayIcon className="icon-text" />
            레시피 등록
          </button>
          <div
            className="cursor-pointer"
            onClick={() => router.push("/mypage")}>
            {data ? (
              <UserCircleIcon className="icon-button" />
            ) : (
              <Bars3Icon className="icon-button" />
            )}
          </div>
        </nav>
      ) : (
        <XMarkIcon onClick={() => router.back()} className="icon-button" />
      )}
    </nav>
  );
}
