import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        white: "#ffffff",
        emerald: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
          950: '#022c22',
        },
      },
      animation: {
        blob: "blob 7s infinite",
        progress: "progress 5s linear infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        progress: {
          "0%": {
            transform: "scaleX(0)",
            transformOrigin: "left"
          },
          "49%": {
            transform: "scaleX(1)",
            transformOrigin: "left"
          },
          "50%": {
            transform: "scaleX(1)",
            transformOrigin: "right"
          },
          "100%": {
            transform: "scaleX(0)",
            transformOrigin: "right"
          },
        },
      },
    },
  },
  safelist: [
    'bg-white',
    'text-white',
    'border-white',
    'from-white',
    'via-white',
    'to-gray-50/80',
    'bg-gradient-to-b',
    'bg-emerald-50/50',
    'bg-emerald-50',
    'bg-emerald-100',
    'bg-emerald-900',
    'bg-emerald-950',
    'bg-gray-50',
  ],
  plugins: [],
} satisfies Config;
