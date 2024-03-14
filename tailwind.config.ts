import path from 'path'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    path.join(path.dirname('./app/[locale]'), '/**/*.{js,ts,jsx,tsx}'),
    './app/ui/organisms/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)']
      },
      gridTemplateRows: {
        'body': 'max-content 1fr max-content',
      },
      screens: {
        smTo: { max: '639px' },
        mdTo: { max: '767px' },
        lgTo: { max: '1023px' },
        xlTo: { max: '1279px' },
        '2xlTo': { max: '1535px' }
      }
    }
  },
  plugins: []
}
export default config
