<template>
  <div class="page-title">
    <h2 class="page-title__text">{{ title }}</h2>
    <div class="page-title__line"></div>
  </div>
</template>

<style scoped>

.page-title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
}

.page-title__text {
  color: #fff;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0;
}

.page-title__line {
  width: 64px;
  height: 8px;
  border-radius: 4px;
  background: linear-gradient(132deg, #ff5f6d, #ffc371);
}

</style>

<script setup>

import { defineProps } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true
  }
});

</script>