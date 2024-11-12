"use client";

import RecipeDetailCard from "@/components/RecipeDetailCard";
import { MockRecipe } from "@/mock/mock_home";
import { useRouter } from "next/navigation";

interface RecipePageI {
  params: { id: number };
}

export default function RecipePage({ params }: RecipePageI) {
  const router = useRouter();
  const id = params.id;
  const data = MockRecipe;

  return (
    <RecipeDetailCard
      data={data}
      open={true}
      onClose={() => router.push("/")}
    />
  );
}
