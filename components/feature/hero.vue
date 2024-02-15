<script setup lang="ts">
import type { ContentHero } from '~/types/content'

const { $gsap } = useNuxtApp()

const getHeader = () => queryContent('/feature/hero').find()
const { data: hero } = await useAsyncData('hero', getHeader, { transform: v => v[0] as unknown as ContentHero })

onMounted(() => {
  $gsap.fromTo('.hero-image', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.5 })
  $gsap.fromTo('.heading-1', { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 1.5, delay: 0.6 })
})
</script>

<template>
  <div id="hero" class="h-screen relative flex flex-col justify-center overflow-hidden">
    <nuxt-img
      src="/img/indonesiafood@2x.png"
      width="534px"
      height="749px"
      format="webp"
      class="hero-image absolute bottom-0 left-32"
    />

    <div class="absolute left-[593px]">
      <h1 class="heading-1 text-[85px] leading-[100px] font-bold w-[716px]">
        {{ hero?.heading }}
      </h1>

      <sh-link-underline>
        {{ hero?.action }}
      </sh-link-underline>
    </div>
  </div>
</template>
