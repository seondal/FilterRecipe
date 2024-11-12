"use client";

import { useState } from "react";
import Category from "./Category";
import { useSearchParams } from "next/navigation";
import Feed from "./Feed";
import Modal from "@/components/Modal";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";

export default function Page() {
  const searchParams = useSearchParams();
  const keyword = searchParams.get("search");

  const [categoryActive, setCategoryActive] = useState(false);

  function onClose() {
    setCategoryActive(false);
  }

  return (
    <>
      <fieldset className="flex gap-4">
        <form className="flex flex-grow">
          <input
            name="search"
            type="search"
            placeholder="키워드로 검색하기"
            defaultValue={keyword ?? ""}
          />
        </form>
        <button
          className="outline"
          onClick={() => setCategoryActive((cur) => !cur)}>
          <AdjustmentsHorizontalIcon className="icon-text" />
          카테고리
        </button>
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
