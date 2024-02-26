<template>
  <div class="flex flex-col w-full">
    <div class="text-[30px] font-bold flex flex-col w-full justify-center items-center">
      <span>THE RAMEN & UDON</span>
      <span>ラーメンとうどん</span>
    </div>

    <div class="mt-16 flex flex-row justify-between">
      <div class="flex flex-row gap-14 items-start">
        <div>
          <span class="text-16 font-bold">SHOYU RAMEN</span>
          <span class="text-14 font-bold ml-4">醤油ラーメン</span>
          <p class="text-13 w-[328px] mt-2">
            Shoyu Ramen Is A Ramen Noodle Dish Flavored With Shoyu, The Japanese Word For Soy Sauce.
          </p>

          <div class="text-primary text-16 font-bold flex flex-col gap-6 mt-4">
            <div class="flex flex-row gap-9">
              <span>1</span>

              <div class="flex flex-col gap-3">
                <span>SHOYU RAMEN BEEF</span>
              </div>
            </div>

            <div class="flex flex-row gap-9">
              <span>2</span>

              <div class="flex flex-col gap-3">
                <span>SHOYU RAMEN GRILLED CHICKEN</span>
              </div>
            </div>

            <div class="flex flex-row gap-9">
              <span>3</span>

              <div class="flex flex-col gap-3">
                <span>SHOYU RAMEN CHICKEN KARAAGE</span>
              </div>
            </div>

            <div class="flex flex-row gap-9">
              <span>4</span>

              <div class="flex flex-col gap-3">
                <span>SHOYU RAMEN CHICKEN KATSU</span>
              </div>
            </div>

            <div class="flex flex-row gap-9">
              <span>5</span>

              <div class="flex flex-col gap-3">
                <span>SHOYU RAMEN SEAFOOD</span>
              </div>
            </div>
          </div>
        </div>

        <div class="relative">
          <nuxt-img src="/img/menu/ramen-1@2x.png" width="177px" height="140px" />
          <span class="absolute bottom-0 right-0 flex items-center justify-center w-7 h-7 rounded-full border border-primary text-primary font-bold mt-7">1</span>
        </div>
      </div>

      <div class="flex flex-row items-end">
        <div>
          <span class="text-16 font-bold">MISO RAMEN</span>
          <span class="text-14 font-bold ml-4">味噌ラーメン</span>
          <p class="text-13 w-[456px] mt-2">
            Miso Ramen Soup Is Flavored With Soybean Paste (Miso), Resulting In A Thick, Brown Soup With A Rich, Complex Flavor.
          </p>

          <div class="text-primary text-16 font-bold flex flex-col gap-6 mt-4">
            <div class="flex flex-row gap-9">
              <span>6</span>

              <div class="flex flex-col gap-3">
                <span>MISO RAMEN BEEF</span>
              </div>
            </div>

            <div class="flex flex-row gap-9">
              <span>7</span>

              <div class="flex flex-col gap-3">
                <span>MISO RAMEN GRILLED CHICKEN</span>
              </div>
            </div>

            <div class="flex flex-row gap-9">
              <span>8</span>

              <div class="flex flex-col gap-3">
                <span>MISO RAMEN CHICKEN KARAAGE</span>
              </div>
            </div>

            <div class="flex flex-row gap-9">
              <span>9</span>

              <div class="flex flex-col gap-3">
                <span>MISO RAMEN CHICKEN KATSU</span>
              </div>
            </div>

            <div class="flex flex-row gap-9">
              <span>10</span>

              <div class="flex flex-col gap-3">
                <span>MISO RAMEN SEAFOOD</span>
              </div>
            </div>
          </div>
        </div>

        <div class="relative -ml-24">
          <span class="absolute -top-14 right-0 flex items-center justify-center w-7 h-7 rounded-full border border-primary text-primary font-bold mt-7">7</span>
          <nuxt-img src="/img/menu/ramen-7@2x.png" width="177px" height="140px" />
        </div>
      </div>
    </div>

    <div class="block mt-12">
      <div>
        <span class="text-16 font-bold">UDON</span>
        <span class="text-14 font-bold ml-4">うどん</span>
        <p class="text-13 mt-2">
          Udon Is A Thick Noodle Made From Wheat Flour, Used In Japanese Cuisine.
        </p>

        <div class="flex w-full flex-row justify-between">
          <div class="flex flex-row">
            <div class="text-primary text-16 font-bold flex flex-col gap-6 mt-4">
              <div class="flex flex-row gap-9">
                <span>11</span>

                <div class="flex flex-col gap-3">
                  <span>SEAFOOD UDON</span>
                  <p class="text-13 leading-[20px] text-dark font-normal w-[313px]">
                    Fried Udon With Scallop, Crab, Stick, Shrimp, Batik, Clam With Fresh Vegetables
                  </p>
                </div>
              </div>

              <div class="flex flex-row gap-9">
                <span>12</span>

                <div class="flex flex-col gap-3">
                  <span>TEMPURA UDON</span>
                </div>
              </div>

              <div class="flex flex-row gap-9">
                <span>13</span>

                <div class="flex flex-col gap-3">
                  <span>PLAIN UDON</span>
                </div>
              </div>
            </div>

            <div class="relative self-end -mb-8">
              <span class="absolute bottom-4 -left-8 flex items-center justify-center w-7 h-7 rounded-full border border-primary text-primary font-bold mt-7">11</span>
              <nuxt-img src="/img/menu/ramen-11@2x.png" width="226px" height="122px" />
            </div>
          </div>

          <div class="flex flex-row gap-12">
            <div class="text-primary text-16 font-bold flex flex-col gap-6 mt-4">
              <div class="flex flex-row gap-9">
                <span>14</span>

                <div class="flex flex-col gap-3">
                  <span>NABEYAKI UDON</span>
                  <p class="text-13 leading-[20px] text-dark font-normal w-[359px]">
                    Hot Udon Noodle Soup Traditionally Served In Individual Donabe (Earthenware Pot) Or Iron Pots.
                  </p>
                </div>
              </div>

              <div class="flex flex-row gap-9">
                <span>15</span>

                <div class="flex flex-col gap-3">
                  <span>BEEF TOFU UDON</span>
                </div>
              </div>

              <div class="flex flex-row gap-9">
                <span>16</span>

                <div class="flex flex-col gap-3">
                  <span>BEEF UDON</span>
                </div>
              </div>
            </div>
            <div class="relative self-end -mb-8">
              <span class="absolute -bottom-2 -left-4 flex items-center justify-center w-7 h-7 rounded-full border border-primary text-primary font-bold mt-7">14</span>
              <nuxt-img src="/img/menu/ramen-14@2x.png" width="177px" height="140px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
