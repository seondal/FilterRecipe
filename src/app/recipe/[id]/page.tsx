import { myApi } from "@/app/api/instance";
import RecipeDetailCard from "@/components/RecipeDetailCard";
import { RecipeI } from "@/interface/recipe";
import { RecipeDataForCard } from "@/utils/transform";

export default async function RecipePage({ params }: ParamsWithIdI) {
  const res = await myApi.get<RecipeI>(`/recipe/${params.id}`);
  const data = res.data;

  const cardData = RecipeDataForCard(data);

  return (
    <div>
      <RecipeDetailCard data={cardData} open={true} />
    </div>
  );
}
