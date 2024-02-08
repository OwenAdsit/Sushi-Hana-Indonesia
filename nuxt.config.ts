// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/i18n',
    '@nuxt/content',
  ],
  css: ['~/assets/css/tailwind.css'], 
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  i18n: {
    locales: ['id-ID'],
    defaultLocale: 'id-ID',
    vueI18n: './i18n.config.js'
  }
})
