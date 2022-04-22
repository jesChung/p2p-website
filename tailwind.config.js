module.exports = {
  content: ["./src/**/*.{html,jsx,js}", "./src/*.{html,jsx,js}"],
  theme: {
    screens: {
      'sm': '568px',
      'md': '768px',
      'lg': '930px',
      'xl': '1146px',
    },
    extend: {
      colors: {
        bg: "#f7fafd",
      }
    },
  },
  plugins: [],
}
