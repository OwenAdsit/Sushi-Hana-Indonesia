<template>
  <div>
    <nuxt-layout>
      <nuxt-page />
    </nuxt-layout>
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}

body {
  @apply bg-dark font-serif text-light;
}

@keyframes anim {
 0% { clip-path: circle(0% at right top); }
 100% { clip-path: circle(150%); }
}

.rotate-enter-active {
  @apply bg-light/10;
  transition: all 1.5s ease-in-out;
  animation-name: anim;
  animation-duration: 1.5s;
}

.rotate-enter-to {
  @apply bg-dark;
}
</style>
