<script setup lang="ts">
const base = 'hs-link text-[13px] font-bold cursor-pointer transition-all'
const underline = 'after:block after:border-b after:border-primary after:scale-x-0 after:transition-transform after:ease-in-out'
const textHover = 'hover:text-primary'
const underlineHover = 'hover:after:scale-x-100 after:origin-left'
</script>

<template>
  <nuxt-link :class="[base, underline, textHover, underlineHover]">
    <slot />
  </nuxt-link>
</template>
