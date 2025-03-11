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
      },
      screens: {
        '3xl': '1920px',  // 24-inch monitor, Full HD
        '4xl': '2560px',  // 27-inch monitor, 1440p
        '5xl': '3440px',  // Ultrawide, 21:9
        '6xl': '3840px', 
        '14inch': '1512px', // 14-inch MacBook Pro
        '14inch-lg': '1600px', // Larger 14-inch screens
        '16inch': '1728px', // 16-inch MacBook Pro
        '16inch-lg': '1920px',
      },
      fontFamily: {
        crete: ["'Crete Round'", "serif"],
        roboto: ["'Roboto'", "sans-serif"],
        opensans:["'Open sans'", "sans-serif"]
      },
    },
  },
  plugins: [],
} satisfies Config;
