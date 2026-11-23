import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-montserrat)", "sans-serif"],
        sans: ["var(--font-jakarta)", "sans-serif"],
      },
      colors: {
        kombat: {
          black: "#08080A",
          dark: "#101116",
          red: "#D9141C",
          crimson: "#98080D",
          gold: "#E5B842",
          goldLight: "#FCE38A",
          goldDark: "#AA771C",
          light: "#F4F5F7",
        },
      },
      boxShadow: {
        "gold-glow": "0 0 18px rgba(235, 185, 65, 0.45), inset 0 0 8px rgba(235, 185, 65, 0.2)",
        "gold-glow-lg": "0 0 28px rgba(245, 197, 66, 0.6), 0 0 10px rgba(245, 197, 66, 0.35)",
        "red-glow": "0 0 22px rgba(229, 28, 35, 0.65), inset 0 1px 2px rgba(255, 255, 255, 0.4)",
      },
    },
  },
  plugins: [],
};
export default config;

