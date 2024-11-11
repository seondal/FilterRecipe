import { RecipeI } from "@/interface/recipe";

export const MockRecipe: RecipeI = {
  id: 1,
  title: "지브리 감성 뭉게구름 보정법",
  description: "뭉게뭉게뭉게구름",
  source: {
    name: "@dev_seondal",
    url: "https://instagram.com/dev_seondal",
  },
  image: {
    before: "/mock/before.png",
    after: "/mock/after.png",
  },
  category: {
    main: "하늘",
    sub: "구름",
  },
  recipe: [
    { property: "노출", value: 20 },
    { property: "노출", value: 20 },
    { property: "노출", value: 20 },
    { property: "노출", value: 20 },
    { property: "노출", value: 20 },
  ],
  // property: {
  //   exposure: 20,
  //   brightness: 10,
  //   highlight: -15,
  //   shadow: 30,
  //   contrast: 5,
  //   lightness: 25,
  //   blackPoint: -10,
  //   saturation: 50,
  //   colorClarity: 80,
  //   warmth: 15,
  //   hue: -20,
  //   sharpness: 90,
  //   clarity: 70,
  //   noiseReduction: 40,
  //   vignette: -25,
  // },
};

export const MockRecipe2: RecipeI = {
  id: 2,
  title: "제목은최대20글자입니다34567890",
  description:
    "설명은최대200자설명은최대200자설명은최대200자설명은최대200자설명은최대200자설명은최대200자설명은최대200자설명은최대200자설명은최대200자설명은최대200자설명은최대200자설명은최대200자설명은최대200자설명은최대200자설명은최대200자설명은최대200자설명은최대200자설명은최대200자설명은최대200자설명은최대200자",
  image: {
    before: "/mock/before2.png",
    after: "/mock/after2.png",
  },
  category: {
    main: "하늘",
    sub: "구름",
  },
  recipe: [
    { property: "노출", value: 20 },
    { property: "노출", value: 20 },
    { property: "노출", value: 20 },
    { property: "노출", value: 20 },
    { property: "노출", value: 20 },
    { property: "노출", value: 20 },
    { property: "노출", value: 20 },
    { property: "노출", value: 20 },
    { property: "노출", value: 20 },
    { property: "노출", value: 20 },
    { property: "노출", value: 20 },
    { property: "노출", value: 20 },
    { property: "노출", value: 20 },
    { property: "노출", value: 20 },
    { property: "노출", value: 20 },
    { property: "노출", value: 20 },
    { property: "노출", value: 20 },
    { property: "노출", value: 20 },
  ],
  // property: {
  //   exposure: 20,
  //   brightness: 10,
  //   highlight: -15,
  //   shadow: 30,
  //   contrast: 5,
  //   lightness: 25,
  //   blackPoint: -10,
  //   saturation: 50,
  //   colorClarity: 80,
  //   warmth: 15,
  //   hue: -20,
  //   sharpness: 90,
  //   clarity: 70,
  //   noiseReduction: 40,
  //   vignette: -25,
  // },
};

export const MockHome = [
  MockRecipe,
  MockRecipe2,
  MockRecipe,
  MockRecipe2,
  MockRecipe,
  MockRecipe2,
];
