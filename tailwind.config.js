/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // tailwind.config.ts
theme: {
  extend: {
    fontFamily: {
      pixel: ['"Press Start 2P"', 'cursive'],
    },
    animation: {
      softBounce: 'softBounce 3s ease-in-out infinite',
    },
    keyframes: {
      softBounce: {
        '0%, 100%': { transform: 'translateY(0)' },
        '50%': { transform: 'translateY(-4px)' }, // subtle bounce
      },
    },
    screens: {
      xs: '400px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    }
  }
},
  plugins: [],
}
