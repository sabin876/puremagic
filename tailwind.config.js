export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#038fd4', // Updated Brand Blue
          light: '#4cc2ff',
          dark: '#026ca0',
        },
        secondary: {
          DEFAULT: '#E1F5FE', // Light Blue Tint
          contrast: '#1e293b',
        },
        accent: {
          DEFAULT: '#B3E5FC', // Cyan/Light Blue highlight
        },
        'topbar': '#90CDF4', // Light blue for top bar
        'maid-green': '#45c691', // Updated Brand Green
        dark: {
          DEFAULT: '#1e293b',
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}
