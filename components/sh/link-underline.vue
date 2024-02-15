<script setup lang="ts">
const s = defineSlots<{
  default?: () => any
}>()

const text = computed(() => {
  if (!s || !s.default)
    return ''
  return s.default()[0].children
})

const base = 'text-[13px] font-bold underline underline-offset-8 cursor-pointer flex flex-col'
</script>

<template>
  <nuxt-link :data-replace="text" :class="[base]">
    <span>
      <slot />
    </span>
  </nuxt-link>
</template>
