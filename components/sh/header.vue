<script setup lang="ts">
const { $gsap } = useNuxtApp()

interface Menu { label: string, link: string }

const getMenu = () => queryContent('/config/menu').find()
const { data } = await useAsyncData('menu', getMenu, { transform: v => v[0].body as unknown as Menu[] })

onMounted(() => {
  $gsap.fromTo('.navigation', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 })
})
</script>
<template>
  <!-- header belum sesuai dengan desain XD -->
  <div class="navigation fixed w-screen z-[900] pt-5">
    <div class="container mx-auto p-0 flex flex-row justify-between">
      <nuxt-img src="/img/sushi-hana-logo.svg" width="93px" height="95px" format="webp" />

      <nav class="pt-5">
        <!-- Kalau ada class spacing tailwind yang cukup dekat, boleh dipakai, Dari pada bikin class arbitrary baru -->
        <ul class="flex flex-row gap-16">
          <sh-link v-for="menu in data" :key="menu.label">
            {{ menu.label }}
          </sh-link>
        </ul>
      </nav>
    
      <nuxt-link class="text-13 font-bold underline underline-offset-8 pt-5">
        ORDER ONLINE
      </nuxt-link>
    </div>
  </div>
</template>
