module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        gray: {
          100: "#f2f2f2",
          400: "#c3c3c3",
          600: "#858585",
          900: "#282828",
          "800_b2": "#404040b2",
        },
        blue_gray: { 100: "#d9d9d9", 900: "#363636" },
        black: { 900: "#000000" },
        light_blue: { 400: "#2aa5ff" },
        white: { A700: "#ffffff" },
      },
      fontFamily: {
        einasemibold: "Eina01-SemiBold",
        einaregular: "Eina01-Regular",
        einalight: "Eina01-Light",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
