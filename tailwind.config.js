/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    colors: {
      light: '#fff',
      dark: '#101010',
      prmiary: '#AA1717'
    },
    container: {
      center: true,
      padding: {
        // 22px
        DEFAULT: '1.357rem',
        // 45px
        sm: '2.8125rem',
        // 104px
        xl: '6.5rem'
      }
    },
    extend: {},
  },
  plugins: [],
}

