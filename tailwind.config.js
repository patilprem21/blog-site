/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'charcoal': '#101820',
        'yellow': '#FEE715',
      },
      fontFamily: {
        'tech': ['Orbitron', 'Exo 2', 'Rajdhani', 'sans-serif'],
        'professional': ['Inter', 'Source Sans Pro', 'sans-serif'],
        'mono': ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}

