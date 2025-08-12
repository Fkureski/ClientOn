import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // Aqui está a sua classe de fundo personalizada
        'form-fundo': "url('/signin_bg.png')", 
      },
    },
  },
  plugins: [],
};
export default config;