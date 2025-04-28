/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
      ],
  theme: {
    extend: {},
    colors: {
          DEFAULT: '#A3D1C6',   // blue-800 by default
          light: '#FBFFE4',     // blue-500
          dark: '#3D8D7A',      // blue-900
        highlight: '#FF6B6B',     // or flat custom color
      },
    
  },
  
  plugins: [],
}

