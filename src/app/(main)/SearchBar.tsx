"use client";

import { ChangeEvent, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import Category from "@/components/Category";

export default function SearchBar() {
  const params = useSearchParams();
  const keywordQuery = params.get("keyword");
  const categoryQuery = params.get("category");
  const userid = params.get("userid");

  const router = useRouter();
  const [keyword, setKeyword] = useState(
    keywordQuery ?? userid ? `@${userid}` : ""
  );

  const [categoryActive, setCategoryActive] = useState(false);

  function onClose() {
    setCategoryActive(false);
  }

  function handleSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    if (keyword.startsWith("@")) {
      const tmpUserid = keyword.substring(1);
      return router.push(`/?userid=${tmpUserid}`);
    }

    return router.push(`/?keyword=${keyword}`);
  }

  return (
    <>
      <fieldset className="flex gap-4">
        <form className="flex flex-grow" onSubmit={handleSubmit}>
          <input
            name="keyword"
            type="search"
            placeholder="키워드로 검색하기"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </form>
        <button
          className={categoryQuery ? "outline" : "outline secondary"}
          onClick={() => setCategoryActive((cur) => !cur)}>
          <AdjustmentsHorizontalIcon className="icon-text" />
          카테고리
        </button>
      </fieldset>
      <Category onClose={onClose} open={categoryActive} />
    </>
  );
}
