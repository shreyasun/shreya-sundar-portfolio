/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        blue1: '#f0f4f8',
        blue2: '#bcccdc',
        blue3: '#829ab1',
        blue4: '#486581',
        blue5: '#102a43',
      },
      listStyleType: {
        circle: 'circle',
      },
    },
  },
  plugins: [],
  darkMode: "class",
}
