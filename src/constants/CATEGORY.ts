const CATEGORY: {
  text: string;
  sub: string[];
}[] = [
  { text: "하늘", sub: ["낮", "노을", "밤"] },
  { text: "인물", sub: ["셀카", "역광", "실내", "실외", "피부"] },
  { text: "자연", sub: ["꽃", "바다", "도시", "봄", "여름", "가을", "겨울"] },
  { text: "장소", sub: ["전시", "집", "카페"] },
  { text: "음식", sub: ["메인", "디저트", "음료"] },
] as const;

export default CATEGORY;
