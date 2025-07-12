/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    extend: {
      fontFamily: {
       display: ['"Inconsolata"', 'monospace'], // For --font-display
        secondary: ['"Karla"', 'sans-serif'],     // For --font-secondary
        title: ['"Special Elite"', 'system-ui'],  // For --font-title
      }
    }
  }
}