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
       display: ['"Inconsolata"', 'monospace'],
        secondary: ['"Karla"', 'sans-serif'],
        title: ['"Special Elite"', 'system-ui'],
      },
      colors: {
      card: 'hsl(0 0% 100%)',
      'card-foreground': 'hsl(240 10% 3.9%)'
      },
      border: 'hsl(240 5.9% 90%)',          // Light mode border
      ring: 'hsl(240 5% 64.9%)',            // Focus ring
      destructive: 'hsl(0 84.2% 60.2%)',    // Error states
        // ... add more as needed
      },
    },
  darkMode: ['class', '[data-theme="dark"]'],
}