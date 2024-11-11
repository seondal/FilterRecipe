"use client";

import { useState } from "react";
import Category from "./Category";
import { useSearchParams } from "next/navigation";
import Feed from "./Feed";
import Modal from "@/components/Modal";

export default function Page() {
  const searchParams = useSearchParams();
  const keyword = searchParams.get("search");

  const [categoryActive, setCategoryActive] = useState(false);

  function onClose() {
    setCategoryActive(false);
  }

  return (
    <>
      <fieldset className="flex">
        <form>
          <input
            name="search"
            type="search"
            placeholder="키워드로 검색하기"
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
      {categoryActive && (
        <Modal onClose={onClose} layout="bottom">
          <Category onClose={onClose} />
        </Modal>
      )}
      {keyword ? <h4>{keyword} 검색 결과</h4> : <Feed />}
    </>
  );
}
