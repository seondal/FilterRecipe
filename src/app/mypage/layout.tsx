"use client";

import { KAKAO_AUTHORIZE } from "@/constants/env";
import { UserCircleIcon } from "@heroicons/react/20/solid";
import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/outline";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { LayoutI } from "@/interface/page";

const MYPAGE = [
  { text: "업로드한 레시피", path: "/mypage" },
  { text: "저장한 레시피", path: "/mypage/bookmark" },
];
export default function MypageLayout({ children }: LayoutI) {
  const { data } = useSession();
  const pathname = usePathname();
  const router = useRouter();

  async function signIn() {
    router.replace(KAKAO_AUTHORIZE);
  }

  function signOut() {}

  return (
    <div>
      <article id="profile" className="flex justify-between items-center">
        {data ? (
          <>
            <div>
              <UserCircleIcon className="icon-button mr-4" />
              <strong>{data.user?.name}님 안녕하세요</strong>
              &nbsp;
              <small>@{data.user?.id}</small>
            </div>
            <button className="secondary outline" onClick={signOut}>
              로그아웃
            </button>
          </>
        ) : (
          <button className="contrast" onClick={signIn}>
            <ChatBubbleOvalLeftEllipsisIcon className="icon-text" />
            카카오로 소셜 로그인
          </button>
        )}
      </article>
      <section id="navigation" role="search">
        {MYPAGE.map((item) => (
          <button
            onClick={() => router.replace(item.path)}
            key={item.path}
            className={item.path === pathname ? "primary" : "outline"}>
            {item.text}
          </button>
        ))}
      </section>
      {children}
    </div>
  );
}
