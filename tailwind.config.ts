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
        sans: ["var(--font-inter)", "var(--font-tamil)", "sans-serif"],
      },
      colors: {
        tvk: {
          red: "#E31E24",
          black: "#1a1a1a",
        },
      },
    },
  },
  plugins: [],
};
export default config;
