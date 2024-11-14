import { PropertiesI } from "./recipe";

export interface PostRecipeRequestI {
  title: string;
  image: { beforeImage: File; afterImage: File };
  category: { main: string; sub: string };
  properties: PropertiesI;
  description: string;
}
