import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx,css}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx,css}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx,css}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx,css}",
  ],
  theme: {
    extend: {
      colors: {
        "black-color": "#27272A",
        "gray-color": "#696969",
        "light-gray-color": "#E5E7EB",
        "white-color": "#FCFBFA",
        "purple-color": "#7E3AF2",
        "purple-color-hover": "#6C2BD9",
        "btn-pressed": "#CABFFD",
        "red-color": "#E02424",
      },
      fontWeight: {
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        "extra-bold": "800",
        black: "900",
      },
      backgroundImage: {
        hero: "url('/assets/background.png')",
        "hero-mob": "url('/assets/background-mobile.png')",
        main: "url('/assets/top-bg.png')",
      },
      container: {
        screens: {
          mobile: "600px",
          tablet: "900px",
          desktop: "1280px",
        },
      },
    },
  },
  plugins: [],
};
export default config;
