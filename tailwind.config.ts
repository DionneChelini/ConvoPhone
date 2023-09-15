import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx,css}"],
  theme: {
    extend: {
      fontFamily: {
        feather: "Feather",
        dinround: "din-round",
      },
    fontSize: {
        "custom-xs": "0.938rem", 
        "custom-sm": "1.063rem",
        "custom-lg": "2.25rem",
        "custom-3xl": "2rem",  
      },
      colors: {
        "color-owl-always-light": "rgb(88,204,2)",
        "color-tree-frog-always-light": "rgb(88,167,0)",

        "color-snow": "rgb(255,255,255)",
        "color-swan-always-light": "rgb(229,229,229)",
        "color-swan-always-dark": "rgb(55,70,79)",
        "color-hare-always-light": "rgb(175,175,175)",
        "color-wolf-always-light": "rgb(119,119,119)",
        "color-eel-always-light": "rgb(75,75,75)",
        "color-macaw-always-light": "rgb(28,176,246)",
        "color-manta-ray": "rgb(4,44,96)",
      }
    },
    },
  },
  plugins: [],
} satisfies Config;
