import type { Config } from "tailwindcss";
import tailwindAnimate from "tailwindcss-animate"; // Import the plugin directly

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
        primary: {
          DEFAULT: "#1a1a1a", // Modern black
          light: "#333333", // Slightly lighter black
          dark: "#0d0d0d", // Slightly darker black
        },
        accent: {
          DEFAULT: "#007bff", // Modern blue
          light: "#3399ff", // Lighter blue
          dark: "#0056b3", // Darker blue
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [tailwindAnimate], // Use the imported plugin
} satisfies Config;
