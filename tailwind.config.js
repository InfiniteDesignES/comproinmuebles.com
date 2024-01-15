/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      50: '#EFFBFF',
      100: '#DEF6FF',
      200: '#B6EFFF',
      300: '#75E5FF',
      400: '#2CD9FF',
      500: '#00CCFF',
      600: '#009FD4',
      700: '#007FAB',
      800: '#006B8D',
      900: '#065874',
      950: '04384D'
    },
    extend: {
      backgroundSize: {
        'size-200': '200% 200%'
      },
      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-50': '50% 50%',
        'pos-100': '100% 100%'
      },
      fontFamily: {
        miFuente: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: []
};
