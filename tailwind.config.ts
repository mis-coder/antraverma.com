import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    {
      pattern: /animate-underline-\d/,
    },
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary-white": "#fdfdfd",
        "primary-black": "#030303",
      },
      fontFamily: {
        barlow: ['"Barlow Semi Condensed"'],
      },
      animation: {
        grow: "grow 1s ease-out 2",
        ...Array.from({ length: 4 }, (_, i) => ({
          [`underline-${i}`]: `underline 0.5s linear ${0.5 * i}s forwards`,
        })).reduce((a, c) => ({ ...a, ...c }), {}),
      },
      keyframes: {
        underline: {
          "0%": { textDecoration: "none" },
          "100%": { textDecoration: "underline", textUnderlineOffset: "10px" },
        },
        grow: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.2)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
