<script setup>
import { RouterView } from 'vue-router'
import Navigation from "./components/navigation/navigationComponent.vue";
import Footer from "./components/footer/footerComponent.vue";
</script>

<template>
  <Navigation />
  <RouterView />
  <Footer />
</template>

<style scoped>

</style>
