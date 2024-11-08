"use client";

import { useState } from "react";
import Category from "./Category";
import { useSearchParams } from "next/navigation";
import Feed from "./Feed";

export default function Page() {
  const searchParams = useSearchParams();
  const keyword = searchParams.get("search");

  const [searchActive, setSearchActive] = useState(false);
  const [categoryActive, setCategoryActive] = useState(false);

  return (
    <>
      <fieldset className="grid">
        <form>
          <input
            name="search"
            type="search"
            placeholder="키워드로 검색하기"
            onFocus={() => {
              setCategoryActive(false);
              setSearchActive(true);
            }}
            onBlur={() => setSearchActive(false)}
            defaultValue={keyword ?? ""}
          />
        </form>
        <label>
          <input
            name="terms"
            type="checkbox"
            role="switch"
            checked={categoryActive}
            onChange={() => setCategoryActive((cur) => !cur)}
          />
          카테고리
        </label>
      </fieldset>
      {categoryActive && <Category />}
      {keyword ? <h4>{keyword} 검색 결과</h4> : <Feed />}
    </>
  );
}
