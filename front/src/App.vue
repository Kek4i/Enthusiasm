<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import CommonNav from './components/navigation/navigationComponent.vue'
import UniqueNav from './components/navigation/navigationComponent2.vue'
import Footer from './components/footer/footerComponent.vue'

const route = useRoute()

const currentNav = computed(() => {
  const routesWithUniqueNav = ['/servers/hardtech', '/servers/hitech', '/servers/terrafirmacreate',
    '/servers/terrafirmacreate', '/servers/mif', '/servers/industrialupgrade', '/servers/hitech2']
  return routesWithUniqueNav.includes(route.path) ? UniqueNav : CommonNav
})

const showFooter = computed(() => {
  const routesWithUniqueNav = ['/servers/hardtech', '/servers/hitech', '/servers/terrafirmacreate',
    '/servers/terrafirmacreate', '/servers/mif', '/servers/industrialupgrade', '/servers/hitech2']
  return !routesWithUniqueNav.includes(route.path)
})
</script>

<template>
  <component :is="currentNav" />
  <router-view />
  <Footer v-if="showFooter" />
</template>

<style scoped>
</style>