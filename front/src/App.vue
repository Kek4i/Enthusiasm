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
    document.body.classList.add('mif-page-background')
    document.body.classList.remove('global-background')
  } else {
    document.body.classList.add('global-background')
    document.body.classList.remove('mif-page-background')
  }
}

onMounted(() => {
  updateBodyClass()
})

watch(route, () => {
  updateBodyClass()
})

onBeforeUnmount(() => {
  document.body.classList.remove('mif-page-background', 'global-background')
})
</script>

<template>
  <component :is="currentNav" />
  <router-view />
  <Footer v-if="showFooter" />
</template>

<style>
body.global-background {
  background: url('assets/icons/globalBg.png');
  background-size: cover;
}

body.mif-page-background {
  background: black;
  background-size: cover;
}
</style>