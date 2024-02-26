<script setup lang="ts">
import type { ContentGallery } from '~/types/content'

const { images } = defineProps<{
  images: ContentGallery['body'] | null
}>()

defineEmits<{
  (e: 'selectImage', i: number): void
}>()

onMounted(() => {
  const imgzoom2 = document.querySelectorAll('.gallery__item')

  imgzoom2.forEach((element) => {
    const contents = element.querySelectorAll('.gallery__image')

    useGsap.set(contents, { scale: 0 })

    useGsap.to(contents, {
      duration: 1.2,
      autoAlpha: 1,
      scale: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom-=100',
        end: 'bottom top+=100',
      },
    })
  })
})
</script>

<template>
  <div id="image-grid" class="container mx-auto">
    <div v-if="images" class="gallery__wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
      <div v-for="(image, i) in images" :key="image.name" class="gallery__item group overflow-hidden cursor-pointer relative" @click="$emit('selectImage', i)">
        <!-- format="webp"
        width="362px"
        height="533px" -->
        <img
          :src="image.image"
          class="gallery__image object-center object-cover w-full"
        >

        <div class="absolute bg-dark/30 top-0 left-0 py-11 px-7 box-border w-full h-0 group-hover:h-full opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div class="bg-dark w-full h-full flex justify-center items-center">
            <icon name="material-symbols:add-rounded" size="47px" class="scale-0 group-hover:scale-100 transition-all duration-300 delay-200" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
