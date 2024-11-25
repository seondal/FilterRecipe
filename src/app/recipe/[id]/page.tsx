import { myApi } from "@/app/api/instance";
import { SITE } from "@/constants/env";
import { ParamsWithIdI } from "@/interface/page";
import { RecipeI } from "@/interface/recipe";
import { Metadata } from "next";
import RecipePage from "./RecipePage";

export async function generateMetadata({
  params,
}: ParamsWithIdI): Promise<Metadata> {
  const { data } = await myApi.get<RecipeI>(`/recipe/${params.id}`);

  const titleString = `필터레시피 | ${data.title}`;
  const descriptionString = `#${data.category.main} #${data.category.sub} ${data.description}`;

  return {
    openGraph: {
      title: titleString,
      description: descriptionString,
      url: `${SITE}/recipe/${params.id}`,
      images: [
        {
          url: data.image.after,
          width: 800,
          height: 600,
        },
        {
          url: data.image.before,
          width: 800,
          height: 600,
        },
      ],
    },
  };
}

export default function Page({ params }: ParamsWithIdI) {
  return <RecipePage params={params} />;
}
