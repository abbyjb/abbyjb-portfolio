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
        "coral": { DEFAULT: "#fc7a57", 100: "#420f01", 200: "#841f03", 300: "#c62e04", 400: "#fa4513", 500: "#fc7a57", 600: "#fc9477", 700: "#fdaf99", 800: "#fec9bb", 900: "#fee4dd" }, 
        "mint_cream": { DEFAULT: "#f4fffd", 100: "#006452", 200: "#00c8a3", 300: "#2dffd8", 400: "#91ffeb", 500: "#f4fffd", 600: "#f7fffe", 700: "#f9fffe", 800: "#fbfffe", 900: "#fdffff" }, 
        "sunglow": { DEFAULT: "#fcca46", 100: "#3f2f01", 200: "#7f5d02", 300: "#be8c03", 400: "#fbba06", 500: "#fcca46", 600: "#fdd66a", 700: "#fde08f", 800: "#feeab5", 900: "#fef5da" }, 
        "myrtle_green": { DEFAULT: "#4e7e7c", 100: "#101919", 200: "#1f3332", 300: "#2f4c4b", 400: "#3e6564", 500: "#4e7e7c", 600: "#67a2a0", 700: "#8db9b8", 800: "#b3d0d0", 900: "#d9e8e7" }, 
        "delft_blue": { DEFAULT: "#363a59", 100: "#0b0c12", 200: "#161723", 300: "#212335", 400: "#2b2f47", 500: "#363a59", 600: "#525886", 700: "#767dab", 800: "#a4a8c7", 900: "#d1d4e3" } 
      },
    },
  },
  plugins: [],
};
export default config;
