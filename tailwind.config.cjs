/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        'primary': 'rgb(194 65 12)'
      },
      backgroundImage: {
        'hero': 'url(https://images.pexels.com/photos/375467/pexels-photo-375467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'
      }
    },
    fontFamily: {
      sans: ["Unbounded", "sans-serif"],
    }
  },
  plugins: [],
};
