/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Noto Sans'", defaultTheme.fontFamily.sans],
      },
      colors: {
        bg: "#090b18",
        "border-primary": "#D9D9D9",
        primary: "#0093D3",
        secondary: "#C840D5",
      },
      backgroundImage: {
        intro: "url('/intro.jpeg')",
        btn: "bg-gradient-to-r from-[#00C2FF] to-[#000E55]",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
