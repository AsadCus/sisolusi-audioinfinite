import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Inter", "serif"],
        body: ["Inter", "sans-serif"],
      },
      colors: {
        accent: "#C9A96E",
        "accent-muted": "rgba(201,169,110,0.10)",
        "bg-base": "#0A0A0A",
        "bg-surface": "#111111",
        "bg-elevated": "#1A1A1A",
        "bg-overlay": "#222222",
        "text-primary": "#F5F5F0",
        "text-secondary": "#A3A3A0",
        "text-muted": "#525250",
        border: "#2A2A2A",
        "border-subtle": "#1E1E1E",
      },
      spacing: {
        "section": "8rem",
      },
      letterSpacing: {
        "widest-plus": "0.2em",
      },
      transitionTimingFunction: {
        "expo-out": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      transitionDuration: {
        "400": "400ms",
        "600": "600ms",
        "800": "800ms",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in": "fade-in 0.6s ease forwards",
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;