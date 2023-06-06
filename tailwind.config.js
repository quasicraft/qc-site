module.exports = {

  theme: {
    fontFamily: {
      sans:  [ "Manrope" ]
    },
  },

  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  plugins: [ require('@tailwindcss/typography') ],
  
}