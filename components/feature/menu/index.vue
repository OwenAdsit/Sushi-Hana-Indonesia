<script setup lang="ts">
import type { ContentMenuTab } from '~/types/content'
import Appetizer from '~/components/feature/menu/appetizer.vue'
import Soup from '~/components/feature/menu/soup.vue'
import Ramen from '~/components/feature/menu/ramen.vue'
import Sushi from '~/components/feature/menu/sushi.vue'
import Roll from '~/components/feature/menu/roll.vue'

const getTab = () => queryContent('/feature/menu/tab').find()
const { data: tabs } = await useAsyncData('tab', getTab, { transform: v => v[0].body as unknown as ContentMenuTab['body'] })

const transition = ref<'slide-left' | 'slide-right'>('slide-left')

const activeTab = ref(0)
const activeElemet = computed(() => {
  return {
    0: Appetizer,
    1: Soup,
    2: Ramen,
    3: Sushi,
    4: Roll,
  }[activeTab.value]
})

function onSwitchTab(i: number) {
  if (activeTab.value > i)
    transition.value = 'slide-right'
  else
    transition.value = 'slide-left'

  activeTab.value = i
}
</script>

<template>
  <div id="menu" class="bg-light py-[95px] text-dark">
    <div class="container mx-auto  w-full max-w-full overflow-scroll flex flex-row justify-between gap-10">
      <!-- Minta tolong pakai slider JS disini. Supaya tidak bisa lihat scrollbarnya -->
      <div
        v-for="(tab, i) in tabs"
        :key="tab.label"
        class="flex flex-col items-center cursor-pointer transition-all shrink-0"
        :class="{ 'text-primary': activeTab === i, 'opacity-40 hover:opacity-70': activeTab !== i }"
        @click="onSwitchTab(i)"
      >
        <icon :name="tab.icon" size="46px" />
        <span class="text-13 font-bold mt-5">{{ tab.label }}</span>
        <span class="text-10">{{ tab.desciption }}</span>
      </div>
    </div>

    <div class="container mx-auto p-0 mt-[100px] relative min-h-[600px] transition-all duration-500">
      <Transition :name="transition">
        <component :is="activeElemet" :key="activeTab" />
      </Transition>
    </div>
  </div>
</template>

<style>
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.5s;
  position: absolute;
  top: 0;
}
.slide-left-enter-from {
  opacity: 0;
  transform: translate(80vw, 0);
}
.slide-left-leave-to {
  opacity: 0;
  transform: translate(-80vw, 0);
}
.slide-right-enter-from {
  opacity: 0;
  transform: translate(-80vw, 0);
}
.slide-right-leave-to {
  opacity: 0;
  transform: translate(80vw, 0);
}
</style>
