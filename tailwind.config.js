/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        titilliumweb: ['Titillium Web', 'Arial', 'sans-serif'],
      },
      screens: {
        // @media (min-width: 576px)
        'xs-min': '576px',
        // @media (max-width: 575.98px)
        'xs-max': {'max': '575.98px'},
        // @media (min-width: 640px)
        'sm': '640px',
        // @media (min-width: 768px)
        'md': '768px',
        // @media (min-width: 1024px)
        'lg': '1024px',
        // @media (min-width: 1280px)
        'xl': '1280px',
      },
      colors: {
        'primary': '#00afb4',
        'accent': '#00ebc8',
        'accent-2': '#00a7e0',
        'accent-3': '#4eb5e6', 
        'dark': '#002f35',
        'dark-2': '#2b2b2b',
        'dark-grey': '#999',
        'med-grey': '#e6e7e8',
        'med-grey-2': '#bcbec0',
        'light-grey': '#fafafa',
      },
      fontSize: {
        smbase: '0.95rem',
      },
    },
  },
  plugins: [],
}
