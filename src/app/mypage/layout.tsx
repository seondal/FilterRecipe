"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const MYPAGE = [
  { text: "나의 레시피", path: "/mypage" },
  { text: "북마크", path: "/mypage/bookmark" },
];
function Page({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="px-main w-full flex flex-col gap-8">
      <section id="profile" className="flex gap-4 items-center">
        <Image src="/icon/home.svg" alt="" width={56} height={56} />
        <div>skttttt@devocean.com</div>
      </section>
      <section
        id="navigation"
        className="flex w-full rounded-full p-1 items-center bg-slate-300">
        {MYPAGE.map((item) => (
          <div
            onClick={() => router.replace(item.path)}
            key={item.path}
            className="w-1/2 text-center rounded-full py-4"
            style={{
              backgroundColor:
                item.path === pathname ? "whitesmoke" : "#cbd5e1",
            }}>
            {item.text}
          </div>
        ))}
      </section>
      {children}
    </div>
  );
}

export default Page;
