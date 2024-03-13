<script setup lang="ts">
import type { VNodeRef } from 'vue'

const { color = 'white' } = defineProps<{
  color?: 'white' | 'black'
}>()

const menu = ref<VNodeRef | null>(null)

const model = defineModel<boolean>()

watch(model, (val) => {
  if (val)
    menu.value.classList.add('opened')
  else menu.value.classList.remove('opened')
})
</script>

<template>
  <div class="contain cursor-pointer" @click="model = !model">
    <button ref="menu" class="burgermenu">
      <span />
    </button>
  </div>
</template>

<style scoped>
.contain {
  display: block;
  width: 36px;
  height: 30px;
  position: relative;
}

.burgermenu {
  border: none;
  background: none;
  width: 60px;
  height: 50px;
  position: absolute;
  top: 0;
  left: 0;
  padding: 0;
  /* opacity: 0.5; */
  transition: opacity 0.5s ease;
  outline: none;
  scale: 0.6;
  transform-origin: left top;
}
.burgermenu:hover {
  opacity: 1;
}
.burgermenu span {
  display: block;
  width: 100%;
  height: 1px;
  position: absolute;
  top: 0;
  left: 0;
  border-top: 1px solid v-bind(color);
  transform: translateY(22px);
  transition: transform 0.5s ease, border-color 0.5s ease 0.3s;
}
.burgermenu span:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background: v-bind(color);
  transform: translateY(-22px);
  animation-name: topLineBurger;
  animation-duration: 0.6s;
  animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1.000);
  animation-fill-mode: forwards;
}
.burgermenu span:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background: v-bind(color);
  transform: translateY(22px);
  animation-name: bottomLineBurger;
  animation-duration: 0.6s;
  animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1.000);
  animation-fill-mode: forwards;
}
.burgermenu.opened span {
  border-color: transparent;
  transition: border-color 0.3s ease;
}
.burgermenu.opened span:before {
  animation-name: topLineCross;
  animation-duration: 0.6s;
  animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1.000);
  animation-fill-mode: forwards;
}
.burgermenu.opened span:after {
  animation-name: bottomLineCross;
  animation-duration: 0.6s;
  animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1.000);
  animation-fill-mode: forwards;
}

@keyframes topLineCross {
  0% {
    transform: translateY(-22px);
  }
  50% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(0px) rotate(45deg);
  }
}

@keyframes bottomLineCross {
  0% {
    transform: translateY(22px);
  }
  50% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(0px) rotate(-45deg);
  }
}

@keyframes topLineBurger {
  0% {
    transform: translateY(0px) rotate(45deg);
  }
  50% {
    transform: rotate(0deg);
  }
  100% {
    transform: translateY(-22px) rotate(0deg);
  }
}

@keyframes bottomLineBurger {
  0% {
    transform: translateY(0px) rotate(-45deg);
  }
  50% {
    transform: rotate(0deg);
  }
  100% {
    transform: translateY(22px) rotate(0deg);
  }
}
</style>
