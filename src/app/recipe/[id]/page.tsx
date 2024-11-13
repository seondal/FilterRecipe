import RecipeDetailCard from "@/components/RecipeDetailCard";
import { SITE } from "@/constants/env";

export default async function RecipePage({ params }: ParamsWithIdI) {
  const res = await fetch(`${SITE}/api/recipe/${params.id}`);
  const data = await res.json();
  console.log("🚀 ~ RecipePage ~ data:", data);

  return <div>!!!</div>;
}
