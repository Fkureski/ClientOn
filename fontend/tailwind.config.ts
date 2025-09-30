/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",        // app/ na raiz
    "./src/**/*.{js,ts,jsx,tsx,mdx}",        // caso use src/
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // caso a pasta esteja na raiz
  ],
  theme: {
    extend: {
      backgroundImage: {
        "form-fundo": "url('/signin_bg.png')",
      },
    },
  },
  plugins: [],
};
