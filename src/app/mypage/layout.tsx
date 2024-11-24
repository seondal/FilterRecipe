"use client";

import { KAKAO_AUTHORIZE } from "@/constants/env";
import { UserCircleIcon } from "@heroicons/react/20/solid";
import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/outline";
import { usePathname, useRouter } from "next/navigation";
import { LayoutI } from "@/interface/page";
import { auth } from "@/firebase";
import Image from "next/image";
import copyToClipboard from "@/utils/copyToClipboard";

const MYPAGE = [
  { text: "업로드한 레시피", path: "/mypage" },
  { text: "저장한 레시피", path: "/mypage/bookmark" },
];
export default function MypageLayout({ children }: LayoutI) {
  const pathname = usePathname();
  const router = useRouter();

  const data = auth.currentUser;
  console.log("🚀 ~ MypageLayout ~ data:", data);
  async function signIn() {
    router.push(KAKAO_AUTHORIZE);
  }

  function signOut() {
    auth.signOut();
    router.refresh();
  }

  async function handleCopyUserid() {
    if (data) {
      copyToClipboard(data.uid, "내 아이디가 복사되었어요");
    }
  }

  return (
    <div>
      {data ? (
        <>
          <article
            id="profile"
            className="flex justify-between items-center gap-2">
            <div className="flex items-center gap-2" onClick={handleCopyUserid}>
              {data.photoURL ? (
                <Image
                  src={data.photoURL}
                  width={40}
                  height={40}
                  alt=""
                  className="rounded-full"
                />
              ) : (
                <UserCircleIcon className="icon-button" />
              )}
              <div className="flex flex-col">
                <strong>{data.displayName}님 안녕하세요</strong>
                <small className="text-xs text-wrap">@{data.uid}</small>
              </div>
            </div>
            <button className="secondary outline" onClick={signOut}>
              로그아웃
            </button>
          </article>
        </>
      ) : (
        <article>
          <button className="contrast" onClick={signIn}>
            <ChatBubbleOvalLeftEllipsisIcon className="icon-text" />
            카카오로 소셜 로그인
          </button>
        </article>
      )}
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
