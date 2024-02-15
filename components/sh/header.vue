<script setup lang="ts">
const { $gsap } = useNuxtApp()

interface Menu { label: string, link: string }

const getMenu = () => queryContent('/config/menu').find()
const { data } = await useAsyncData('menu', getMenu, { transform: v => v[0].body as unknown as Menu[] })

onMounted(() => {
  $gsap.fromTo('.navigation', { opacity: 0, y: 0 }, { opacity: 1, y: 50, duration: 1 })
})
</script>

<template>
  <div class="navigation fixed w-screen z-[900] pt-11">
    <div class="container mx-auto p-0 flex flex-row justify-between">
      <nuxt-img src="/img/sushi-hana-logo.svg" width="93px" height="95px" format="webp" />

      <nav>
        <ul class="flex flex-row gap-[67px]">
          <sh-link v-for="menu in data" :key="menu.label">
            {{ menu.label }}
          </sh-link>
        </ul>
      </nav>

      <nuxt-link class="text-[13px] font-bold underline underline-offset-8">
        ORDER ONLINE
      </nuxt-link>
    </div>
  </div>
</template>
