/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./assets/js/**/*.js"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0b192c",
          deep: "#060f1c",
          surface: "#f8fafc",
          border: "#e2e8f0",
          cyan: "#0284c7",
          cyanDark: "#0369a1",
          cyanLight: "#e0f2fe",
          emerald: "#047857",
          emeraldDark: "#065f46",
          slate: "#334155",
          muted: "#64748b"
        }
      },
      fontFamily: {
        display: ['"Manrope"', '-apple-system', 'sans-serif'],
        cinzel: ['"Cinzel"', 'serif'],
        body: ['"Manrope"', '-apple-system', 'sans-serif']
      }
    }
  },
  plugins: []
};
