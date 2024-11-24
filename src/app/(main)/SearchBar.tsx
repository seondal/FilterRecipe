"use client";

import { ChangeEvent, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import Category from "@/components/Category";

export default function SearchBar() {
  const params = useSearchParams();
  const keywordQuery = params.get("keyword");
  const categoryQuery = params.get("category");
  const userid = params.get("userid");

  const router = useRouter();
  const [keyword, setKeyword] = useState<string>("");

  function getDisplayedKeyword() {
    if (keywordQuery) return keywordQuery;
    if (userid) return `@${userid}`;
    if (categoryQuery) {
      const categoryArray = categoryQuery.split(",").map((item) => `#${item}`);
      return categoryArray.join(" ");
    }
    return "";
  }

  useEffect(() => {
    setKeyword(getDisplayedKeyword());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

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

    if (keyword.startsWith("#")) {
      const searchedCategoreis = keyword
        .split(" ")
        .filter((item) => item.startsWith("#"))
        .map((item) => item.substring(1));
      const categoryQueryString = searchedCategoreis.join(",");
      return router.push(`/?category=${categoryQueryString}`);
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
            placeholder="키워드,@사용자,#카테고리 검색"
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
