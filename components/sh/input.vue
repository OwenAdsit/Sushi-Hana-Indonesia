<script setup lang="ts">
const { placeholder, type = 'text' } = defineProps<{
  placeholder?: string
  type?: string
}>()

const model = defineModel<string>()
</script>

<template>
  <input
    v-model="model"
    :type="type"
    class="mt-0 bg-dark block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:outline-0 focus:border-primary py-3"
    :placeholder="placeholder"
  >
</template>
