<script setup lang="ts">
import type { ContentMenuTab } from '~/types/content'
import Appetizer from '~/components/feature/menu/appetizer.vue'
import Soup from '~/components/feature/menu/soup/index.vue'
import Ramen from '~/components/feature/menu/ramen/index.vue'
import Sushi from '~/components/feature/menu/sushi/index.vue'
import Roll from '~/components/feature/menu/roll/index.vue'
import Maki from '~/components/feature/menu/maki/index.vue'
import HotKichen from '~/components/feature/menu/hot/index.vue'
import Bento from '~/components/feature/menu/bento/index.vue'

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
    5: Maki,
    6: HotKichen,
    7: Bento,
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
    <div class="menu__tab container mx-auto  w-full max-w-full overflow-auto flex flex-row justify-between gap-10 snap-x scroll-pl-6 touch-pan-x">
      <!-- Minta tolong pakai slider JS disini. Supaya tidak bisa lihat scrollbarnya -->
      <div
        v-for="(tab, i) in tabs"
        :key="tab.label"
        class="flex flex-col items-center cursor-pointer transition-all shrink-0 snap-start"
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

<style scoped>
.menu__tab:-webkit-scrollbar {
  display: none;
}

.menu__tab {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

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
