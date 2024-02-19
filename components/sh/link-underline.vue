<script setup lang="ts">
const s = defineSlots<{
  default?: () => any
}>()

const text = computed(() => {
  if (!s || !s.default)
    return ''
  return s.default()[0].children
})

const onHover = ref(false)

const base = 'text-13 font-bold underline underline-offset-8 cursor-pointer flex flex-col transition-all flex'
const hover = 'hover:text-primary'
</script>

<template>
  <nuxt-link :data-replace="text" :class="[base, hover]" @mouseenter="onHover = true" @mouseleave="onHover = false">
    <Transition name="slide-fade" mode="out-in">
      <span v-if="onHover">
        <slot />
      </span>
      <span v-else>
        {{ text }}
      </span>
    </Transition>
  </nuxt-link>
</template>

<style>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
