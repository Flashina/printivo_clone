/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      darkGray: "#506683",
    },
    extend: {
      fontFamily: {
        sans: ["SF Pro", "sans-serif"],
      },
    },
  },
  plugins: [],
};
