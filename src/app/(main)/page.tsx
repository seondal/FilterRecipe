"use client";

import RecipeSmallCard from "@/components/RecipeSmallCard";
import { myApi } from "../api/instance";
import { RecipeI } from "@/interface/recipe";
import { RecipeDataForCard } from "@/utils/transform";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const params = useSearchParams();
  const category = params.get("category");
  const keyword = params.get("keyword");

  const [data, setData] = useState<RecipeI[]>();

  async function fetchFeed() {
    const res = await myApi.get<RecipeI[]>("/recipe", {
      params: { keyword, category },
    });
    setData(res.data);
  }

  useEffect(() => {
    fetchFeed();
  }, [category]);

  if (!data) {
    return <div aria-busy="true" />;
  }

  if (data.length === 0) {
    return <h3>앗! 이런 레시피는 아직 없어요</h3>;
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
