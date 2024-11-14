import { myApi } from "@/app/api/instance";

export default async function RecipePage({ params }: ParamsWithIdI) {
  const res = await myApi.get(`/recipe/${params.id}`);
  const data = res.data;

  console.log("🚀 ~ RecipePage ~ data:", data);

  return <div>!!!</div>;
}
