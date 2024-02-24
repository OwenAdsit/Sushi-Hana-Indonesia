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

const base = 'group text-13 font-bold cursor-pointer flex flex-col transition-all duration-300 flex relative w-fit'
const underline = 'after:block after:border-b after:border-light after:transition-transform after:ease-in-out after:duration-300 hover:after:border-primary'
</script>

<template>
  <nuxt-link :class="[base, underline]" @mouseenter="onHover = true" @mouseleave="onHover = false">
    <div class="flex flex-col h-[22px] transition-all overflow-hidden">
      <span class="transition-all duration-300 group-hover:translate-y-[-20px]">
        <slot />
      </span>
      <span class="transition-all duration-300 group-hover:translate-y-[-20px] text-primary">
        {{ text }}
      </span>
    </div>
  </nuxt-link>
</template>
