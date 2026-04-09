// import type { Config } from 'tailwindcss'

// const config: Config = {
//   darkMode: 'class',
//   content: [
//     './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
//     './src/components/**/*.{js,ts,jsx,tsx,mdx}',
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
// export default config

import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        lora: ['Lora', 'serif'],
      },
      colors: {
        'brand-parchment': '#fdfbf7',
        'brand-red': {
          500: '#ef4444',
          800: '#991b1b',
          900: '#7f1d1d',
        },
      },
    },
  },
  // UPDATED: Added the new aspect-ratio plugin
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
}
export default config


