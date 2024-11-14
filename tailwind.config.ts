import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--pico-primary-background)",
        secondary: "var(--pico-secondary-background)",
        default: "var(--pico-color)",
        card: "var(--pico-card-background-color)",
      },
      backgroundColor: {
        default: "var(--pico-background-color)",
      },
      maxWidth: {
        mobile: "600px",
      },
    },
  },
  plugins: [],
};
export default config;
