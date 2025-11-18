import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
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
      gridTemplateRows: {
        'layout': '100px minmax(900px, 1fr) 100px',
      }
    },
  },
  plugins: [],
};
export default config;
