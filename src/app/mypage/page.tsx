"use client";

import RecipeSmallCard from "@/components/RecipeSmallCard";
import { myApi } from "../api/instance";
import { RecipeI } from "@/interface/recipe";
import { RecipeDataForCard } from "@/utils/transform";
import { useEffect, useState } from "react";
import { auth } from "@/firebase";

export default function Page() {
  const data = auth.currentUser;
  console.log("🚀 ~ Page ~ data:", data);
  const [recipeData, setRecipeData] = useState<RecipeI[]>();

  async function fetchFeed() {
    const res = await myApi.get<RecipeI[]>("/recipe", {
      params: {
        userid: data?.uid,
      },
    });
    setRecipeData(res.data);
  }

  useEffect(() => {
    fetchFeed();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  if (!data) {
    return (
      <article>
        <h4>업로드 기능은 로그인이 필요해요</h4>
        <h6>로그인하고 나만의 레시피를 업로드하고 공유해보세요</h6>
      </article>
    );
  }

  if (!recipeData) {
    return <article aria-busy="true" />;
  }

  if (recipeData.length === 0) {
    return (
      <article>
        <h4>업로드한 레시피가 없어요</h4>
        <h6>나만의 레시피를 업로드하고 공유해보세요</h6>
      </article>
    );
  }

  return (
    <>
      <div className="flex flex-wrap gap-y-3 gap-x-1">
        {recipeData.map((item, idx) => (
          <RecipeSmallCard data={RecipeDataForCard(item)} key={idx} />
        ))}
      </div>
    </>
  );
}
