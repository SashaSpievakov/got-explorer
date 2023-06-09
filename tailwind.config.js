/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        cardo: ['var(--font-cardo)'],
        mono: ['var(--font-karla)'],
        tulpen: ['var(--font-tulpen)'],
      },
      fontSize: {
        '3.5xl': '1.67rem',
        '5.5xl': ['3.75rem', { lineHeight: '4.5rem' }],
        '7.5xl': ['5.25rem', { lineHeight: '6rem' }],
        '8.5xl': '7rem',
      },
      spacing: {
        '8.5/10': '85%',
        '8/10': '80%',
        '5.5/10': '55%',
        '4.5/10': '45%',
      },
      opacity: {
        15: '.15',
        7: '.07',
      },
      outlineWidth: {
        3: '3px',
      },
      gridTemplateColumns: {
        card: '30% 70%',
      },
      screens: {
        xs: '400px',
        sm: '576px',
      },
    },
  },
  plugins: [],
};
