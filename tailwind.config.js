module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coolblue: { DEFAULT: "#81A8C9", 400: "#AEBEC8" },
        smoke: { DEFAULT: "#3C3C3C", 400: "#6F6F6F" },
      },
    },
  },
  plugins: [],
};
