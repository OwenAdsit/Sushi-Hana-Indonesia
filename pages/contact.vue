<template>
  <div class="container mx-auto">
    <div class="h-screen flex items-end lg:relative mt-14 md:mt-0">
      <picture class="hidden md:block absolute bottom-0 right-0">
        <source media="(min-width: 1024px)" srcset="/img/contact-image.png 1x, /img/contact-image@2x.png 2x" class="w-[546px] h-[767px]">

        <source media="(min-width: 768px) and (max-width: 1023px)" srcset="/img/contact-image-ipad@2x.png 2x" class="w-[436px] h-[847px]">

        <img src="/img/contact-image-ipad.png" alt="Hero Image">
      </picture>
      <!-- <nuxt-img src="/img/contact-image@2x.png" width="546px" height="767px" class="hidden md:block absolute bottom-0 right-0" /> -->
      <div class="">
        <div class="flex flex-row items-center gap-4">
          <nuxt-img src="/img/Path-365.png" format="webp" width="31px" height="26px" class="fade-in-bottom shrink-0" />
          <h1 class="display-2 fade-in-bottom text-nowrap">
            Ask us anything
          </h1>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-28 gap-y-14 mt-14 w-full md:w-1/2 lg:w-2/3 lg:pr-10">
          <sh-input placeholder="Name" />
          <sh-input placeholder="Email" />
          <sh-input placeholder="Subject" />
          <sh-textarea placeholder="Message" class="lg:col-span-2" />

          <button type="submit">
            <sh-link-underline>SUBMIT</sh-link-underline>
          </button>
        </div>

        <div class="mt-28 flex flex-col gap-3">
          <span class="font-bold">Opening Times</span>
          <div class="flex flex-row flex-wrap w-2/3 md:w-1/2 lg:w-full items-start">
            <span>Tuesday - Sunday</span>
            <span class="ml-5">11:30am - 8pm</span>
            <span class="lg:ml-14">Monday</span>
            <span class="ml-5">Closed</span>
          </div>
        </div>
      </div>
    </div>

    <div class="w-[178px] flex flex-col gap-3 mt-5">
      <h4 class="font-bold">
        Location
      </h4>
      <span>Jl. Adityawarman No.64, Darmo, Kec. Wonokromo, Kota SBY, Jawa Timur <br> 60241</span>
    </div>

    <svg width="100%" height="60" viewBox="0 0 100 20" preserveAspectRatio="none" class="my-24">
      <line x1="0" y1="10" x2="100" y2="10" stroke="dimgray" stroke-width=".5" stroke-dasharray="1.5 , 1" />
    </svg>
  </div>
</template>
