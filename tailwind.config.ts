import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary palette - Parisian Tech Atelier
        midnight: {
          DEFAULT: "#0a0e17",
          50: "#f6f7f9",
          100: "#eceef2",
          200: "#d5dae2",
          300: "#b0bac9",
          400: "#8594ab",
          500: "#667790",
          600: "#516077",
          700: "#434e61",
          800: "#3a4352",
          900: "#343b46",
          950: "#0a0e17",
        },
        // Warm cognac accent - from the jacket
        cognac: {
          DEFAULT: "#c2703c",
          50: "#fdf6f0",
          100: "#faeadc",
          200: "#f4d2b8",
          300: "#ecb48a",
          400: "#e28e5a",
          500: "#c2703c",
          600: "#d4632e",
          700: "#b04d25",
          800: "#8d4024",
          900: "#723720",
          950: "#3d1a0f",
        },
        // Soft cream for elegant contrast
        cream: {
          DEFAULT: "#f5f0e8",
          50: "#fdfcfa",
          100: "#f5f0e8",
          200: "#ebe3d4",
          300: "#ddd0b9",
          400: "#cbb89a",
          500: "#bca07e",
          600: "#af8c6c",
          700: "#92745a",
          800: "#775f4d",
          900: "#614f41",
          950: "#342921",
        },
        // Muted slate for subtle elements
        slate: {
          DEFAULT: "#8594ab",
          light: "#b0bac9",
          dark: "#516077",
        },
      },
      fontFamily: {
        display: ["var(--font-syne)", "system-ui", "sans-serif"],
        body: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "noise": "url('/images/noise.png')",
        "grid-pattern": `linear-gradient(to right, rgba(197, 112, 60, 0.03) 1px, transparent 1px),
                         linear-gradient(to bottom, rgba(197, 112, 60, 0.03) 1px, transparent 1px)`,
      },
      backgroundSize: {
        "grid": "60px 60px",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "slide-up": "slideUp 0.8s ease-out forwards",
        "slide-down": "slideDown 0.6s ease-out forwards",
        "slide-left": "slideLeft 0.8s ease-out forwards",
        "slide-right": "slideRight 0.8s ease-out forwards",
        "scale-in": "scaleIn 0.6s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "gradient-x": "gradient-x 15s ease infinite",
        "shimmer": "shimmer 2s linear infinite",
        "draw": "draw 1.5s ease-out forwards",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideLeft: {
          "0%": { opacity: "0", transform: "translateX(40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideRight: {
          "0%": { opacity: "0", transform: "translateX(-40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-15px)" },
        },
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        draw: {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(194, 112, 60, 0.3)" },
          "100%": { boxShadow: "0 0 40px rgba(194, 112, 60, 0.6)" },
        },
      },
      boxShadow: {
        "glass": "0 8px 32px rgba(0, 0, 0, 0.3)",
        "glass-lg": "0 25px 50px -12px rgba(0, 0, 0, 0.4)",
        "inner-glow": "inset 0 1px 0 0 rgba(255, 255, 255, 0.05)",
        "cognac": "0 0 40px rgba(194, 112, 60, 0.15)",
        "cognac-lg": "0 0 60px rgba(194, 112, 60, 0.25)",
      },
      backdropBlur: {
        glass: "16px",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};

export default config;
