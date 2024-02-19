<script setup lang="ts">
import type { ContentHero } from '~/types/content'

const getHeader = () => queryContent('/feature/hero').find()
const { data: hero } = await useAsyncData('hero', getHeader, { transform: v => v[0] as unknown as ContentHero })

const img = useImage()

const herobg = computed(() => {
  const bg = img('/img/bg-image.svg', { format: 'webp', width: 226, height: 527, opacity: 0.04 })
  return { backgroundImage: `url('${bg}')` }
})

onMounted(() => {
  /**
   * Animation for description
   *
   */
  useGsap.fromTo('.description', {
    x: 100,
    opacity: 0,
  }, {
    scrollTrigger: {
      trigger: '.wrapper-description',
      start: 'top bottom',
      end: 'bottom top',
      toggleActions: 'restart pause restart pause',
    },
    x: 0,
    opacity: 1,
    duration: 1.5,
  })

  /**
   * Animation for subheading image
   *
   */
  useGsap.fromTo('.subheading-image', {
    x: 100,
    opacity: 0,
  }, {
    scrollTrigger: {
      trigger: '.subheading-image',
      start: 'top bottom',
      end: 'bottom top',
      toggleActions: 'restart pause restart pause',
    },
    x: 0,
    opacity: 1,
    duration: 1.5,
  })

  /**
   * Animation for subheading
   *
   */
  useGsap.fromTo('.subheading', {
    x: -100,
    opacity: 0,
  }, {
    scrollTrigger: {
      trigger: '.subheading',
      start: 'top bottom',
      end: 'bottom top',
      toggleActions: 'restart pause restart pause',
    },
    x: 0,
    opacity: 1,
    duration: 1.5,
  })
})
</script>

<template>
  <div id="hero" class="bg-no-repeat" :style="herobg">
    <div class="h-screen relative flex flex-col justify-center overflow-hidden container mx-auto">
      <nuxt-img
        src="/img/indonesiafood@2x.png"
        width="534px"
        height="749px"
        format="webp"
        class="hero-image absolute bottom-0 left-32 fade-in-bottom"
      />

      <div class="absolute left-[593px]">
        <!-- class untuk font lebih baik kami configurasi di tailwind.config.js. -->
        <h1 class="heading-1 text-85 leading-tight font-bold w-[716px] fade-in-left">
          {{ hero?.heading }}
        </h1>

        <sh-link-underline class="action swing-in-top-bck">
          {{ hero?.action }}
        </sh-link-underline>
      </div>
    </div>

    <div class="wrapper-description container mx-auto mt-[320px] flex justify-center items-center">
      <span class="description text-35 leading-snug w-[732px] text-center">
        {{ hero?.description }}
      </span>
    </div>

    <div class="wrapper-subheading container mx-auto mt-[196px] flex flex-col items-end pl-0 relative pb-[183px]">
      <nuxt-img
        src="/img/foodsurabaya@2x.png"
        width="632px"
        height="716px"
        format="webp"
        class="subheading-image"
      />

      <span class="subheading text-80 font-bold leading-[90px] tracking-normal absolute top-[273px] self-start w-[812px] flex">
        {{ hero?.subheading }}
      </span>
    </div>
  </div>
</template>

<style scoped>
#hero {
  background-position-x: right;
  background-position-y: 601px;
}

.heading-1 {
  animation-delay: 0.5s;
}

.action {
  animation-delay: 1s;
}
</style>
