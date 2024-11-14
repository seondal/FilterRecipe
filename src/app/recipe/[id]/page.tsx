import { myApi } from "@/app/api/instance";
import { RecipeI } from "@/interface/recipe";

export default async function RecipePage({ params }: ParamsWithIdI) {
  const res = await myApi.get<RecipeI>(`/recipe/${params.id}`);
  const data = res.data;

  console.log("🚀 ~ RecipePage ~ data:", data);

  return <div>!!!</div>;
}
