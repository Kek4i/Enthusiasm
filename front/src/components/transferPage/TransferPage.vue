<template>
  <main class="layout-container">
    <div class="transfer-coins-page">
      <BuyCoins />
      <TransferCoins />
    </div>
  </main>
</template>

<style scoped>

.layout-container {
  max-width: 1320px;
  position: relative;
  margin-top: 64px;
  margin-inline: auto;
  padding: 0 15px;
}

.transfer-coins-page {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 32px;
  gap: 32px;
}

@media (max-width: 1024px) {
  .layout-container {
    margin-top: 32px;
  }

  .transfer-coins-page {
    grid-template-columns: 1fr;
  }
}

</style>

<script setup>
import BuyCoins from './components/BuyCoins.vue'
import TransferCoins from './components/TransferCoins.vue'
</script>