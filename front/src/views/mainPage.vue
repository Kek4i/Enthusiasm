<template>
  <main class="main_content">
    <section class="page">
      <div class="page__container">
        <PageSlider />
        <Monitoring />
        <NewsPost />
        <PlayHomeBlock />
      </div>
    </section>
  </main>
</template>

<style scoped>

.main_content {
  max-width: 1320px;
  margin-top: 64px;
  margin-inline: auto;
  display: flex;
  width: 100%;
  padding: 0 16px;
  backdrop-filter: blur(2px);
}

.page {
  max-width: 1320px;
  width: 100%;
}

.page__container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 128px;
}
</style>

<script setup>
import PageSlider from '@/components/mainPage/PageSlider.vue';
import Monitoring from "@/components/mainPage/Monitoring.vue";
import NewsPost from "@/components/mainPage/NewsPost.vue";
import PlayHomeBlock from "@/components/mainPage/PlayHomeBlock.vue";
</script>