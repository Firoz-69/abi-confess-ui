/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // 🌸 Sakura palette (adjusted for dark UI)
        sakura: {
          50: "#2a1d22",
          100: "#3a232b",
          200: "#522c38",
          300: "#7a3b52",
          400: "#a64b6d",
          500: "#eb5f89",
          600: "#ff7aa2",
          700: "#ff9bb9",
          800: "#ffc1d4",
          900: "#ffe4ec",
        },

        // 🌙 Dark surfaces
        dark: {
          bg: "#0f0f14",
          surface: "#16161d",
          card: "#1e1e27",
          border: "#2a2a35",
        },

        // ✨ Text colors
        text: {
          primary: "#f8f9fa",
          secondary: "#c7c7d1",
          muted: "#9a9aa8",
        },

        // ❤️ Accents
        heart: "#ff4d6d",
        "rose-gold": "#c88a92",
        blush: "#2a1d22",
      },

      fontFamily: {
        romantic: ["Playfair Display", "serif"],
        body: ["Inter", "sans-serif"],
        hero: ["Raleway", "sans-serif"], // Add this
        script: ["Great Vibes", "cursive"], // Add this
        montserrat: ["Montserrat", "sans-serif"], // Move here from separate extend
      },

      animation: {
        float: "float 3s ease-in-out infinite",
        "pulse-slow": "pulse 3s ease-in-out infinite",
        "fade-in": "fadeIn 0.8s ease-in",
      },

      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
