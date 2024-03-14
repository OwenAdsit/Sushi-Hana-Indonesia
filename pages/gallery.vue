<script setup lang="ts">
import type { ContentGallery } from '~/types/content'

const img = useImage()

const herobg = computed(() => {
  const bg = img('/img/bg-image.svg', { format: 'webp', width: 453, height: 853, opacity: 0.04 })
  return { backgroundImage: `url('${bg}')` }
})

const selectedImg = ref<number | null>(0)
const onModal = ref(false)

const getGallery = () => queryContent('/feature/gallery').find()
const { data: images } = await useAsyncData('hero', getGallery, { transform: v => v[0].body as unknown as ContentGallery['body'] })

function onSelect(idx: number) {
  selectedImg.value = idx
  onModal.value = true
}

useHead({
  title: 'Gallery',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'Sushi Hana Indonesia Gallery',
    },
  ],
})
</script>

<template>
  <div>
    <NuxtLayout name="default">
      <div class="wrapper bg-no-repeat" :style="herobg">
        <feature-gallery-hero />
        <feature-gallery-grid :images="images" @select-image="onSelect" />

        <feature-gallery-modal v-model="onModal" :images="images" :selected-img="selectedImg" @next="selectedImg = $event" />

        <div class="container mx-auto p-0">
          <svg width="100%" height="60" viewBox="0 0 100 20" preserveAspectRatio="none" class="my-24">
            <line x1="0" y1="10" x2="100" y2="10" stroke="dimgray" stroke-width=".5" stroke-dasharray="1.5 , 1" />
          </svg>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<style scoped>
.wrapper {
  background-size: 453px 853px;
  background-position-x: right;
  background-position-y: 147px;
}
</style>
