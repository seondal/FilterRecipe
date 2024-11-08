import { RecipeI } from "@/interface/recipe";

export const MockRecipe: RecipeI = {
  title: "지브리 감성 뭉게구름 보정법",
  description: "뭉게뭉게뭉게구름",
  image: {
    before: "@/mock/1.png",
    after: "@/mock/2.png",
  },
  category: {
    main: "하늘",
    sub: "구름",
  },
  property: {
    exposure: 20,
    brightness: 10,
    highlight: -15,
    shadow: 30,
    contrast: 5,
    lightness: 25,
    blackPoint: -10,
    saturation: 50,
    colorClarity: 80,
    warmth: 15,
    hue: -20,
    sharpness: 90,
    clarity: 70,
    noiseReduction: 40,
    vignette: -25,
  },
};

export const MockHome = [MockRecipe, MockRecipe, MockRecipe, MockRecipe];
