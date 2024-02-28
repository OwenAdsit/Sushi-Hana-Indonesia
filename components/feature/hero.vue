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
   * Animation for description (uses club plugin)
   *
   */
  const Splitter = useSplitText
  const desc = new Splitter('.description', {
    type: 'lines',
    linesClass: 'split-child',
  })

  window.addEventListener('resize', () => desc.revert())

  useGsap.set('.description', { perspective: 400, opacity: 1 })

  useGsap.from(desc.lines, {
    duration: 1.5,
    opacity: 0,
    scale: 1,
    y: 50,
    rotationX: 25,
    rotationY: 5,
    transformOrigin: 'bottom left -25',
    ease: 'power4',
    stagger: 0.15,
    delay: 0.25,
    scrollTrigger: {
      trigger: '.wrapper-description',
      start: 'top bottom',
      end: 'bottom top',
      toggleActions: 'play none none none',
    },
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
      toggleActions: 'play none none none',
    },
    x: 0,
    opacity: 1,
    duration: 1.5,
  })

  /**
   * Animation for subheading
   *
   */
  const subhead = new Splitter('.subheading', {
    type: 'lines',
    linesClass: 'subhead-child',
  })

  useGsap.set('.subheading', { perspective: 800, opacity: 1 })

  useGsap.from(subhead.lines, {
    duration: 1.5,
    opacity: 0,
    scale: 1,
    x: 500,
    rotationX: 25,
    rotationY: 5,
    transformOrigin: 'bottom left -25',
    ease: 'power4',
    stagger: 0.15,
    delay: 0.25,
    scrollTrigger: {
      trigger: '.subheading',
      start: 'top bottom',
      end: 'bottom top',
      toggleActions: 'play none none none',
    },
  })
})
</script>

<template>
  <div id="hero" class="bg-no-repeat" :style="herobg">
    <div class="h-screen relative flex flex-col justify-center container mx-auto p-0 overflow-hidden">
      <picture class="hero-image absolute h-[65.64vh] md:h-[83.008vh] lg:h-[85vh] w-[325px] md:w-[436px] lg:w-auto bottom-0 max-md:-right-10 lg:left-[5.5vw] fade-in-bottom">
        <source media="(min-width: 1024px)" srcset="/img/hero/hero-1-desktop.png 1x, /img/hero/hero-1-desktop@2x.png 2x" class="h-full">

        <source media="(min-width: 768px) and (max-width: 1023px)" srcset="/img/hero/hero-1-ipad.png 1x, /img/hero/hero-1-ipad@2x.png 2x" class="h-full">

        <source media="(max-width: 768px)" srcset="/img/hero/hero-1-mobile@2x.png 2x" class="h-full">

        <img src="/img/hero/hero-1-mobile.png" alt="Hero Image" class="h-full">
      </picture>

      <div class="top-[190px] md:top-[unset] absolute left-5 md:left-[37.5vw] 2xl:left-[30.5vw]">
        <h1 class="heading-1 display-1 w-[400px] lg:w-[716px] fade-in-left">
          {{ hero?.heading }}
        </h1>

        <sh-link-underline class="action fade-in-top">
          {{ hero?.action }}
        </sh-link-underline>
      </div>
    </div>

    <div class="wrapper-description container mx-auto mt-[320px] flex justify-center items-center">
      <span class="description display-3 w-[732px] text-center">
        {{ hero?.description }}
      </span>
    </div>

    <div class="wrapper-subheading container mx-auto mt-[196px] flex flex-col items-center md:items-end  relative pb-[183px]">
      <nuxt-img
        src="/img/foodsurabaya@2x.png"
        format="webp"
        class="subheading-image w-[352px] h-[421px] md:w-[342px] md:h-[453px] lg:w-[632px] lg:h-[716px]"
      />

      <span class="subheading display-2 text-center relative -top-[.8em] md:text-left md:absolute md:top-[20vh] lg:top-[26.66vh] md:self-start w-[318px] md:w-[456px] lg:w-[812px]">
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

/**
 * ----------------------------------------
 * animation fade-in-top
 * ----------------------------------------
 */
 @-webkit-keyframes fade-in-top {
  0% {
    -webkit-transform: translateY(-50px);
            transform: translateY(-50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity: 1;
  }
}
@keyframes fade-in-top {
  0% {
    -webkit-transform: translateY(-50px);
            transform: translateY(-50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity: 1;
  }
}

.fade-in-top {
	-webkit-animation: fade-in-top 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
	        animation: fade-in-top 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
          animation-delay: 0.5s;
}/**
 * ----------------------------------------
 * animation fade-in-top
 * ----------------------------------------
 */
 @-webkit-keyframes fade-in-top {
  0% {
    -webkit-transform: translateY(-50px);
            transform: translateY(-50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity: 1;
  }
}
@keyframes fade-in-top {
  0% {
    -webkit-transform: translateY(-50px);
            transform: translateY(-50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity: 1;
  }
}

.fade-in-top {
	-webkit-animation: fade-in-top 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
	        animation: fade-in-top 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
          animation-delay: 0.7s;
}
</style>
