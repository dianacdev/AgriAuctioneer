import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        'scarlet': {
          100: '#DA1444',
          200: '#641326',
        },
        'agri-blue':{
          100: '#14AADA',
          200: '#153445',
          300: '#152c45'
        },
        'agri-yellow' : {
          100: '#DAA314'
        },
        'agri-green':{
          100: '#14DA62',
          200: '#12493A',
          300: '#0C281F'
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
