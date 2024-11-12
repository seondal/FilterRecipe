"use client";

import { CATEGORY } from "@/constants";
import useURLSearchParams from "@/hooks/useURLSearchParams";
import { ArrowPathIcon, CheckIcon } from "@heroicons/react/20/solid";

interface CategoryI {
  onClose: () => void;
}
export default function Category({ onClose }: CategoryI) {
  const searchParam = useURLSearchParams();

  function handleSelectCategory(name: string) {
    const param = { category: name };
    if (searchParam.has(param)) {
      searchParam.del(param);
    } else {
      searchParam.add(param);
    }
  }

  return (
    <article>
      <header>
        <h4>카테고리</h4>
      </header>
      {CATEGORY.map((main, idx) => (
        <div key={idx} className="flex gap-4 mb-4">
          <label className="min-w-fit">
            <input
              type="checkbox"
              name="main"
              onClick={() => handleSelectCategory(main.text)}
            />
            <strong>{main.text}</strong>
          </label>
          <div className="flex flex-wrap gap-x-4">
            {main.sub.map((sub, idx) => (
              <label key={idx}>
                <input
                  type="checkbox"
                  name="sub"
                  onClick={() => handleSelectCategory(sub)}
                />
                {sub}
              </label>
            ))}
          </div>
        </div>
      ))}
      <footer className="flex justify-end gap-4">
        <button className="outline">
          <ArrowPathIcon className="icon-text" /> 초기화하기
        </button>
        <button onClick={onClose}>
          <CheckIcon className="icon-text" /> 결정하기
        </button>
      </footer>
    </article>
  );
}
