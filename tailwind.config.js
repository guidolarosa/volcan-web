/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'sm': '360px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1440px',
      '2xl': '1920px',
      '4xl': '3240px'

    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'footer-gradient': 
          'linear-gradient(90deg, rgba(30,30,30), black)',
        'gradient-card': 'linear-gradient(136deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0.13) 0.01%, rgba(255, 249, 248, 0.00) 100%)',
        'gradient-dark': 'linear-gradient(136deg, rgba(0, 0, 0, 0.1) 0%, rgba(0,0,0,0.5))'
      },
    },
  },
  plugins: [],
}
