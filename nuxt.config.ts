// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'rotate', mode: 'default' },
  },
  css: [
    '~/assets/css/animation.css',
  ],
  vue: {
    propsDestructure: true,

  },

  modules: [
    '@nuxt/image',
    '@nuxtjs/i18n',
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@hypernym/nuxt-gsap',
    'nuxt-icon',
    'vue3-carousel-nuxt',
    '@vueuse/nuxt',
  ],
  alias: {
    'gsap/SplitText': 'gsap-trial/SplitText',
  },

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
    provide: false,
    composables: true,
    extraPlugins: {
      scrollTrigger: true,
    },
    clubPlugins: {
      splitText: true,
    },
  },

  carousel: {
    prefix: 'Sh',
  },
})
