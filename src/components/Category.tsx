"use client";

import { CATEGORY } from "@/constants";
import useURLSearchParams from "@/hooks/useURLSearchParams";
import { ModalI } from "@/interface/component";
import { ArrowPathIcon, CheckIcon } from "@heroicons/react/20/solid";

interface CategoryI extends ModalI {}

export default function Category({ open, onClose }: CategoryI) {
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
    <dialog open={open}>
      <article>
        <header>
          <button aria-label="Close" rel="prev" onClick={onClose}></button>
          <h4>카테고리</h4>
        </header>
        {CATEGORY.map((main) => (
          <div key={main.text} className="flex gap-4 mb-4">
            <label className="min-w-fit">
              <input
                type="checkbox"
                name="main"
                onClick={() => handleSelectCategory(main.text)}
                defaultChecked={isChecked(main.text)}
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
                    defaultChecked={isChecked(sub)}
                  />
                  {sub}
                </label>
              ))}
            </div>
          </div>
        ))}
        <footer>
          <button className="outline" onClick={handleReset}>
            <ArrowPathIcon className="icon-text" /> 초기화하기
          </button>
          <button onClick={onClose}>
            <CheckIcon className="icon-text" /> 결정하기
          </button>
        </footer>
      </article>
    </dialog>
  );
}
