// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/image',
    '@nuxtjs/i18n',
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@hypernym/nuxt-gsap',
  ],

  i18n: {
    locales: ['id-ID'],
    defaultLocale: 'id-ID',
    vueI18n: './i18n.config.js',
  },

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config',
  },

  googleFonts: {
    families: {
      Cinzel: '400..900',
    },
  },

  gsap: {
    // provide: false,
    // composables: true,
  },
})
