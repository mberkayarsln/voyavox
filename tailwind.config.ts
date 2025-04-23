import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#EBEBEB",
        navy: "#2B4967",
        turqoise: "#A7DAEC",
        seaGreen: "#B1E0E6",
        pink: "#E9BCFD",
        darkPink: "#DBB3F9",
        purple: "#CDBBF7"
      },
    },
  },
  plugins: [],
};
export default config;
