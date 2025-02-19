import tailwindcssAnimate from "tailwindcss-animate";
import plugin from "tailwindcss/plugin";
import type { Config } from "tailwindcss";

const addVariablesForColors = plugin(({ addBase, theme }) => {
  const colors = theme("colors");
  const newVars: Record<string, string> = {};

  const flattenColors = (obj: Record<string, string | Record<string, string>>, prefix = "") => {
    for (const key in obj) {
      if (typeof obj[key] === "string") {
        newVars[`--${prefix}${key}`] = obj[key];
      } else {
        flattenColors(obj[key], `${prefix}${key}-`);
      }
    }
  };

  if (colors) {
    flattenColors(colors);
  }

  addBase({ ":root": newVars });
});

export default {
  darkMode: ["class"],
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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        "meteor-effect": "meteor 5s linear infinite",
      },
      keyframes: {
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [
	tailwindcssAnimate,
    addVariablesForColors, // Now correctly defined before usage
  ],
} satisfies Config;
