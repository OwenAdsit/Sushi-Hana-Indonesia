<script setup lang="ts">
useHead({
  title: 'Sushi Hana Indonesia',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'Sushi Hana Indonesia',
    },
  ],
})
</script>

<template>
  <div>
    <NuxtLayout name="default">
      <div id="homepage">
        <feature-hero />
        <feature-menu />
      </div>
    </NuxtLayout>
  </div>
</template>
