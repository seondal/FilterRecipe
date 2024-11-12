"use client";

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
      <section id="profile">
        <Image src="/icon/home.svg" alt="" width={56} height={56} />
        <div>skttttt@devocean.com</div>
      </section>
      <section id="navigation" role="search">
        {MYPAGE.map((item) => (
          <button
            onClick={() => router.replace(item.path)}
            key={item.path}
            className={item.path === pathname ? "primary" : "secondary"}>
            {item.text}
          </button>
        ))}
      </section>
      {children}
    </div>
  );
}

export default Page;
