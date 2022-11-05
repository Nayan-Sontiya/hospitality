module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionDelay: {
        0: "0ms",
        2000: "2000ms",
      },
      backgroundImage: {
        'simlling-man': "url('/images/simlling-man.pngg')",
      }
    },
    screens: {
      'xs': '350px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1600px',
    }
  },
  variants: {
    display: ["responsive", "dropdown"],
  },
  plugins: [require("tailwindcss-dropdown")],
};
