<script setup lang="ts">
import type { ContentGallery } from '~/types/content'

const { images } = defineProps<{
  images: ContentGallery['body'] | null
}>()
</script>

<template>
  <div id="image-grid" class="container mx-auto">
    <div v-if="images" class="grid grid-cols-3 gap-16">
      <div v-for="image in images" :key="image.name" class="group overflow-hidden cursor-pointer relative">
        <!-- format="webp"
        width="362px"
        height="533px" -->
        <img
          :src="image.image"
          class="object-center object-cover w-[362px]"
        >

        <div class="absolute bg-dark/30 top-0 left-0 py-11 px-7 w-full h-0 group-hover:h-full opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div class="bg-dark w-full h-full flex justify-center items-center">
            <icon name="material-symbols:add-rounded" size="47px" class="scale-0 group-hover:scale-100 transition-all duration-300 delay-200" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
