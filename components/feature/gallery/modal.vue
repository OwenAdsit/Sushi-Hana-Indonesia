<script setup lang="ts">
import type { ContentGallery } from '~/types/content'

const { images, selectedImg } = defineProps<{
  images: ContentGallery['body'] | null
  selectedImg: number | null
}>()

const emit = defineEmits(['next'])

const pickThree = computed(() => {
  if (selectedImg !== null && images)
    return [images[(selectedImg - 1 + images.length) % images.length], images[selectedImg], images[(selectedImg + 1) % images.length]]
  return []
})

function onNext() {
  // add animation that make pickthree[1] slide over to left and pickthree[2] slide over to left become active
  emit('next', (selectedImg! + 1) % images!.length)
  // useGsap.from('.box:nth-of-type(2)', { x: 500, scale: 1, duration: 0.5 })
  // useGsap.from('.box:nth-of-type(3)', { x: 500, duration: 0.5, scale: 1 })
}

function onComponentLeave(el: Element, done: () => void) {
  const w = Number(useGsap.getProperty(el, 'width'))
  useGsap.to(el, { x: -w, scale: 0.5, duration: 1, onComplete: done })
}

function onComponentEnter(el: Element, done: () => void) {
  const w = useGsap.getProperty('.box:nth-of-type(3)', 'x')
  useGsap.to(el, { x: 300, scale: 1, duration: 1, onComplete: done })
  // const x = useGsap.getProperty('.box:nth-of-type(1)', 'x')
  useGsap.to('.box:nth-of-type(2)', { x: -400, scale: 1, duration: 1 })
}
</script>

<template>
  <div class="absolute top-0 left-0 w-screen h-screen bg-dark/95 z-[1000] overflow-hidden">
    <div class="carousel-viewport w-full h-screen flex flex-row items-center justify-between">
      <transition-group :css="false" @leave="onComponentLeave" @enter="onComponentEnter">
        <div v-for="(image, i) in pickThree" :key="image.name" class="box shrink-0" :class="{ active: i === 1 }">
          <img :src="image.image || ''" class="object-scale-down">
        </div>
      </transition-group>
    </div>

    <div class="absolute top-0 right-0" @click="onNext">
      <button>
        Next {{ (selectedImg! + 1) % images!.length }} {{ selectedImg }}
      </button>
    </div>
  </div>
</template>

<style>
/* .carousel-viewport {
  transform: translateX(-150px);
} */

.box {
  height: 40vh;
  overflow: hidden;
  aspect-ratio: 9/16;
  /* transition: all 0.5s ease; */
}

/* .active {
  view-transition-name: active;
  transition-duration: 500ms;
} */

.box:nth-of-type(2) {
  transform: scale(2.2);
}
</style>
