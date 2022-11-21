const colors = require("tailwindcss/colors");
const { fontFamily } = require("tailwindcss/defaultTheme");
const { breakpoints, light, dark } = require("./theme");

delete colors["lightBlue"];
delete colors["warmGray"];
delete colors["trueGray"];
delete colors["coolGray"];
delete colors["blueGray"];

/**@type {import('tailwindcss').Config}*/
module.exports = {
  content: ["./**/*.{ts,js,tsx,jsx}"],
  darkMode: "class",
  important: true,
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-space)", ...fontFamily.sans],
      },
      screens: {
        "sm-max": { max: breakpoints.sm },
        "md-max": { max: breakpoints.m },
        "lg-max": { max: breakpoints.lg },
        "sm-min": { min: breakpoints.sm },
        "md-min": { min: breakpoints.m },
        "lg-min": { min: breakpoints.lg },
      },
      colors: {
        ...colors,
        c1: "var(--colors-c1)",
        c2: "var(--colors-c2)",
        c3: "var(--colors-c3)",
        c4: "var(--colors-c4)",
        c5: "var(--colors-c5)",
        "c1-l": "var(--colors-c1-l)",
        "c2-l": "var(--colors-c2-l)",
        "c3-l": "var(--colors-c3-l)",
        "c4-l": "var(--colors-c4-l)",
        "c5-l": "var(--colors-c5-l)",
      },
      variables: {
        DEFAULT: {
          colors: light,
          breakpoints,
        },
      },
      darkVariables: {
        DEFAULT: {
          colors: dark,
        },
      },
    },
  },
  plugins: [
    require("@mertasan/tailwindcss-variables"),
    require("tailwind-scrollbar-hide"),
  ],
  corePlugins: {
    fontFamily: true,
  },
};
