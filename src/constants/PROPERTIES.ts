import { PropertiesI } from "@/interface/recipe";

interface PropertyI {
  name: string;
  min: number;
  max: number;
  key: keyof PropertiesI;
}

const PROPERTIES: Array<PropertyI> = [
  { name: "노출", min: -100, max: 100, key: "exposure" },
  { name: "휘도", min: -100, max: 100, key: "brightness" },
  { name: "하이라이트", min: -100, max: 100, key: "highlight" },
  { name: "그림자", min: -100, max: 100, key: "shadow" },
  { name: "대비", min: -100, max: 100, key: "contrast" },
  { name: "밝기", min: -100, max: 100, key: "lightness" },
  { name: "블랙포인트", min: -100, max: 100, key: "blackPoint" },
  { name: "채도", min: -100, max: 100, key: "saturation" },
  { name: "색 선명도", min: 0, max: 100, key: "colorClarity" },
  { name: "따뜻함", min: -100, max: 100, key: "warmth" },
  { name: "색조", min: -100, max: 100, key: "hue" },
  { name: "선명도", min: 0, max: 100, key: "sharpness" },
  { name: "명료도", min: 0, max: 100, key: "clarity" },
  { name: "노이즈감소", min: 0, max: 100, key: "noiseReduction" },
  { name: "비네트", min: -100, max: 100, key: "vignette" },
];

export default PROPERTIES;
