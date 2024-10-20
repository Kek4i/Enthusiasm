<template>
  <div class="fa-block-container">
    <div class="fa-block" @click="$emit('open-modal')">
      <img alt="Telegram" src="@/assets/icons/Tg_default.svg">
      <span class="fa-name">Telegram</span>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>

.fa-block-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  width: 100%;
}

.fa-block {
  display: flex;
  padding: 32px 46px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  border-radius: 10px;
  background: hsla(0, 0%, 100%, .05);
  color: #fff;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  cursor: pointer;
}

.fa-name {
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  text-transform: uppercase;
}
</style>