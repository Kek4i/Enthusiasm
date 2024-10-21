<template>
  <main class="layout-container">
    <div class="balance">
      <div class="page-block">
        <div class="balance__title-container">
          <h2 class="balance__title">Пополнение баланса</h2>
          <div class="balance__title-line"></div>
        </div>
        <div class="balance__block">
          <div class="balance__wrapper">
            <label for="money" class="balance__block-title">Сумма пополнения:</label>
            <input
                type="text"
                v-model="depositAmount"
                @input="validateInput"
                placeholder="Введи сумму"
                class="balance__input"
            >
          </div>
          <div class="balance__wrapper">
            <span class="balance__block-title">Способы пополнения:</span>
            <div class="balance__ways-container">
              <div
                  v-for="(method, index) in paymentMethods"
                  :key="index"
                  :class="['payment-method', { selected: selectedMethod === index, blocked: isBlocked(method.minAmount) }]"
                  @click="!isBlocked(method.minAmount) && selectMethod(index)"
                  :style="{ cursor: isBlocked(method.minAmount) ? 'not-allowed' : 'pointer' }"
              >
                <div
                    class="payment-method__way-block"
                    :style="{ opacity: isBlocked(method.minAmount) ? 0.2 : 1 }"
                >
                  <img :alt="method.name" :src="method.icon" width="42" height="42">
                  <span>{{ method.name }}</span>
                </div>
                <div
                    class="PaymentMethod_minAvailable-blocker"
                    :class="{ 'PaymentMethod_minAvailable-blocker-active': isBlocked(method.minAmount) }"
                >
                  От {{ method.minAmount }}
                  <img alt="entcoins" width="28" height="32" src="@/assets/icons/entcoins.svg">
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
            type="submit"
            class="balance__submit-button"
            :disabled="selectedMethod === null || isBlocked(paymentMethods[selectedMethod].minAmount)"
            :class="{ 'disabled': selectedMethod === null }"
        >
          {{ selectedMethod === null ? 'Выберите способ оплаты' : 'Перейти к оплате' }}
        </button>
      </div>
      <div class="page-block">
        <div class="balance__block">
          <div class="balance__wrapper">
            <span class="balance__block-title">При возникновении проблем с пополнением, свяжитесь с администрацией:</span>
            <a target="_blank" href="https://t.me/opulat">
              <button type="submit" class="balance__submit-button">Связаться (Telegram)</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>

a {
  text-decoration: none;
}

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

.balance {
  display: flex;
  flex-direction: column;
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

.balance__title-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
}

.balance__title {
  color: #fff;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.balance__title-line {
  width: 64px;
  height: 8px;
  border-radius: 4px;
  background: linear-gradient(132deg, #ff5f6d, #ffc371);
}

.balance__block {
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 32px;
}

.balance__wrapper {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
}

.balance__block-title {
  color: #fff;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.balance__input {
  color: #fff;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
  padding: 12px 24px;
  border-radius: 10px;
  background: hsla(0, 0%, 100%, .05);
  border: initial;
}

.balance__input::placeholder {
  font-weight: 500;
  color: #fff;
}

.balance__ways-container {
  display: grid;
  grid-gap: 10px;
  gap: 10px;
  grid-template-columns: repeat(4, 1fr);
}

.payment-method.blocked {
  pointer-events: none;
}

.payment-method {
  position: relative;
  user-select: none;
  width: 100%;
  border: 3px solid transparent;
  border-radius: 10px;
  transition: border 0.3s ease;
  cursor: pointer; /* курсор теперь работает на весь элемент */
}

.payment-method:hover:not(.blocked) {
  border: 3px solid rgb(255, 147, 112);
}

.payment-method.selected {
  border: 3px solid rgb(255, 147, 112);
}

.payment-method__way-block {
  display: flex;
  width: 100%;
  height: 80px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  border-radius: 10px;
  background: hsla(0, 0%, 100%, .05);
}

.PaymentMethod_minAvailable-blocker {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 16px;
  opacity: 0;
  transition: opacity 0.3s ease;
  border-radius: 10px;
  gap: 4px;
}

.PaymentMethod_minAvailable-blocker-active {
  opacity: 1;
}

.balance__submit-button {
  display: flex;
  padding: 16px 20px;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 8px;
  background: linear-gradient(132deg, rgb(255, 95, 109) 0%, rgb(255, 195, 113) 100%);
  color: #fff;
  font-size: 19px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  border: initial;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.balance__submit-button.disabled {
  background: grey;
  cursor: not-allowed;
}

.balance__submit-button:hover {
  background: linear-gradient(132deg, rgb(255, 95, 109) 0%, rgb(255, 195, 113) 100%);
  box-shadow: rgb(255, 147, 112) 0 20px 50px -10px;
  transform: scale(1.05) translateZ(0px);
}

.balance__submit-button.disabled:hover {
  box-shadow: none;
  transform: none;
  background: grey;
}
</style>

<script setup>
import { ref } from 'vue';
import cryptoIcon from '@/assets/icons/crypto.svg';
import payeerIcon from '@/assets/icons/payeer.svg';
import advcashIcon from '@/assets/icons/advcash.svg';

const selectedMethod = ref(null);
const depositAmount = ref('100');

const paymentMethods = [
  { name: 'Криптовалюта', icon: cryptoIcon, minAmount: 100 },
  { name: 'PAYEER | RUB', icon: payeerIcon, minAmount: 1 },
  { name: 'PAYEER | USD', icon: payeerIcon, minAmount: 10 },
  { name: 'PAYEER | EUR', icon: payeerIcon, minAmount: 10 },
  { name: 'Advcash | RUB', icon: advcashIcon, minAmount: 10 },
  { name: 'Advcash | USD', icon: advcashIcon, minAmount: 10 },
  { name: 'Advcash | EUR', icon: advcashIcon, minAmount: 10 }
];

/* Проверяем сумму при вводе и сбрасываем метод оплаты, если сумма меньше */
const checkBlockedMethods = () => {
  if (selectedMethod.value !== null && isBlocked(paymentMethods[selectedMethod.value].minAmount)) {
    selectedMethod.value = null;
  }
};

/* Валидация ввода — только цифры */
const validateInput = (event) => {
  const value = event.target.value;
  // Убираем все символы кроме цифр
  depositAmount.value = value.replace(/\D/g, '');
  checkBlockedMethods();
};

const selectMethod = (index) => {
  selectedMethod.value = index;
};

const isBlocked = (minAmount) => {
  return Number(depositAmount.value) < minAmount;
};
</script>