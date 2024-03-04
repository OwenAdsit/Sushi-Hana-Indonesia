<template>
  <div class="mt-16 px-3 hidden lg:grid grid-cols-3 items-start gap-y-20">
    <div class="text-primary text-16 font-bold flex flex-col gap-6">
      <div class="flex flex-row gap-9">
        <span>1</span>

        <div class="flex flex-col gap-3">
          <span>GARDEN SALAD</span>
        </div>
      </div>

      <div class="flex flex-row gap-9">
        <span>2</span>

        <div class="flex flex-col gap-3">
          <span>CHICKEN SALAD</span>
        </div>
      </div>

      <div class="flex flex-row items-start gap-7 self-end">
        <nuxt-img src="/img/menu/soup-2@2x.png" format="webp" width="231px" height="110px" />
        <span class="flex items-center justify-center w-7 h-7 rounded-full border border-primary text-primary font-bold mt-7">2</span>
      </div>
    </div>

    <div class="text-primary text-16 font-bold flex flex-col gap-6">
      <div class="flex flex-row gap-9 self-end">
        <span>5</span>

        <div class="flex flex-col gap-3">
          <span>SALMON SKIN SALAD</span>
          <p class="text-13 leading-[20px] text-dark font-normal w-56">
            Deep Fried Crispy Salmon Skin And Vegetables With Eel Sauce
          </p>
        </div>
      </div>

      <div class="flex flex-row gap-9 self-end">
        <span>6</span>

        <div class="flex flex-col gap-3">
          <span>MIXED CHUKA SALAD</span>
          <p class="text-13 leading-[20px] text-dark font-normal w-56">
            Combination 4 Salad, Chuka Hotate, Chuka Idako, Chuka Wakame And Chuka Kurage
          </p>
        </div>
      </div>
    </div>

    <div class="flex flex-row justify-center self-center gap-7 col-start-3 row-start-1 row-span-2">
      <nuxt-img src="/img/menu/soup-6@2x.png" format="webp" width="287px" height="237px" />
    </div>

    <div class="text-primary text-16 font-bold flex flex-col gap-6">
      <div class="flex flex-row gap-9">
        <span>3</span>

        <div class="flex flex-col gap-3">
          <span class="text-nowrap">SHRIMP AND MUSHROOM SOUP</span>
          <p class="text-13 leading-[20px] text-dark font-normal w-52">
            Shrimp Soup With Mushrooms And Vegetables
          </p>
        </div>
      </div>

      <div class="flex flex-row gap-9">
        <span>4</span>

        <div class="flex flex-col gap-3">
          <span>CRAB STICK SALAD</span>
          <p class="text-13 leading-[20px] text-dark font-normal w-52">
            Crab Sticks And Vegetables With Japanese Mayonnaise
          </p>
        </div>
      </div>
    </div>

    <div class="flex flex-col items-start">
      <nuxt-img src="/img/menu/soup-4@2x.png" format="webp" width="339px" height="132px" />
      <span class="flex items-center justify-center w-7 h-7 rounded-full border border-primary text-primary font-bold">4</span>
    </div>
  </div>
</template>
