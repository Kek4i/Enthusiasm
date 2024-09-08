<script setup>
import { computed, onMounted, onBeforeUnmount, watch } from 'vue'
import { useRoute } from 'vue-router'
import CommonNav from './components/navigation/CommonNavigationComponent.vue'
import UniqueNav from './components/navigation/UniqueNavigationComponent.vue'
import Footer from './components/footer/footerComponent.vue'

const route = useRoute()

const routesWithUniqueNav = ['/servers/hardtech', '/servers/hitech', '/servers/terrafirmacreate',
  '/servers/mif', '/servers/industrialupgrade', '/servers/hitech2']

const currentNav = computed(() => {
  return routesWithUniqueNav.includes(route.path) ? UniqueNav : CommonNav
})

const showFooter = computed(() => {
  return !routesWithUniqueNav.includes(route.path)
})

const updateBodyClass = () => {
  if (route.path === '/servers/mif') {
    document.body.classList.add('mif-page-background', 'mif-scrollbar')
    document.body.classList.remove('global-background', 'global-scrollbar')
  } else {
    document.body.classList.add('global-background', 'global-scrollbar')
    document.body.classList.remove('mif-page-background', 'mif-scrollbar')
  }
}

onMounted(() => {
  updateBodyClass()
})

watch(route, () => {
  updateBodyClass()
})

onBeforeUnmount(() => {
  document.body.classList.remove('mif-page-background', 'global-background', 'mif-scrollbar', 'global-scrollbar')
})
</script>

<template>
  <component :is="currentNav" />
  <router-view />
  <Footer v-if="showFooter" />
</template>

<style>
/* Общие стили фона */
body.global-background {
  background: url('assets/icons/globalBg.png');
  background-size: cover;
}

body.mif-page-background {
  background: black;
  background-size: cover;
}

body.global-scrollbar::-webkit-scrollbar {
  width: 10px;
}

body.global-scrollbar::-webkit-scrollbar-thumb {
  background-color: rgba(100, 100, 100, 0.8); /* Тёмно-серая прокрутка */
  border-radius: 10px;
}

body.global-scrollbar::-webkit-scrollbar-track {
  background-color: rgba(50, 50, 50, 0.5); /* Тёмный трек */
  background-clip: content-box;
}

/* Полоса прокрутки для mif-page-background */
body.mif-scrollbar::-webkit-scrollbar {
  width: 10px;
}

body.mif-scrollbar::-webkit-scrollbar-thumb {
  background: linear-gradient(132deg, #5c8bf1, #9fc7f5 100%);
  border-radius: 10px;
}

body.mif-scrollbar::-webkit-scrollbar-track {
  background: rgb(38, 36, 30);
  background-clip: content-box;
}
</style>