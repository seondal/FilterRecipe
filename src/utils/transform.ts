import { PROPERTIES } from "@/constants";
import { RecipeCardDataI } from "@/interface/component";
import { RecipeI } from "@/interface/recipe";

export function RecipeDataForCard(data: RecipeI): RecipeCardDataI {
  const propertyData = data.property;
  const recipe = PROPERTIES.map((prop) => ({
    property: prop.name,
    value: propertyData[prop.key],
  })).filter((item) => item.value !== 0);

  return {
    ...data,
    recipe,
  };
}
