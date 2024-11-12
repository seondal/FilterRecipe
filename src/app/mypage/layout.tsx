"use client";

import { UserCircleIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

const MYPAGE = [
  { text: "업로드한 레시피", path: "/mypage" },
  { text: "저장한 레시피", path: "/mypage/bookmark" },
];
function Page({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div>
      <article id="profile">
        <UserCircleIcon className="icon-button mr-4" />
        <strong>skttttt@devocean.com</strong>
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

export default Page;
