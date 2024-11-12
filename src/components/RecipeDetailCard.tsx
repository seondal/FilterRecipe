"use client";

import { SITE } from "@/constants/env";
import { ModalI } from "@/interface/component";
import { RecipeI } from "@/interface/recipe";
import { MockRecipe, MockRecipe2 } from "@/mock/mock_home";
import {
  ArrowPathIcon,
  BookmarkIcon,
  EyeIcon,
  EyeSlashIcon,
  ShareIcon,
  SparklesIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import { BookmarkSlashIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useState } from "react";

interface RecipeDetailCardI extends ModalI {
  data: RecipeI;
}

export default function RecipeDetailCard({
  data,
  open,
  onClose,
}: RecipeDetailCardI) {
  const [showBefore, setShowBefore] = useState(false);
  const [showRecipe, setShowRecipe] = useState(false);

  function handleShare() {
    navigator.clipboard.writeText(`${SITE}/recipe/${data.id}`);
    alert("보정법을 공유할 수 있는 링크가 클립보드에 복사되었어요!");
  }

  return (
    <dialog open={open}>
      <article className="">
        <header>
          <button aria-label="Close" rel="prev" onClick={onClose}></button>
          <h4>{data.title}</h4>
        </header>
        <div className="relative aspect-square">
          {showRecipe && (
            <div className="absolute inset-0 bg-black bg-opacity-70 z-10 flex items-center justify-center gap-2 p-4 flex-wrap text-white">
              {data.recipe.map((item, idx) => (
                <kbd key={idx}>
                  {item.property} : {item.value}
                </kbd>
              ))}
            </div>
          )}
          {showBefore ? (
            <Image
              src={data.image.before}
              alt=""
              fill
              style={{ objectFit: "cover" }}
            />
          ) : (
            <Image
              src={data.image.after}
              alt=""
              fill
              style={{ objectFit: "cover" }}
            />
          )}
        </div>
        <hr />
        <b>
          #{data.category.main} #{data.category.sub}
        </b>
        &nbsp;
        {data.description}
        <footer>
          <button onClick={() => setShowRecipe((cur) => !cur)}>
            {showRecipe ? (
              <>
                <EyeSlashIcon className="icon-text" /> 레시피 닫기
              </>
            ) : (
              <>
                <EyeIcon className="icon-text" /> 레시피 보기
              </>
            )}
          </button>
          <button
            onClick={() => setShowBefore((cur) => !cur)}
            className="secondary">
            {showBefore ? (
              <>
                <SparklesIcon className="icon-text" /> 적용 후
              </>
            ) : (
              <>
                <ArrowPathIcon className="icon-text" /> 적용 전
              </>
            )}
          </button>
          <button className="outline secondary">
            <BookmarkSlashIcon className="icon-in-button" />
          </button>
          <button className="outline" onClick={handleShare}>
            <ShareIcon className="icon-in-button" />
          </button>
        </footer>
      </article>
    </dialog>
  );
}
