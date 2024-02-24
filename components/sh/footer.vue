<script setup lang="ts">
const MENU = ['HOME', 'CONTACT US', 'MENU', 'GET DIRECTIONS', 'GALLERY']
</script>

<template>
  <div class="container p-0 mx-auto pt-[70px] pb-6">
    <div class="flex justify-center">
      <sh-link-underline>
        ORDER ONLINE
      </sh-link-underline>
    </div>

    <div class="grid grid-cols-4 mt-20 mb-28 gap-y-14">
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

    <div class="flex flex-row justify-between text-10">
      <div class="flex flex-row divide-x">
        <span class="px-9">
          © 2022 Sushi Hana Indonesia
        </span>
        <span class="px-9">
          Privacy Policy
        </span>
        <span class="px-9">
          Terms & Conditions
        </span>
      </div>
      <span>
        Website by Two Moons Studio
      </span>
    </div>
  </div>
</template>
