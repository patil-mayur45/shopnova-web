/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1A4D2E",   // deep forest green - brand
          light: "#4F6F52",
          dark: "#0F2E1B",
        },
        accent: {
          DEFAULT: "#E8A33D",   // warm amber - CTA
          light: "#F4C575",
        },
        cream: "#F7F3E9",
        ink: "#1E1E1E",
      },
      fontFamily: {
        display: ["'Poppins'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
      },
    },
  },
  plugins: [],
}
