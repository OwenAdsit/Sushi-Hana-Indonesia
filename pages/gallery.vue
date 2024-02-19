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
</script>

<template>
  <div class="wrapper bg-no-repeat" :style="herobg">
    <feature-gallery-hero />
    <feature-gallery-grid :images="images" @select-image="onSelect" />

    <feature-gallery-modal v-model="onModal" :images="images" :selected-img="selectedImg" @next="selectedImg = $event" />
  </div>
</template>

<style scoped>
.wrapper {
  background-size: 453px 853px;
  background-position-x: right;
  background-position-y: 147px;
}
</style>
