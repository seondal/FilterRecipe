import RecipeSmallCard from "@/components/RecipeSmallCard";
import { MockHome } from "@/mock/mock_home";
import { myApi } from "../api/instance";
import { RecipeI } from "@/interface/recipe";
import { RecipeDataForCard } from "@/utils/transform";

export default async function Feed() {
  const res = await myApi.get<RecipeI[]>("/recipe");
  const data = res.data;

  return (
    <>
      <div className="flex flex-wrap gap-3">
        {data.map((item, idx) => (
          <RecipeSmallCard data={RecipeDataForCard(item)} key={idx} />
        ))}
      </div>
    </>
  );
}
