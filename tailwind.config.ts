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
      colors : {
        primary : "#212529",
        sceondary : "#343A40",
        tertiary : "#495057",
        fourth : "#CED4DA",
        fifth : "#DEE2E6",
        accent : "#CED4DA",
        text : "#F8F9FA",
        text2 : "#E9ECEF"
      },
      fontFamily : {
        ceracy : ['var(--font-creacy)'],
      }
    },
  },
  plugins: [],
};
export default config;
