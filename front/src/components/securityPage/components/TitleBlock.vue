<template>
  <div class="title-container">
    <h2 class="title">{{ title }}</h2>
    <div class="title-line"></div>
  </div>
  <span class="description-text" v-if="description">{{ description }}</span>
</template>

<script setup>
defineProps({
  title: String,
  description: String
});
</script>

<style scoped>
h2 {
  margin: 0;
}

.title-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
}

.title {
  color: #fff;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.title-line {
  width: 64px;
  height: 8px;
  border-radius: 4px;
  background: linear-gradient(132deg, #ff5f6d, #ffc371);
}

.description-text {
  color: #fff;
  font-size: 16px;
}

@media (max-width: 768px) {
  .title {
    font-size: 27px;
  }
}
</style>