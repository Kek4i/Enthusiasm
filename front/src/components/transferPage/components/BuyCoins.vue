<template>
  <div class="page-block">
    <div class="transfer__title-container">
      <h2 class="transfer__title">Покупка коинов</h2>
      <div class="transfer__title-line"></div>
    </div>
    <DropdownSelect
        :servers="servers"
        :selectedServer="selectedServer.balance"
        :isDropdownOpen="isDropdownOpen.balance"
        @toggle="toggleDropdown('balance')"
        @select="selectServer('balance', $event)"
    />
    <CoinInput
        :coinAmount="coinAmount"
        @input="(value) => coinAmount = value"
    />
    <PriceDisplay :totalPrice="totalPrice" />
    <button class="balance__submit-button" @click="handleBuy">Купить</button>
  </div>
</template>

<style scoped>

h2 {
  margin: 0;
}

.page-block {
  display: flex;
  width: 100%;
  padding: 64px 96px;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  border-radius: 10px;
  background: hsla(0, 0%, 100%, .05);
  -webkit-backdrop-filter: blur(2px);
  backdrop-filter: blur(2px);
}

.transfer__title-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
}

.transfer__title {
  color: #fff;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.transfer__title-line {
  width: 64px;
  height: 8px;
  border-radius: 4px;
  background: linear-gradient(132deg, #ff5f6d, #ffc371);
}

.balance__submit-button {
  display: flex;
  padding: 16px 20px;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 8px;
  background: #ff9370;
  color: #fff;
  font-size: 19px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  border: initial;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-transform: uppercase;
}

.balance__submit-button:hover {
  background: #ff9370;
  box-shadow: rgb(255, 147, 112) 0 20px 50px -10px;
  transform: scale(1.05) translateZ(0px);
}

@media (max-width: 768px) {
  .page-block {
    padding: 35px 20px;
  }

  .transfer__title {
    font-size: 27px;
  }
}

</style>

<script setup>
import { ref, computed } from 'vue'
import DropdownSelect from './DropdownSelect.vue'
import CoinInput from './CoinInput.vue'
import PriceDisplay from './PriceDisplay.vue'

const servers = ref([
  { id: 1, name: 'HardTech #1', rate: 1 },
  { id: 2, name: 'HardTech #2', rate: 2 },
  { id: 3, name: 'HardTech #3', rate: 3 },
  { id: 4, name: 'HardTech #4', rate: 4 },
  { id: 5, name: 'HardTech #5', rate: 5 },
  { id: 6, name: 'HiTech 1.20.1 #1', rate: 6 },
  { id: 7, name: 'HiTech 1.20.1 #2', rate: 7 },
])

const selectedServer = ref({
  balance: null
})

const isDropdownOpen = ref({
  balance: false
})

const coinAmount = ref(0)

const totalPrice = computed(() => {
  return coinAmount.value * (selectedServer.value.balance?.rate || 0)
})

const toggleDropdown = (type) => {
  isDropdownOpen.value[type] = !isDropdownOpen.value[type]
}

const selectServer = (type, server) => {
  selectedServer.value[type] = server
  isDropdownOpen.value[type] = false
}

const handleBuy = () => {
  if (!selectedServer.value.balance) {
    alert('Пожалуйста, выберите сервер для пополнения баланса.')
    return
  }

  if (!coinAmount.value) {
    alert('Пожалуйста, введите количество коинов для пополнения.')
    return
  }

  alert(`Вы покупаете ${totalPrice.value} коинов на сервере ${selectedServer.value.balance.name}.`)
}
</script>