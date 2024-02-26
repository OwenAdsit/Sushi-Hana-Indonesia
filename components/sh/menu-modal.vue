<script setup lang="ts">
const { data } = defineProps<{
  data: {
    label: string
    link: string
  }[] | null
}>()

defineEmits(['close'])

const model = defineModel<boolean>()

function onAppear() {
  document.body.classList.add('overflow-hidden')
}

function onLeave() {
  document.body.classList.remove('overflow-hidden')
}
</script>

<template>
  <Transition name="rotate" @enter="onAppear" @leave="onLeave">
    <div v-if="model" class="w-screen h-screen fixed top-0 left-0 z-[-1] bg-dark flex flex-col justify-center items-center py-14">
      <ul class="flex flex-col gap-6 items-center justify-center grow">
        <sh-link v-for="menu in data" :key="menu.label" :to="menu.link" @click="$emit('close')">
          {{ menu.label }}
        </sh-link>
        <sh-link-underline class="mt-14 md:hidden" to="/order" @click="$emit('close')">
          ORDER ONLINE
        </sh-link-underline>
      </ul>

      <div class="flex flex-col justify-center items-center gap-3.5">
        Follow us

        <div class="flex flex-row gap-3 ">
          <icon name="mdi:instagram" size="19px" />
          <icon name="mdi:facebook" size="19px" />
        </div>
      </div>
    </div>
  </Transition>
</template>
