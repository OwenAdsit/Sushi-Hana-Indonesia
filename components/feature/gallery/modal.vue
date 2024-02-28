<script setup lang="ts">
import type { VNodeRef } from 'vue'
import type { ContentGallery } from '~/types/content'

const { images, selectedImg } = defineProps<{
  images: ContentGallery['body'] | null
  selectedImg: number | null
}>()

const emit = defineEmits(['update:modelValue'])

const model = defineModel<boolean>()

const carousel = ref<VNodeRef | null>(null)

const activeRef = ref<any>(null)
// onClickOutside(activeRef, () => { emit('update:modelValue', false) })
function closeCarousel() {
  emit('update:modelValue', false)
}

function onAppear() {
  document.body.classList.add('overflow-hidden')
  carousel.value.slideTo(selectedImg)
}

function onLeave() {
  document.body.classList.remove('overflow-hidden')
}
</script>

<template>
  <Transition name="slide-fade" @enter="onAppear" @leave="onLeave">
    <div v-if="model" class="fixed top-0 left-0 w-screen h-screen bg-dark/95 z-[1000] flex items-center justify-between">
      <div class="carousel-viewport w-full h-full py-10 overflow-hidden" @click="closeCarousel">
        <sh-carousel ref="carousel" :items-to-show="2.5" :wrap-around="true">
          <sh-slide v-for="(img, i) in images" :key="img.name" :ref="(e) => { carousel?.data?.currentSlide.value === (e as any)?.index && (activeRef = e) }">
            <div class="carousel__item text-light transition-all duration-500 w-full h-full relative">
              <img :src="img.image || ''" class="transition-all duration-500 w-full h-full object-contain" :class="[i === carousel?.data?.currentSlide.value ? 'item--active' : 'item--inactive cursor-pointer']" @click.stop="carousel?.slideTo(i)">
              <span v-if="carousel" class="item-description absolute top-[52px] -right-[123px] transition-all duration-500">
                {{ carousel.data?.currentSlide.value + 1 }} / {{ carousel.data?.slidesCount.value }}
              </span>

              <div class="item-nav-next absolute bottom-[40px] -right-[20px] cursor-pointer z-[1005] p-4 transition-all duration-500 origin-left hover:scale-x-125" @click.stop="carousel?.next()">
                <nuxt-img src="/icon/arrow-right.png" format="webp" width="32px" height="12px" class="" />
              </div>
              <div v-if="i !== 0" class="item-nav-prev absolute bottom-[40px] -scale-x-100 left-[42px] cursor-pointer z-[1005] p-4 transition-all duration-500 origin-left hover:-scale-x-125" @click.stop="carousel?.prev()">
                <nuxt-img src="/icon/arrow-right.png" format="webp" width="32px" height="12px" class="" />
              </div>
            </div>
          </sh-slide>
        </sh-carousel>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.carousel {
  height: 100%;
}

:deep(.carousel__viewport), :deep(.carousel__track) {
  height: 100%;
}

.item--inactive {
  transform: scale(0.5);
  opacity: 0.3;
}

.item-description::before {
  content: '';
  width: 100px;
  height: 1px;
  background-color: white;
  position: absolute;
  left: -120px;
  top: 10px
}

.item--inactive+.item-description, .item--inactive ~ .item-nav-next, .item--inactive ~ .item-nav-prev{
  opacity: 0;
  scale: 0;
}
</style>
