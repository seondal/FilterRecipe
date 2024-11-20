import { SITE } from "@/constants/env";
import axios from "axios";

export const imgbbAPI = axios.create({
  baseURL: "https://api.imgbb.com",
  params: { key: process.env.IMGBB_API_KEY },
});

export const myApi = axios.create({ baseURL: `${SITE}/api` });

export const kakaoApi = axios.create({
  baseURL: `https://kauth.kakao.com`,
});
