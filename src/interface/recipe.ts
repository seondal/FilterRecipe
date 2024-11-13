export interface PropertiesI {
  exposure: number;
  brightness: number;
  highlight: number;
  shadow: number;
  contrast: number;
  lightness: number;
  blackPoint: number;
  saturation: number;
  colorClarity: number;
  warmth: number;
  hue: number;
  sharpness: number;
  clarity: number;
  noiseReduction: number;
  vignette: number;
}

export interface RecipeI {
  id: number;
  title: string;
  // source?: {
  //   name: string;
  //   url: string;
  // };
  description?: string;
  image: {
    before: string;
    after: string;
  };
  category: {
    main: string;
    sub: string;
  };
  // property: PropertiesI;
  recipe: { property: string; value: number }[];
}
