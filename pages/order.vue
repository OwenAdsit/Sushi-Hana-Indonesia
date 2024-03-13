<script setup lang="ts">
definePageMeta({
  layout: 'fullpage',
})
</script>

<template>
  <div>
    <NuxtLayout name="fullpage">
      <div class="h-screen container mx-auto flex flex-col justify-between items-center py-40">
        <nuxt-img src="/img/sushi-hana-logo.png" format="webp" width="93px" height="95px" class="fade-in-bottom" />

        <h1 class="display-2">
          Order Online
        </h1>

        <div class="flex flex-row flex-wrap gap-x-20 gap-y-10 justify-center">
          <sh-button>
            GOJEK
          </sh-button>
          <sh-button>GRAB</sh-button>
          <sh-button>SHOPEE</sh-button>
        </div>

        <div class="flex flex-row gap-x-10">
          <sh-link-underline to="/" prefetch>
            Back to Home
          </sh-link-underline>

          <sh-link-underline to="/contact" prefetch>
            Contact Us
          </sh-link-underline>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>
