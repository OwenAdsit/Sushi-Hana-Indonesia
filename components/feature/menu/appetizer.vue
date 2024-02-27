<template>
  <div class="w-full">
    <div class="display-4 font-bold flex flex-col w-full justify-center items-center">
      <span>THE APPETIZERS</span>
      <span>前菜</span>
    </div>

    <div class="container mx-auto mt-16 flex md:hidden flex-col items-start">
      <div class="menu__item-title flex flex-col gap-6 relative">
        <div class="flex flex-row gap-4">
          <span>1</span>

          <div class="flex flex-col gap-3">
            <span>CAWAN MUSHI SEAFOOD</span>
            <p class="leading-normal text-dark font-normal w-[177px]">
              Steamed Egg With Chicken, Shrimp, Salmon, And Narudo
            </p>
          </div>
        </div>

        <div class="flex flex-row gap-4">
          <span>2</span>

          <div class="flex flex-col gap-3">
            <span>CAWAN MUSHI</span>
            <p class="leading-normal text-dark font-normal w-[177px]">
              Steamed Egg With Chicken, And Shrimp
            </p>
          </div>
        </div>

        <div class="flex flex-row gap-4">
          <span>3</span>

          <div class="flex flex-col gap-3">
            <span>AGEDASHI TOFU</span>
            <p class="leading-normal text-dark font-normal w-[168px]">
              Fried Tofu With Nori Bonito With Special Sauce
            </p>
          </div>
        </div>

        <div class="flex flex-row gap-4">
          <span>4</span>

          <div class="flex flex-col gap-3">
            <span>CHA SOBA</span>
          </div>
        </div>

        <div class="flex flex-row gap-4">
          <span>5</span>

          <div class="flex flex-col gap-3">
            <span>CHARU SOBA</span>
          </div>
        </div>

        <div class="flex flex-row items-start gap-3 absolute top-28 -right-24">
          <span class="flex items-center justify-center w-7 h-7 rounded-full border border-primary text-primary font-bold mt-7">1</span>
          <nuxt-img src="/img/menu/appetizer-1@2x.png" format="webp" width="74px" height="78px" />
        </div>
      </div>

      <div class="flex flex-row gap-12 mt-6">
        <div class="flex flex-col justify-center items-center">
          <nuxt-img src="/img/menu/appetizer-3@2x.png" format="webp" width="113px" height="62px" />
          <span class="flex items-center justify-center w-7 h-7 rounded-full border border-primary text-primary font-bold mt-7">3</span>
        </div>

        <div class="menu__item-title flex flex-col gap-6">
          <div class="flex flex-row gap-4">
            <span>6</span>

            <div class="flex flex-col gap-3">
              <span>CALAMARI</span>
              <p class="leading-normal text-dark font-normal w-[153px]">
                Deep Fried Special Squid
              </p>
            </div>
          </div>

          <div class="flex flex-row gap-4">
            <span>7</span>

            <div class="flex flex-col gap-3">
              <span>EDAMAME</span>
              <p class="leading-normal text-dark font-normal w-[163px]">
                Steamed Whole Soy Beans
              </p>
            </div>
          </div>

          <div class="flex flex-row gap-4">
            <span>8</span>

            <div class="flex flex-col gap-3">
              <span>BAKED SALMON</span>
              <p class="leading-normal text-dark font-normal w-[127px]">
                Baked Fresh Salmon With Snow Crab
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="menu__item-title flex flex-col gap-6 mt-6 relative">
        <div class="flex flex-row gap-4">
          <span>9</span>

          <div class="flex flex-col gap-3">
            <span>TORI SEAFOOD</span>
            <p class="leading-normal text-dark font-normal w-[254px]">
              Grilled Salmon, Tuna, Squid, Shrimp, Served With Yakitori Sauce
            </p>
          </div>
        </div>

        <div class="flex flex-row gap-4">
          <span>10</span>

          <div class="flex flex-col gap-3">
            <span>YAKITORI</span>
            <p class="leading-normal text-dark font-normal w-[172px]">
              Grilled Chicken Skewered Served With Yakitori Sauce
            </p>
          </div>
        </div>

        <div class="flex flex-row gap-4">
          <span>11</span>

          <div class="flex flex-col gap-3">
            <span>MIXED TEMPURA</span>
            <p class="leading-normal text-dark font-normal w-52">
              2 Shrimps, 3 Vegetables
            </p>
          </div>
        </div>

        <div class="flex flex-row gap-4">
          <span>12</span>

          <div class="flex flex-col gap-3">
            <span>GYOZA / DUMPLING</span>
            <p class="leading-normal text-dark font-normal w-[254px]">
              Pan Fried Seafood Dumpling
            </p>
          </div>
        </div>

        <div class="flex flex-row items-start gap-2 absolute top-52 -right-14">
          <span class="flex items-center justify-center w-7 h-7 rounded-full border border-primary text-primary font-bold">12</span>
          <nuxt-img src="/img/menu/appetizer-12@2x.png" format="webp" width="113px" height="69px" />
        </div>
      </div>
    </div>

    <div class="container mx-auto mt-16 hidden md:flex flex-row justify-between lg:hidden ">
      <div class="menu__item-title flex flex-col gap-6 relative">
        <div class="ml-4 flex flex-row items-start gap-3">
          <span class="flex items-center justify-center w-7 h-7 rounded-full border border-primary text-primary font-bold mt-7">1</span>
          <nuxt-img src="/img/menu/appetizer-1@2x.png" format="webp" width="115px" height="121px" />
        </div>

        <div class="flex flex-row gap-4">
          <span>1</span>

          <div class="flex flex-col gap-3">
            <span>CAWAN MUSHI SEAFOOD</span>
            <p class="leading-normal text-dark font-normal w-[177px]">
              Steamed Egg With Chicken, Shrimp, Salmon, And Narudo
            </p>
          </div>
        </div>

        <div class="flex flex-row gap-4">
          <span>2</span>

          <div class="flex flex-col gap-3">
            <span>CAWAN MUSHI</span>
            <p class="leading-normal text-dark font-normal w-[177px]">
              Steamed Egg With Chicken, And Shrimp
            </p>
          </div>
        </div>

        <div class="flex flex-row gap-4">
          <span>3</span>

          <div class="flex flex-col gap-3">
            <span>AGEDASHI TOFU</span>
            <p class="leading-normal text-dark font-normal w-[168px]">
              Fried Tofu With Nori Bonito With Special Sauce
            </p>
          </div>
        </div>

        <div class="flex flex-row gap-4">
          <span>4</span>

          <div class="flex flex-col gap-3">
            <span>CHA SOBA</span>
          </div>
        </div>

        <div class="flex flex-row gap-4">
          <span>5</span>

          <div class="flex flex-col gap-3">
            <span>CHARU SOBA</span>
          </div>
        </div>

        <div class="flex flex-row gap-4">
          <span>6</span>

          <div class="flex flex-col gap-3">
            <span>CALAMARI</span>
            <p class="leading-normal text-dark font-normal w-[153px]">
              Deep Fried Special Squid
            </p>
          </div>
        </div>

        <div class="flex flex-row gap-4">
          <span>7</span>

          <div class="flex flex-col gap-3">
            <span>EDAMAME</span>
            <p class="leading-normal text-dark font-normal w-[163px]">
              Steamed Whole Soy Beans
            </p>
          </div>
        </div>
      </div>

      <div class="menu__item-title flex flex-col gap-6">
        <div class="flex flex-row gap-4">
          <span>8</span>

          <div class="flex flex-col gap-3">
            <span>BAKED SALMON</span>
            <p class="leading-normal text-dark font-normal w-52">
              Baked Fresh Salmon With Snow Crab
            </p>
          </div>
        </div>

        <div class="flex flex-row gap-4">
          <span>9</span>

          <div class="flex flex-col gap-3">
            <span>TORI SEAFOOD</span>
            <p class="leading-normal text-dark font-normal w-[295px]">
              Grilled Salmon, Tuna, Squid, Shrimp, Served With Yakitori Sauce
            </p>
          </div>
        </div>

        <div class="flex flex-row gap-4">
          <span>10</span>

          <div class="flex flex-col gap-3">
            <span>YAKITORI</span>
            <p class="leading-normal text-dark font-normal w-[240px]">
              Grilled Chicken Skewered Served With Yakitori Sauce
            </p>
          </div>
        </div>

        <div class="flex flex-row justify-start items-start mt-10">
          <nuxt-img src="/img/menu/appetizer-3@2x.png" format="webp" width="175px" height="95px" />
          <span class="flex items-center justify-center w-7 h-7 rounded-full border border-primary text-primary font-bold mt-7">3</span>
        </div>

        <div class="flex flex-row gap-4 mt-14">
          <span>11</span>

          <div class="flex flex-col gap-3">
            <span>MIXED TEMPURA</span>
            <p class="leading-normal text-dark font-normal w-52">
              2 Shrimps, 3 Vegetables
            </p>
          </div>
        </div>

        <div class="flex flex-row gap-4">
          <span>12</span>

          <div class="flex flex-col gap-3">
            <span>GYOZA / DUMPLING</span>
            <p class="leading-normal text-dark font-normal w-[254px]">
              Pan Fried Seafood Dumpling
            </p>
          </div>
        </div>

        <div class="flex flex-row items-start gap-2 mt-10">
          <span class="flex items-center justify-center w-7 h-7 rounded-full border border-primary text-primary font-bold">12</span>
          <nuxt-img src="/img/menu/appetizer-12@2x.png" format="webp" width="163px" height="100px" />
        </div>
      </div>
    </div>

    <!-- desktop display -->
    <div class="mt-16 hidden lg:flex flex-row items-center">
      <div class="flex flex-row items-start gap-7">
        <span class="flex items-center justify-center w-7 h-7 rounded-full border border-primary text-primary font-bold mt-7">1</span>
        <nuxt-img src="/img/menu/appetizer-1@2x.png" format="webp" width="152px" height="160px" />
      </div>

      <div class="ml-28 menu__item-title flex flex-col gap-6">
        <div class="flex flex-row gap-9">
          <span>1</span>

          <div class="flex flex-col gap-3">
            <span>CAWAN MUSHI SEAFOOD</span>
            <p class="leading-normal text-dark font-normal w-52">
              Steamed Egg With Chicken, Shrimp, Salmon, And Narudo
            </p>
          </div>
        </div>

        <div class="flex flex-row gap-9">
          <span>2</span>

          <div class="flex flex-col gap-3">
            <span>CAWAN MUSHI</span>
            <p class="leading-normal text-dark font-normal w-52">
              Steamed Egg With Chicken, And Shrimp
            </p>
          </div>
        </div>
      </div>

      <div class="ml-36 menu__item-title flex flex-col gap-6">
        <div class="flex flex-row gap-9">
          <span>3</span>

          <div class="flex flex-col gap-3">
            <span>AGEDASHI TOFU</span>
            <p class="leading-normal text-dark font-normal w-52">
              Fried Tofu With Nori Bonito With Special Sauce
            </p>
          </div>
        </div>

        <div class="flex flex-row gap-9">
          <span>4</span>

          <div class="flex flex-col gap-3">
            <span>CHA SOBA</span>
          </div>
        </div>

        <div class="flex flex-row gap-9">
          <span>5</span>

          <div class="flex flex-col gap-3">
            <span>CHARU SOBA</span>
          </div>
        </div>
      </div>

      <div class="flex flex-col justify-center items-center mt-14 ml-14">
        <nuxt-img src="/img/menu/appetizer-3@2x.png" format="webp" width="216px" height="118px" />
        <span class="flex items-center justify-center w-7 h-7 rounded-full border border-primary text-primary font-bold mt-7">3</span>
      </div>
    </div>

    <div class="mt-16 hidden lg:flex flex-row items-center">
      <div class="ml-11 menu__item-title flex flex-col gap-6">
        <div class="flex flex-row gap-9">
          <span>6</span>

          <div class="flex flex-col gap-3">
            <span>CALAMARI</span>
            <p class="leading-normal text-dark font-normal w-52">
              Deep Fried Special Squid
            </p>
          </div>
        </div>

        <div class="flex flex-row gap-9">
          <span>7</span>

          <div class="flex flex-col gap-3">
            <span>EDAMAME</span>
            <p class="leading-normal text-dark font-normal w-52">
              Steamed Whole Soy Beans
            </p>
          </div>
        </div>

        <div class="flex flex-row gap-9">
          <span>8</span>

          <div class="flex flex-col gap-3">
            <span>BAKED SALMON</span>
            <p class="leading-normal text-dark font-normal w-[148px]">
              Baked Fresh Salmon With Snow Crab
            </p>
          </div>
        </div>
      </div>

      <div class="ml-[138px] menu__item-title flex flex-col gap-6">
        <div class="flex flex-row gap-9">
          <span>9</span>

          <div class="flex flex-col gap-3">
            <span>TORI SEAFOOD</span>
            <p class="leading-normal text-dark font-normal w-[254px]">
              Grilled Salmon, Tuna, Squid, Shrimp, Served With Yakitori Sauce
            </p>
          </div>
        </div>

        <div class="flex flex-row gap-9">
          <span>10</span>

          <div class="flex flex-col gap-3">
            <span>YAKITORI</span>
            <p class="leading-normal text-dark font-normal w-52">
              Grilled Chicken Skewered Served With Yakitori Sauce
            </p>
          </div>
        </div>

        <div class="flex flex-row gap-9">
          <span>11</span>

          <div class="flex flex-col gap-3">
            <span>MIXED TEMPURA</span>
            <p class="leading-normal text-dark font-normal w-52">
              2 Shrimps, 3 Vegetables
            </p>
          </div>
        </div>
      </div>

      <div class="self-stretch w-full ml-[138px] menu__item-title flex flex-col justify-between pr-12">
        <div class="flex flex-row gap-9">
          <span>12</span>

          <div class="flex flex-col gap-3">
            <span>GYOZA / DUMPLING</span>
            <p class="leading-normal text-dark font-normal w-[254px]">
              Pan Fried Seafood Dumpling
            </p>
          </div>
        </div>

        <div class="flex flex-row items-start gap-7 self-end">
          <span class="flex items-center justify-center w-7 h-7 rounded-full border border-primary text-primary font-bold">12</span>
          <nuxt-img src="/img/menu/appetizer-12@2x.png" format="webp" width="224px" height="138px" />
        </div>
      </div>
    </div>
  </div>
</template>
