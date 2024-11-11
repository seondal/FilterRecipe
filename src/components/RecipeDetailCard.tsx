"use client";

import { RecipeI } from "@/interface/recipe";
import { MockRecipe, MockRecipe2 } from "@/mock/mock_home";
import Image from "next/image";
import { useState } from "react";

interface RecipeDetailCardI {
  data: RecipeI;
}

export default function RecipeDetailCard({ data }: RecipeDetailCardI) {
  const [showBefore, setShowBefore] = useState(false);
  const [showRecipe, setShowRecipe] = useState(false);

  return (
    <article className="w-full max-h-[90vh] overflow-y-auto z-50">
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
          <Image src={data.image.before} alt="" fill objectFit="cover" />
        ) : (
          <Image src={data.image.after} alt="" fill objectFit="cover" />
        )}
      </div>
      <footer>
        <b>
          #{data.category.main} #{data.category.sub}
        </b>
        &nbsp;
        {data.description}
        <hr />
        <button onClick={() => setShowRecipe((cur) => !cur)}>
          {showRecipe ? "Hide Recipe" : "Show Recipe"}
        </button>
        <button onClick={() => setShowBefore((cur) => !cur)}>
          {showBefore ? "After 보기" : "Before 보기"}
        </button>
        <button>Bookmark</button>
        <button>Share</button>
      </footer>
    </article>
  );
}
