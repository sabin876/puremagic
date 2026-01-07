export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0289D1', // Logo Blue
          light: '#4eb3e6',
          dark: '#016196',
        },
        secondary: {
          DEFAULT: '#E1F5FE', // Light Blue Tint
          contrast: '#1e293b',
        },
        accent: {
          DEFAULT: '#B3E5FC', // Cyan/Light Blue highlight
        },
        'topbar': '#90CDF4', // Light blue for top bar
        'maid-green': '#269581', // Teal/Green for CTA button
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
