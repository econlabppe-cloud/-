/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Heebo', 'sans-serif'],
      },
    },
  },
  plugins: [],
  safelist: [
    { pattern: /from-(blue|indigo|emerald|teal|purple|violet|rose|pink|cyan|sky|amber|yellow|orange|red|green|lime|slate|gray|zinc|stone|neutral|fuchsia)-(500|600|700|800|900)/ },
    { pattern: /to-(blue|indigo|emerald|teal|purple|violet|rose|pink|cyan|sky|amber|yellow|orange|red|green|lime|slate|gray|zinc|stone|neutral|fuchsia)-(600|700|800|900)/ },
    { pattern: /border-(blue|indigo|emerald|teal|purple|violet|rose|pink|cyan|sky|amber|yellow|orange|red|green|lime|slate|gray|zinc|stone|neutral|fuchsia)-(200|300|400)/ },
    { pattern: /text-(blue|indigo|emerald|teal|purple|violet|rose|pink|cyan|sky|amber|yellow|orange|red|green|lime|slate|gray|zinc|stone|neutral|fuchsia)-(600|700|800)/ },
    { pattern: /bg-(blue|indigo|emerald|teal|purple|violet|rose|pink|cyan|sky|amber|yellow|orange|red|green|lime|slate|gray|zinc|stone|neutral|fuchsia)-(50|100)/ },
  ],
};
