<template>
  <div class="container mx-auto">
    <div class="h-screen flex items-end relative mt-14 md:mt-0">
      <nuxt-img src="/img/contact-image@2x.png" width="546px" height="767px" class="hidden md:block absolute bottom-0 right-0" />
      <div class="">
        <div class="flex flex-row items-center gap-4">
          <nuxt-img src="/img/Path-365.png" format="webp" width="31px" height="26px" class="fade-in-bottom shrink-0" />
          <h1 class="display-2 fade-in-bottom text-nowrap">
            Ask us anything
          </h1>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-28 gap-y-14 mt-14 w-full md:w-5/6">
          <sh-input placeholder="Name" />
          <sh-input placeholder="Email" />
          <sh-input placeholder="Subject" />
          <sh-textarea placeholder="Message" class="md:col-span-2" />

          <button type="submit">
            <sh-link-underline>SUBMIT</sh-link-underline>
          </button>
        </div>

        <div class="mt-28 flex flex-col gap-3">
          <span class="font-bold">Opening Times</span>
          <div class="flex flex-row">
            <span>Tuesday - Sunday</span>
            <span class="ml-5">11:30am - 8pm</span>
            <span class="ml-14">Monday</span>
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
