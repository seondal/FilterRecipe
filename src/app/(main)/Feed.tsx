import RecipeSmallCard from "@/components/RecipeSmallCard";
import { MockHome, MockRecipe, MockRecipe2 } from "@/mock/mock_home";

export default function Feed() {
  return (
    <>
      <h4>인기 레시피</h4>
      <div className="flex gap-1 flex-wrap justify-center w-full">
        {MockHome.map((item, idx) => (
          <RecipeSmallCard data={item} key={idx} />
        ))}
      </div>
      <h4>최근 추가된 레시피</h4>
    </>
  );
}
