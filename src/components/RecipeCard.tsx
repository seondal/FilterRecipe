import { MockRecipe } from "@/mock/mock_home";
import Image from "next/image";

export default function RecipeCard() {
  const data = MockRecipe;

  return (
    <article>
      <header>
        <strong>{data.title}</strong>
      </header>
      {data.image.before && (
        <Image src={data.image.before} alt="" width={20} height={20} />
      )}
      <Image src={data.image.after} alt="" width={20} height={20} />
      <footer>
        <small>
          <b>
            #{data.category.main} #{data.category.sub}{" "}
          </b>
          {data.description}
        </small>
      </footer>
    </article>
  );
}
