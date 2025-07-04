/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(10deg)' },
          '50%': { transform: 'rotate(-10deg)' },
          '75%': { transform: 'rotate(10deg)' },
        },
         slideX: {
          '0%': { transform: 'translateX(-4px)' },
          '100%': { transform: 'translateX(0px)' },
        },
    
      },
      animation: {
        shake: "shake 0.5s cubic-bezier(.36,.07,.19,.97) both",
         slideX: 'slideX 1s  infinite',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
};
