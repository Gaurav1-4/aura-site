import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dawn: {
          50: '#FBF5F1',
          100: '#F4E4DC',
          200: '#E8C5B8',
          300: '#D4A5A5',
          400: '#B88B82'
        },
        pewter: {
          100: '#D9DCE2',
          200: '#A8B5C7',
          300: '#7C8FA8',
          400: '#5E6B7E',
          500: '#3D4654'
        },
        ink: {
          900: '#0E1014',
          800: '#1A1D24',
          700: '#2A2F38'
        },
        accent: {
          cyan: '#7DD3FC',
          peach: '#FFEFD5'
        },
        brand: 'hsl(var(--brand))',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      keyframes: {
        'shiny-text': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'appear-zoom': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'shiny-text': 'shiny-text 8s infinite',
        'appear-zoom': 'appear-zoom 0.5s ease-out forwards',
        marquee: 'marquee 32s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
