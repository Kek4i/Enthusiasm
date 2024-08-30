<template>
  <div class="PageTitle_container">
    <h2 class="PageTitle_title">{{ title }}</h2>
    <div class="PageTitle_line"></div>
  </div>
</template>

<style scoped>

.PageTitle_container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
}

.PageTitle_title {
  color: #fff;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0;
}

.PageTitle_line {
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