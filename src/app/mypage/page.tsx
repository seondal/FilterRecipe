"use client";

import RecipeSmallCard from "@/components/RecipeSmallCard";
import { myApi } from "../api/instance";
import { RecipeI } from "@/interface/recipe";
import { RecipeDataForCard } from "@/utils/transform";
import { useEffect, useState } from "react";

export default function Page() {
  const [data, setData] = useState<RecipeI[]>();

  async function fetchFeed() {
    const res = await myApi.get<RecipeI[]>("/recipe", {});
    setData(res.data);
  }

  useEffect(() => {
    fetchFeed();
  }, []);

  if (!data) {
    return <div aria-busy="true" />;
  }

  if (data.length === 0) {
    return <h3>올린 레시피가 없어요</h3>;
  }

  return (
    <>
      <div className="flex flex-wrap gap-y-3 gap-x-1">
        {data.map((item, idx) => (
          <RecipeSmallCard data={RecipeDataForCard(item)} key={idx} />
        ))}
      </div>
    </>
  );
}
