<template>
  <NuxtPage />
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

@keyframes animout {
 0% { clip-path: circle(150%); }
 100% { clip-path: circle(0% at right top); }
}

.rotate-leave-active {
  @apply bg-dark/10;
  transition: all 1s ease-in-out;
  animation-name: animout;
  animation-duration: 1s;
}

.rotate-enter-active {
  @apply bg-light/10;
  transition: all 1s ease-in-out;
  animation-name: anim;
  animation-duration: 1s;
}

.rotate-enter-to,
.rotate-leave-from {
  @apply bg-dark;
}
</style>
