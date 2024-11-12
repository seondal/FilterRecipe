"use client";

import { RecipeI } from "@/interface/recipe";
import { MockRecipe, MockRecipe2 } from "@/mock/mock_home";
import {
  ArrowPathIcon,
  BookmarkIcon,
  EyeIcon,
  EyeSlashIcon,
  ShareIcon,
  SparklesIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import { useState } from "react";

interface RecipeDetailCardI {
  data: RecipeI;
}

export default function RecipeDetailCard({ data }: RecipeDetailCardI) {
  const [showBefore, setShowBefore] = useState(false);
  const [showRecipe, setShowRecipe] = useState(false);

  return (
    <article className="max-h-[80vh] overflow-y-auto">
      <header>
        <h3>{data.title}</h3>
      </header>
      <div className="relative w-full h-auto aspect-square">
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
      <footer>
        <b>
          #{data.category.main} #{data.category.sub}
        </b>
        &nbsp;
        {data.description}
        <hr />
        <nav>
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
          <button onClick={() => setShowBefore((cur) => !cur)}>
            {showBefore ? (
              <>
                <SparklesIcon className="icon-text" /> 보정 후
              </>
            ) : (
              <>
                <ArrowPathIcon className="icon-text" /> 보정 전
              </>
            )}
          </button>
          <button className="outline">
            <BookmarkIcon className="icon-in-button" />
          </button>
          <button className="outline">
            <ShareIcon className="icon-in-button" />
          </button>
        </nav>
      </footer>
    </article>
  );
}
