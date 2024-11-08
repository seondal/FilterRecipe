"use client";

import { useState } from "react";

export default function Page() {
  const [searchActive, setSearchActive] = useState(false);
  const [categoryActive, setCategoryActive] = useState(false);

  return (
    <>
      <fieldset className="grid">
        <input
          name="search"
          type="search"
          placeholder="키워드로 검색하기"
          onFocus={() => {
            setCategoryActive(false);
            setSearchActive(true);
          }}
          onBlur={() => setSearchActive(false)}
        />
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
      {searchActive && <div className="bg-black">검색창</div>}
      {categoryActive && <div>카테고리창</div>}
    </>
  );
}
