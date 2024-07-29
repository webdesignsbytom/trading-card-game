/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'green-bg': "url('../assets/img/myea/green-bg1.png')",
        'holo-bg': "url('https://res.cloudinary.com/simey/image/upload/Dev/PokemonCards/illusion.webp')",
      },
      backgroundSize: {
        '50': '50%',
      },
      colors: {
        'main-colour': '#2563eb',
        'secondary-colour': '#ffffff',
        'nav-colour': '#ef4444',
        'footer-colour': '#1F2937',
        'main-border': '#000000',
        'main-button': '#60a5fa',
        'selected-button': '#1d4ed8',
        'colour-light': '#6DC85A',
        'colour-med': '#32931D',
        'colour-dark': '#1A7408',
        'transparent-black': 'rgba(0, 0, 0, 0.65)',
        'transparent-white': 'rgba(255, 255, 255, 0.65)',
        'dark-alt-text': '#FFFFFF',
        'error': '#',
        'success': '#'
      },
      width: {
        eighty: '80%',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        gasoek: ['Gasoek One', 'sans-serif'],
      },
      fontSize: {
        ss: '0.6rem',
      },
      gridTemplateRows: {
        reg: 'auto 1fr',
        rev: '1fr auto',
        even: '1fr 1fr 1fr',
        one: '1fr',
        special: 'auto 1fr 0.5fr',
        ls: '1fr 0.4fr',
        a1a: 'auto 1fr auto',
        a11a: 'auto 1fr 1fr auto',
        '1a1': '1fr auto 1fr',
        aa: 'auto auto',
        '3x': '3fr 1fr',
        '4x': '4fr 1fr',
        item: '50px 1fr',
        'ten-one': '10fr 1fr',
        '10': '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr',
      },
      gridTemplateColumns: {
        reg: 'auto 1fr',
        rev: '1fr auto',
        even: '1fr 1fr 1fr',
        xo: '1fr 0.6fr',
        a1a: 'auto 1fr auto',
        '1a1': '1fr 0.4fr 1fr',
        aa: 'auto auto',
        '3x': '3fr 1fr',
        'c8': '1fr 6fr',
        'x3': '0.8fr 3fr',
        '2x': '2fr 1fr',
      },
    },
  },
  plugins: [],
};
