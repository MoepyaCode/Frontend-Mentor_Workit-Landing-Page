/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
    }),
    extend: {
      fontFamily: {
        fraunces: ['Fraunces', 'serif'],
        manrope: ['Manrope', 'sans-serif'],
      },
      colors: {
        purple: {
          dark: '#24053E',
          davy: '#584D62'
        },
        eucalyptus: '#44FFA1',
        white: {
          ghost: '#FCF8FF',
          pure: '#FFFFFF'
        }
      },
      screens: {
        xs: '460px',
      },
      backgroundImage: {
        'purple-oval-pattern': 'radial-gradient(ellipse at top center, #24053E 70%, #FCF8FF 0%)',
        'ghost-oval-pattern': 'radial-gradient(ellipse at top center, #FCF8FF 70%, #FFFFFF 0%)',
        'twirrle-image': 'url(/images/challenge/bg-pattern-3.svg)',
        'founder-image': 'url(/images/challenge/image-founder.webp)',
      }
    },
  },
  plugins: [],
}