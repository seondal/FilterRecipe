"use client";

import { CATEGORY } from "@/constants";
import useURLSearchParams from "@/hooks/useURLSearchParams";
import { ArrowPathIcon, CheckIcon } from "@heroicons/react/20/solid";

interface CategoryI {
  onClose: () => void;
}
export default function Category({ onClose }: CategoryI) {
  const searchParam = useURLSearchParams();

  function isChecked(name: string) {
    return searchParam.has({ category: name }) !== undefined;
  }

  function handleSelectCategory(name: string) {
    const param = { category: name };
    if (searchParam.has(param)) {
      searchParam.del(param);
    } else {
      searchParam.add(param);
    }
  }

  function handleReset() {
    searchParam.remove();
  }

  return (
    <article>
      <header>
        <h4>카테고리</h4>
      </header>
      {CATEGORY.map((main) => (
        <div key={main.text} className="flex gap-4 mb-4">
          <label className="min-w-fit">
            <input
              type="checkbox"
              name="main"
              onClick={() => handleSelectCategory(main.text)}
              checked={isChecked(main.text)}
            />
            <strong>{main.text}</strong>
          </label>
          <div className="flex flex-wrap gap-x-4">
            {main.sub.map((sub) => (
              <label key={sub}>
                <input
                  type="checkbox"
                  name="sub"
                  onClick={() => handleSelectCategory(sub)}
                  checked={isChecked(sub)}
                />
                {sub}
              </label>
            ))}
          </div>
        </div>
      ))}
      <footer className="flex justify-end gap-4">
        <button className="outline" onClick={handleReset}>
          <ArrowPathIcon className="icon-text" /> 초기화하기
        </button>
        <button onClick={onClose}>
          <CheckIcon className="icon-text" /> 결정하기
        </button>
      </footer>
    </article>
  );
}
