/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },

      fontSize: {
        xxs: "0.65rem",
        xxxs: "0.55rem",
      },

    },

    screens: {
      xs: "500px",
      sm: "650px",
      md: "800px",
      mdx: "1000px",
      lg: "1280px",
    },

    container: {
      screens: {
        xs: "100%",
        sm: "100%",
        md: "100%",
        lg: "1280px",
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
  
}
