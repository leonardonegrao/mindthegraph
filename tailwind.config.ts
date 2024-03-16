import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7833FF',
        dark: '#212121',
        grey: '#EEEEEE',
      },
      backgroundImage: {
        'hero-pattern': 'linear-gradient(248deg, #DC1866 0%, #FF9226 100%)',
        'primary-btn-pattern': 'linear-gradient(180deg, #6119FF 0%, #7833FF 100%)',
      },
    },
  },
  plugins: [],
}

export default config
