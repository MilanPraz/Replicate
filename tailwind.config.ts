import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        sm: "576px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        primary: "#55dd4a",
        "primary-light": "#77e46e",
        "primary-dark": "#3b9b34",
        secondary: "#73d3eb",
        green: "#122315",
        gray: "#566053",
        "off-white": "#f3ede4",
        "border-secondary": "#f3f0ec4d",
      },
      fontFamily: {
        bungee: ["Bungee", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
