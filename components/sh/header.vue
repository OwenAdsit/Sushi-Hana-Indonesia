<script setup lang="ts">
interface Menu { label: string, link: string }

const getMenu = () => queryContent('/config/menu').find()
const { data } = await useAsyncData('menu', getMenu, { transform: v => v[0].body as unknown as Menu[] })

const isScrolled = ref(false)

const logoSize = computed(() => {
  return {
    width: isScrolled.value ? '51px' : '93px',
    height: isScrolled.value ? '52px' : '95px',
  }
})

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeMount(() => {
  window.removeEventListener('scroll', handleScroll)
})

function handleScroll() {
  isScrolled.value = window.scrollY > 50
}

const onModal = ref(false)
</script>

<template>
  <!-- header belum sesuai dengan desain XD -->
  <div class="navigation fixed w-screen z-[900] fade-in-bottom transition-all duration-500" :class="{ 'bg-dark': isScrolled, 'pt-5': !isScrolled, 'py-0': isScrolled }">
    <div class="container mx-auto flex flex-row justify-between transition-all duration-500" :class="[isScrolled ? 'p-5 lg:p-3' : 'p-5 lg:p-0']">
      <nuxt-img src="/img/sushi-hana-logo.svg" :width="logoSize.width" :height="logoSize.height" format="webp" class="transition-all duration-500" />

      <nav class="hidden lg:block pt-5">
        <!-- Kalau ada class spacing tailwind yang cukup dekat, boleh dipakai, Dari pada bikin class arbitrary baru -->
        <ul class="flex flex-row gap-16">
          <sh-link v-for="menu in data" :key="menu.label" :to="menu.link">
            {{ menu.label }}
          </sh-link>
        </ul>
      </nav>

      <sh-link-underline class="hidden lg:block md:self-center md:p-0 lg:self-start lg:pt-5" to="/order">
        ORDER ONLINE
      </sh-link-underline>

      <div class="block lg:hidden self-center flex flex-row gap-14">
        <sh-link-underline class="hidden md:block md:self-center md:p-0 lg:self-start lg:pt-5" to="/order">
          ORDER ONLINE
        </sh-link-underline>
        <sh-burger v-model="onModal" />
      </div>
    </div>

    <sh-menu-modal v-model="onModal" :data="data" @close="onModal = false" />
  </div>
</template>
