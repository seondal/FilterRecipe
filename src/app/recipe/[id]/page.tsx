"use client";

import { myApi } from "@/app/api/instance";
import RecipeDetailCard from "@/components/RecipeDetailCard";
import { RecipeI } from "@/interface/recipe";
import { RecipeDataForCard } from "@/utils/transform";
import { useEffect, useState } from "react";

export default function RecipePage({ params }: ParamsWithIdI) {
  const [data, setData] = useState<RecipeI>();

  async function fetchFeed() {
    const res = await myApi.get<RecipeI>(`/recipe/${params.id}`);
    setData(res.data);
  }

  useEffect(() => {
    fetchFeed();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!data) return <div aria-busy="true" />;

  const cardData = RecipeDataForCard(data);
  return (
    <div>
      <RecipeDetailCard data={cardData} open={true} />
    </div>
  );
}
