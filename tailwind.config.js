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
        'md-min': '768px',
        // @media (min-width: 767.98px)
        'md-max': {'max': '767.98px'},
        // @media (min-width: 576px and max-width: 767.98px)
        'sm-md': {'min': '576px', 'max': '767.98px'},
        // @media (min-width: 992px)
        'md2-min': '992px',
        // @media (max-width: 991.98px)
        'md2-max': {'max': '991.98px'},
        // @media (min-width: 1024px)
        'lg': '1024px',
        // @media (min-width: 1280px)
        'xl': '1280px',
        // @media (min-width: 768px and max-width: 1279.98px)
        'md-xl': {'min': '768px', 'max': '1279.98px'},
        // @media (min-width: 992px and max-width: 1279.98px)
        'md2-xl': {'min': '992px', 'max': '1279.98px'},
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
      width: {
        'logo-width': '28vw',
      },
      height: {
        'logo-height': '28vw',
      },
      minHeight: {
        'header': '4.8rem',
      },
      gridTemplateColumns: {
        'connect-gridlg': '4.5rem auto',
      },
      fontSize: {
        smbase: '0.95rem',
        h1heromd: '2.95rem',
        h1herolg: '3.4rem',
        h2heromd: '1.587rem',
        h2herolg: '2rem',
        h2sectionmd: '2.25rem',
        h2sectionlg: '2.373rem',
        iconsm: '2.8rem',
        iconmd: '3rem',
        h3connectsm: '1.69rem',
        h3connectmd: '1.8rem',
        pconnectmd: '1.06875rem',
      },
      lineHeight: {
        'normal-enforced': '1.5',
        'extra-relaxed': '1.9',
      },
      letterSpacing: {
        tightest: '.075em',
      },
      margin: {
        '0.8rem': '0.8rem',
      },
    },
  },
  plugins: [],
}
