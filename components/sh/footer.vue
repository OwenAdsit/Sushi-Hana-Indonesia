<script setup lang="ts">
const MENU = ['HOME', 'CONTACT US', 'MENU', 'GET DIRECTIONS', 'GALLERY']

const footerLink = computed(() => {
  // if (breakpoints.smaller('md').value)
  //   return ['© 2022 Sushi Hana Indonesia', 'Privacy Policy', `T&C'S`]
  return ['© 2022 Sushi Hana Indonesia', 'Privacy Policy', 'Terms & Conditions']
})
</script>

<template>
  <div class="order-2 container p-0 mx-auto pt-14 md:pt-[70px] pb-6">
    <div class="flex justify-center">
      <sh-link-underline>
        ORDER ONLINE
      </sh-link-underline>
    </div>

    <div class="hidden md:grid grid-cols-4 mt-20 mb-28 gap-y-14">
      <div class="row-span-2 flex flex-col justify-center items-center gap-3.5">
        Follow us

        <div class="flex flex-row gap-3">
          <icon name="mdi:instagram" size="19px" />
          <icon name="mdi:facebook" size="19px" />
        </div>
      </div>

      <div class="w-[178px] flex flex-col">
        <h4 class="font-bold">
          Sushi Hana
        </h4>
        <span>Jl. Adityawarman No.64, Darmo, Kec. Wonokromo, Kota SBY, Jawa Timur <br> 60241</span>
      </div>

      <div class="flex justify-end">
        <div class="grid grid-cols-2 gap-y-6">
          <sh-link-underline v-for="menu in MENU" :key="menu" class="basis-1/2">
            {{ menu }}
          </sh-link-underline>
        </div>
      </div>

      <div class="row-span-2 self-center flex justify-center">
        <nuxt-img src="/img/sushi-hana-logo.svg" format="webp" width="93px" height="95px" />
      </div>

      <div>
        <h4 class="font-bold">
          Opening Times
        </h4>
        <div class="flex flex-col">
          <div class="flex flex-row gap-5">
            <span>Tuesday - Sunday</span>
            <span>11:30am - 8pm</span>
          </div>
          <div class="flex flex-row gap-5">
            <span>Monday</span>
            <span>Closed</span>
          </div>
        </div>
      </div>
    </div>
    <div class="flex md:hidden flex-col justify-center items-center gap-3.5 mt-20 mb-28">
      <div class="row-span-2 self-center flex justify-center">
        <nuxt-img src="/img/sushi-hana-logo.svg" format="webp" width="93px" height="95px" />
      </div>

      <div class="w-[178px] flex flex-col text-center mt-14">
        <h4 class="font-bold">
          Sushi Hana
        </h4>
        <span>Jl. Adityawarman No.64, Darmo, Kec. Wonokromo, Kota SBY, Jawa Timur <br> 60241</span>
      </div>

      <sh-link-underline class="mt-5">
        Get Directions
      </sh-link-underline>
    </div>

    <div class="flex flex-col md:flex-row items-center justify-between text-10">
      <div class="flex flex-row divide-x">
        <span v-for="link in footerLink" :key="link" class="px-3 md:px-9">
          {{ link }}
        </span>
      </div>
      <span class="px-3">
        Website by Two Moons Studio
      </span>
    </div>
  </div>
</template>
