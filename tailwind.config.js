/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        canvas: {
          dark: "#0f1117",
          panel: "#161922",
          surface: "#1f2330",
          border: "#2b3142",
          muted: "#636d85",
          highlight: "#3b82f6",
          accent: "#8b5cf6",
        },
      },
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
      },
    },
  },
  plugins: [],
}
