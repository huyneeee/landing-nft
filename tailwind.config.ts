import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        main: {
          primary: "#D3F85A",
          secondary: "#040914",
          gray: "#2c2f37"
        }
      },
      screens: {
        "max-2xl": { max: "1439px" },
        "max-xl": { max: "1279px" },
        "max-lg": { max: "1023px" },
        "max-md": { max: "767px" },
        "max-sm": { max: "639px" },
        "2xl": "1440px"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "dust-main-hero": "linear-gradient(120deg, #7BA49A 21.9%, #159777 125.17%)",
        "dust-subcribe":
          "linear-gradient(120deg, rgba(123, 164, 154, 0.40) 21.9%, rgba(21, 151, 119, 0.40) 125.17%)"
      },
      boxShadow: {
        "popular-collection-dark": "0px 10px 40px 0px rgba(0, 0, 0, 0.07)",
        "popular-collection-light": "0px 10px 40px 0px rgba(0, 0, 0, 0.06)",
        "creator-light": "20px 14px 60px 0px rgba(0, 0, 0, 0.10)"
      }
    }
  },
  plugins: []
};
export default config;
