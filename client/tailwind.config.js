/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'cards-display':
          "url('../assets/images/backgrounds/multiple_cards_framing_background_image_1.png')",
        'holo-bg':
          "url('https://res.cloudinary.com/simey/image/upload/Dev/PokemonCards/illusion.webp')",
      },
      backgroundSize: {
        50: '50%',
      },
      boxShadow: {
        'internal-main': 'inset -1px 43px 35px 48px #00000024',
      },
      colors: {
        'main-colour': '#2563eb',
        'secondary-colour': '#ffffff',
        'nav-colour': '#ef4444',
        'footer-colour': '#1F2937',
        'fantasy-text': '#C9A85E',
        'main-border': '#A46C30',
        'main-button': '#60a5fa',
        'selected-button': '#1d4ed8',
        'card-border': '#ffffff',
        'colour-med': '#32931D',
        'colour-dark': '#1A7408',
        'transparent-black': 'rgba(0, 0, 0, 0.65)',
        'transparent-white': 'rgba(255, 255, 255, 0.65)',
        'dark-alt-text': '#FFFFFF',
        'alt-text': '#000000',
        colour1: '#C9A85E',
        colour2: '#a46c30',
        error: '#',
        success: '#',
      },
      width: {
        eighty: '80%',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        gasoek: ['Gasoek One', 'sans-serif'],
        fantasy: ['FantasyFont', 'sans-serif'],
      },
      fontSize: {
        xss: '0.3rem',
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
        aa: 'auto auto',
        item: '50px 1fr',
      },
      gridTemplateColumns: {
        reg: 'auto 1fr',
        rev: '1fr auto',
        even: '1fr 1fr 1fr',
        xo: '1fr 0.6fr',
        a1a: 'auto 1fr auto',
        aa: 'auto auto',
      },
    },
  },
  plugins: [],
};
