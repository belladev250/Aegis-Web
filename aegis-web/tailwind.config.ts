import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        navy:'#33445B',
        maroon:'#772D2B',
        borderColor:'#CACCD3',
        beige:'#F2F2F2'
      },
    },
  },
  plugins: [],
};
export default config;
