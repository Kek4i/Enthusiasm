<template>
  <main class="layout-container">
    <div class="transfer-coins-page">
      <div class="page-block">
        <div class="transfer__title-container">
          <h2 class="transfer__title">Покупка коинов</h2>
          <div class="transfer__title-line"></div>
        </div>
        <div class="buy-coins__form-wrapper">
          <span class="buy-coins__label">Сервер</span>
          <div class="dropdown-select__container">
            <div class="dropdown-select__select" @click="toggleDropdown('balance')">
              <span>{{ selectedServer.balance ? selectedServer.balance.name : 'Выбери сервер' }}</span>
              <div class="dropdown-select__wrapper">
                <img
                    class="dropdown-select__arrow"
                    alt="arrow"
                    loading="lazy"
                    width="24"
                    height="24"
                    decoding="async"
                    src="@/assets/icons/chevron-down.svg"
                    :class="{ 'rotate': isDropdownOpen.balance }"
                />
              </div>
            </div>
            <div v-if="isDropdownOpen.balance" class="dropdown-select__dropdown">
              <div
                  v-for="server in servers"
                  :key="server.id"
                  @click="selectServer('balance', server)"
                  class="dropdown-select__item"
              >
                {{ server.name }}
              </div>
            </div>
          </div>
        </div>
        <div class="buy-coins__form-wrapper">
          <span class="buy-coins__label">Кол-во коинов</span>
          <input
              class="input input__default"
              type="text"
              v-model="coinAmount"
              @input="validateCoinAmount($event, 'balance')"
          />
        </div>
        <div class="buy-coins__price-wrapper">
          <span class="buy-coins__price">Итого к оплате: </span>
          <span class="buy-coins__sub-price">
            {{ totalPrice }}
            <img
                alt="entcoins"
                loading="lazy"
                width="28"
                height="32"
                decoding="async"
                src="@/assets/icons/entcoins.svg"
            />
          </span>
        </div>
        <button class="balance__submit-button" @click="handleBuy">Купить</button>
      </div>
      <div class="page-block">
        <div class="transfer__title-container">
          <h2 class="transfer__title">Перевод коинов</h2>
          <div class="transfer__title-line"></div>
        </div>
        <div class="buy-coins__form-wrapper">
          <span class="buy-coins__label">Сервер</span>
          <div class="dropdown-select__container">
            <div class="dropdown-select__select" @click="toggleDropdown('transfer')">
              <span>{{ selectedServer.transfer ? selectedServer.transfer.name : 'Выбери сервер' }}</span>
              <div class="dropdown-select__wrapper">
                <img
                    class="dropdown-select__arrow"
                    alt="arrow"
                    loading="lazy"
                    width="24"
                    height="24"
                    decoding="async"
                    src="@/assets/icons/chevron-down.svg"
                    :class="{ 'rotate': isDropdownOpen.transfer }"
                />
              </div>
            </div>
            <div v-if="isDropdownOpen.transfer" class="dropdown-select__dropdown">
              <div
                  v-for="server in servers"
                  :key="server.id"
                  @click="selectServer('transfer', server)"
                  class="dropdown-select__item"
              >
                {{ server.name }}
              </div>
            </div>
          </div>
        </div>
        <div class="buy-coins__form-wrapper">
          <span class="buy-coins__label">Кол-во коинов</span>
          <input
              class="input input__default"
              type="text"
              v-model="coinAmountTransfer"
              @input="validateCoinAmount($event, 'transfer')"
          />
        </div>
        <button class="balance__submit-button" @click="handleTransfer">Зачислить</button>
      </div>
    </div>
  </main>
</template>

<style scoped>

h2 {
  margin: 0;
}

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

.buy-coins__form-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  width: 100%;
}

.buy-coins__label {
  color: #fff;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.dropdown-select__container {
  position: relative;
  width: 100%;
}

.dropdown-select__select {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;
  width: 100%;
  border-radius: 10px;
  background: hsla(0, 0%, 100%, .05);
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  color: hsla(0, 0%, 100%, .5);
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.dropdown-select__wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.dropdown-select__arrow {
  transform: rotate(-180deg);
  transition: transform 0.3s ease;
}

.input {
  display: flex;
  width: 100%;
  align-items: flex-start;
  gap: 10px;
  border-radius: 8px;
  background: hsla(0, 0%, 100%, .1);
  color: #fff;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border: initial;
}

.input__default {
  padding: 16px;
  font-size: 16px;
}

.buy-coins__price-wrapper {
  display: flex;
  align-items: center;
  gap: 4px;
}

.buy-coins__price {
  color: #fff;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
}

.buy-coins__sub-price {
  display: flex;
  align-items: center;
  gap: 5px;
  color: #fff;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
}

.dropdown-select__dropdown {
  position: absolute;
  z-index: 99;
  top: 51px;
  left: 0;
  border-radius: 10px;
  width: 100%;
  max-height: 280px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.dropdown-select__dropdown::-webkit-scrollbar {
  display: none;
}

.dropdown-select__item {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 12px 24px;
  background: #1c1c1c;
  color: hsla(0, 0%, 100%, 0.5);
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

.dropdown-select__item:hover {
  background-color: rgb(39, 39, 39);
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

.rotate {
  transform: rotate(-360deg);
  transition: transform 0.3s ease;
}
</style>

<script setup>
import { ref, computed } from 'vue'

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
  balance: null,
  transfer: null,
})

const isDropdownOpen = ref({
  balance: false,
  transfer: false,
})

const coinAmount = ref(0)
const coinAmountTransfer = ref(0)

const selectServer = (type, server) => {
  selectedServer.value[type] = server
  isDropdownOpen.value[type] = false
}

const toggleDropdown = (type) => {
  isDropdownOpen.value[type] = !isDropdownOpen.value[type]
}

const validateCoinAmount = (event, type) => {
  const input = event.target.value
  const cleanedValue = input.replace(/\D/g, '')
  event.target.value = cleanedValue

  if (type === 'balance') {
    coinAmount.value = parseInt(cleanedValue) || 0
  } else if (type === 'transfer') {
    coinAmountTransfer.value = parseInt(cleanedValue) || 0
  }
}

const totalPrice = computed(() => {
  if (!selectedServer.value.balance || !coinAmount.value) {
    return 0
  }
  return (coinAmount.value * selectedServer.value.balance.rate)
})

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