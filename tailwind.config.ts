/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss"
import { PluginAPI } from "tailwindcss/types/config"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      transform: {
        "translate-center": "translate(-50%, -50%)"
      },
      boxShadow: {
        custom: "0 10px 100px rgba(0, 0, 0, 0.1)"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "custom-bg":
          "linear-gradient(to right, rgba(245, 245, 245, 0.8), rgba(245, 245, 245, 0.8)), url(/assets/svg/img-fundo.svg)",
        "custom-bg-contact":
          "linear-gradient(to right, rgba(245, 245, 245, 0.8), rgba(245, 245, 245, 0.8)), url(/assets/svg/fundo-comum.svg)"
      },
      colors: {
        primary: {
          light: "#FFF",
          DEFAULT: "#538EAC",
          dark: "#000"
        },
        secondary: {
          light: "#eee",
          DEFAULT: "#2C3E50",
          dark: "#1A242F"
        },
        transitionProperty: {
          color: "color"
        },
        black: {
          111: "#111",
          333: "#333"
        },
        gray: {
          555: "#555",
          666: "#666"
        },
        light: {
          fafafa: "#fafafa"
        },
        customGray: "#444"
      },
      borderWidth: {
        "1": "1px"
      },
      fontSize: {
        xss: ".75rem",
        xs: ".75rem",
        sm: ".875rem",
        tiny: ".875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.2rem",
        "2xl": "1.5rem",
        "custom-lg": "1.2rem",
        "2x2": "1.8rem",
        "3xl": "1.875rem",
        "3x2": "2rem",
        "4xl": "2.2rem",
        "4x2": "2.4rem",
        "4x4": "2.8rem",
        "5xl": "3rem",
        "6xl": "4rem",
        "7xl": "5rem",
        "8xl": "6rem"
      },
      letterSpacing: {
        tightest: "-.075em",
        tighter: "-.05em",
        tight: "-.025em",
        normal: "0",
        wide: ".025em",
        "auto-wider": ".1.6",
        wider: ".1.7px",
        widest: ".1px",
        "extra-widest": ".3px"
      }
    }
  },
  plugins: [
    function ({ addUtilities }: PluginAPI) {
      addUtilities({
        ".btn-custom": {
          color: "#fff",
          textTransform: "uppercase",
          letterSpacing: "1px",
          display: "inline-block",
          fontWeight: "700",
          borderRadius: "5px",
          boxShadow: "0 5px 15px 0 rgba(0,0,0,0.15)",
          transition: "transform .3s"
        }
      })
    }
  ]
}
export default config
