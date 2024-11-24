/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      inset: {
        'custom': '30% 30% 45% 30%', // Custom inset values
      },
      zIndex: {
        '1111111111': '1111111111', // Custom z-index value
      },
      boxShadow: {
        'custom': '5px 5px 10px #cd6f03, -5px -5px 10px #ff9703', // Custom box-shadow
      },
      borderRadius: {
        'custom': '50px', // Custom border-radius
      },
      colors: {

      },
    },
  },
  plugins: [],
};
