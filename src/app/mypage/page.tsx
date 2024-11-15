"use client";

import RecipeSmallCard from "@/components/RecipeSmallCard";
import { myApi } from "../api/instance";
import { RecipeI } from "@/interface/recipe";
import { RecipeDataForCard } from "@/utils/transform";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

export default function Page() {
  const { data } = useSession();
  const [recipeData, setRecipeData] = useState<RecipeI[]>();

  async function fetchFeed() {
    const res = await myApi.get<RecipeI[]>("/recipe", {
      params: {
        userid: data?.user.id,
      },
    });
    setRecipeData(res.data);
  }

  useEffect(() => {
    fetchFeed();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.user.id]);

  if (!data) {
    return <h3>로그인하고 레시피를 공유해보세요</h3>;
  }

  if (!recipeData) {
    return <article aria-busy="true" />;
  }

  if (recipeData.length === 0) {
    return <h3>올린 레시피가 없어요</h3>;
  }

  return (
    <>
      <article className="flex flex-wrap gap-y-3 gap-x-1">
        {recipeData.map((item, idx) => (
          <RecipeSmallCard data={RecipeDataForCard(item)} key={idx} />
        ))}
      </article>
    </>
  );
}
