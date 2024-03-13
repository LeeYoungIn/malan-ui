import path from 'path'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    path.join(path.dirname('./app/[locale]'), '/**/*.{js,ts,jsx,tsx}'),
    './app/ui/organisms/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)']
      }
    }
  },
  plugins: []
}
export default config
