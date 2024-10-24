<template>
  <div class="page-block">
    <div class="transfer__title-container">
      <h2 class="transfer__title">Перевод коинов</h2>
      <div class="transfer__title-line"></div>
    </div>
    <DropdownSelect
        :servers="servers"
        :selectedServer="selectedServer.transfer"
        :isDropdownOpen="isDropdownOpen.transfer"
        @toggle="toggleDropdown('transfer')"
        @select="selectServer('transfer', $event)"
    />
    <CoinInput
        :coinAmount="coinAmountTransfer"
        @input="(value) => coinAmountTransfer = value"
    />
    <button class="balance__submit-button" @click="handleTransfer">Зачислить</button>
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
import { ref } from 'vue'
import DropdownSelect from './DropdownSelect.vue'
import CoinInput from './CoinInput.vue'

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
  transfer: null,
})

const isDropdownOpen = ref({
  transfer: false,
})

const coinAmountTransfer = ref(0)

const toggleDropdown = (type) => {
  isDropdownOpen.value[type] = !isDropdownOpen.value[type]
}

const selectServer = (type, server) => {
  selectedServer.value[type] = server
  isDropdownOpen.value[type] = false
}

const handleTransfer = () => {
  if (!selectedServer.value.transfer) {
    alert('Пожалуйста, выберите сервер для перевода коинов.')
    return
  }

  if (!coinAmountTransfer.value) {
    alert('Пожалуйста, введите количество коинов для перевода.')
    return
  }

  alert(`Вы переводите ${coinAmountTransfer.value} коинов на сервере ${selectedServer.value.transfer.name}.`)
}
</script>