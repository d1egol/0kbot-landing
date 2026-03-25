import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F7F5F0",
        foreground: "#1A1A1A",
        primary: {
          DEFAULT: "#1B5FA6",
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#D4A853",
          foreground: "#1A1A1A",
        },
        muted: {
          DEFAULT: "#E5E2DB",
          foreground: "#4A4A4A",
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#1A1A1A",
        },
        border: "#E5E2DB",
        input: "#E5E2DB",
        ring: "#1B4332",
        destructive: {
          DEFAULT: "#DC2626",
          foreground: "#FFFFFF",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(2.5rem, 5vw, 3.5rem)", { lineHeight: "1.1" }],
        "display-lg": ["clamp(2rem, 4vw, 2.75rem)", { lineHeight: "1.15" }],
        "display-md": ["clamp(1.5rem, 3vw, 2rem)", { lineHeight: "1.2" }],
      },
      maxWidth: {
        content: "1100px",
      },
      borderRadius: {
        lg: "0.5rem",
        md: "0.375rem",
        sm: "0.25rem",
      },
      boxShadow: {
        card: "0 1px 3px 0 rgba(0,0,0,0.06), 0 1px 2px -1px rgba(0,0,0,0.04)",
        "card-hover":
          "0 4px 12px 0 rgba(0,0,0,0.08), 0 2px 4px -1px rgba(0,0,0,0.06)",
        metric:
          "0 8px 32px 0 rgba(27,67,50,0.12), 0 2px 8px 0 rgba(27,67,50,0.08)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        scan: "scan 2s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        scan: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
