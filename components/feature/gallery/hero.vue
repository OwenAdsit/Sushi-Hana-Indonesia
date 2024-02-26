<template>
  <div class="container mx-auto h-screen flex flex-col justify-center items-center">
    <div class="flex flex-row items-center gap-2">
      <nuxt-img src="/img/Path-365.png" format="webp" width="31px" height="26px" class="fade-in-bottom" />
      <h1 class="display-2 fade-in-bottom">
        The Gallery
      </h1>
      <nuxt-img src="/img/Path-365.png" format="webp" width="31px" height="26px" class="fade-in-bottom" />
    </div>
    <sh-link-underline class="text-14 font-bold mt-3 fade-in-top" to="/gallery#image-grid">
      Explore
    </sh-link-underline>
  </div>
</template>

<style scoped>
/**
 * ----------------------------------------
 * animation fade-in-top
 * ----------------------------------------
 */
 @-webkit-keyframes fade-in-top {
  0% {
    -webkit-transform: translateY(-50px);
            transform: translateY(-50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity: 1;
  }
}
@keyframes fade-in-top {
  0% {
    -webkit-transform: translateY(-50px);
            transform: translateY(-50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity: 1;
  }
}

.fade-in-top {
	-webkit-animation: fade-in-top 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
	        animation: fade-in-top 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
          animation-delay: 0.5s;
}
</style>
