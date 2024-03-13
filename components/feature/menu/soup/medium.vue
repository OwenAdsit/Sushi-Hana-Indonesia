<template>
  <div class="container mx-auto mt-16 text-primary text-16 font-bold md:flex hidden lg:hidden flex-col gap-6">
    <div class="flex flex-row">
      <div class="flex flex-col gap-6 basis-1/2">
        <div class="flex flex-row gap-9">
          <span>1</span>

          <div class="flex flex-col gap-1">
            <span class="text-nowrap">GARDEN SALAD</span>
          </div>
        </div>

        <div class="flex flex-row gap-9">
          <span>2</span>

          <div class="flex flex-col gap-1">
            <span class="text-nowrap">CHICKEN SALAD</span>
          </div>
        </div>

        <div class="flex flex-row gap-9">
          <span>3</span>

          <div class="flex flex-col gap-1">
            <span class="text-nowrap">SHRIMP AND MUSHROOM SOUP</span>
            <p class="text-12 leading-[20px] text-dark font-normal w-[208px]">
              Shrimp Soup With Mushrooms And Vegatables
            </p>
          </div>
        </div>
      </div>

      <div class="basis-1/2 flex justify-center items-start">
        <div class="flex flex-row items-end">
          <nuxt-img src="/img/menu/soup-2@2x.png" format="webp" width="185px" height="88px" />
          <span class="flex items-center justify-center w-7 h-7 rounded-full border border-primary text-primary font-bold -ml-2">2</span>
        </div>
      </div>
    </div>

    <div class="flex flex-row">
      <div class="grow flex justify-center items-start">
        <div class="flex flex-col items-center">
          <nuxt-img src="/img/menu/soup-4@2x.png" format="webp" width="264px" height="103px" />
          <span class="flex items-center justify-center w-7 h-7 rounded-full border border-primary text-primary font-bold">4</span>
        </div>
      </div>

      <div class="flex flex-col gap-6">
        <div class="flex flex-row gap-9">
          <span>4</span>

          <div class="flex flex-col gap-1">
            <span class="text-nowrap">CRAB STICK SALAD</span>
            <p class="text-12 leading-[20px] text-dark font-normal w-[193px]">
              Crab Sticks And Vegetables With Japanese Mayonnaise
            </p>
          </div>
        </div>

        <div class="flex flex-row gap-9">
          <span>5</span>

          <div class="flex flex-col gap-1">
            <span class="text-nowrap">SALMON SKIN SALAD</span>
            <p class="text-12 leading-[20px] text-dark font-normal w-[212px]">
              Deep Fried Crispy Salmon Skin And Vegetables With Eel Sauce
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-row">
      <div class="flex flex-col gap-6">
        <div class="flex flex-row gap-9">
          <span>6</span>

          <div class="flex flex-col gap-1">
            <span>MIXED CHUKA SALAD</span>
            <p class="text-13 leading-[20px] text-dark font-normal w-[204px]">
              Combination 4 Salad, Chuka Hotate, Chuka Idako, Chuka Wakame And Chuka Kurage
            </p>
          </div>
        </div>
      </div>

      <div class="grow flex justify-center items-start">
        <div class="flex flex-col items-center">
          <nuxt-img src="/img/menu/soup-6@2x.png" format="webp" width="218px" height="180px" />
        </div>
      </div>
    </div>
  </div>
</template>
