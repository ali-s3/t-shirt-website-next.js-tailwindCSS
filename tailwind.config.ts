import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        // default font size is 16px, we need to set it to 13px but a rem value
        body: "0.8125rem", // 13px
        h2: "1.25rem", // 20px
        h1: "2.125rem", // 34px
      },
      colors: {
        fuschia: {
          60: "#FCDDEC",
          80: "#F178B6",
          100: "#EF5DA8",
        },
        iris: {
          60: "#A5A6F6",
          80: "#7879F1",
          100: "#5D5FEF",
        },
        primary: "#2EBB77",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
