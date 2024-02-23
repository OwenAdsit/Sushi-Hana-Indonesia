/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    colors: {
      light: '#fff',
      dark: '#101010',
      primary: '#AA1717',
    },
    container: {
      center: true,
      padding: {
        // 22px
        DEFAULT: '1.357rem',
        // 45px
        sm: '2.8125rem',
        // 104px
        xl: '6.5rem',
      },
    },
    fontFamily: {
      serif: ['Cinzel', 'serif'],
    },
    extend: {
      fontSize: {
        10: '10px',
        12: '12px',
        13: '13px',
        16: '16px',
        14: '14px',
        20: '20px',
        25: '25px',
        30: '30px',
        35: '35px',
        50: '50px',
        70: '70px',
        80: '80px',
        85: '85px',
      },
    },
  },
  plugins: [],
}
