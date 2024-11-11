"use client";

import { CATEGORY } from "@/constants";
import useURLSearchParams from "@/hooks/useURLSearchParams";

interface CategoryI {
  onClose: () => void;
}
export default function Category({ onClose }: CategoryI) {
  const searchParam = useURLSearchParams();

  function handleSelectCategory(name: string) {
    searchParam.set({ category: name });
  }

  return (
    <article className="">
      <header>
        <h4>카테고리</h4>
      </header>
      {CATEGORY.map((main, idx) => (
        <div key={idx} className="flex">
          <label>
            <input
              type="checkbox"
              name="main"
              onClick={() => handleSelectCategory(main.text)}
            />
            <strong>{main.text}</strong>
          </label>
          {main.sub.map((sub, idx) => (
            <label key={idx}>
              <input type="checkbox" name="sub" />
              {sub}
            </label>
          ))}
        </div>
      ))}
      <footer>
        <button onClick={onClose}>결정하기</button>
      </footer>
    </article>
  );
}
