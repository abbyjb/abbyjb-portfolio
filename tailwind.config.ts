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
        "purple": "#090119",
        "blue": "#1D2C39",
        "slate": "#315659",
        "dark-green": "#5B7666",
        "green": "#859673",
        "light-green": "#B5BE9B",
        "beige": "#E4E6C3",
        "lighter-beige": "#EEEFDB",
        "off-white": "#F7F7F2",
      },
    },
  },
  plugins: [],
};
export default config;
