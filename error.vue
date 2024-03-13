<script setup lang="ts">
import type { NuxtError } from '#app'

const { error } = defineProps({
  error: Object as () => NuxtError,
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div>
    <nuxt-layout name="default">
      <div class="h-screen flex flex-col justify-center items-center gap-4">
        <h2 class="text-8xl font-bold">
          {{ error?.statusCode || 404 }}
        </h2>
        <span class="font-medium">Sorry, we couldn’t find the page you’re looking for.</span>
        <sh-link @click="handleError">
          Back to Home
        </sh-link>
      </div>
    </nuxt-layout>
  </div>
</template>
