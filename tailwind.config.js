/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      white: "#fff",
      blue: "#001948",
      yellow: "#f8bd1a",
    },
    extend: {
      bannerImg: "url('/hei-banner-1.webp')",
      blackOverlay: "linear-gradien(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%)",
    },
  },
  plugins: [],
};
