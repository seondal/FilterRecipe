import { MockHome, MockRecipe } from "@/mock/mock_home";
import Image from "next/image";

interface RecipePageI {
  params: { id: number };
}

export default function RecipePage({ params }: RecipePageI) {
  const id = params.id;

  return (

  );
}
