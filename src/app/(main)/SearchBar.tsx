"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import Category from "@/components/Category";

export default function SearchBar() {
  const params = useSearchParams();
  const keywordQuery = params.get("keyword");
  const categoryQuery = params.get("category");
  const userid = params.get("userid");

  const [categoryActive, setCategoryActive] = useState(false);

  function onClose() {
    setCategoryActive(false);
  }

  return (
    <>
      <fieldset className="flex gap-4">
        <form className="flex flex-grow">
          <input
            name="keyword"
            type="search"
            placeholder="키워드로 검색하기"
            defaultValue={keywordQuery ?? userid ? `@${userid}` : ""}
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
