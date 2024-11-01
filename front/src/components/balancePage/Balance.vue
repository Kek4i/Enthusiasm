<template>
  <main class="layout-container">
    <div class="balance">
      <div class="page-block">
        <div class="balance__title-container">
          <h2 class="balance__title">Пополнение баланса</h2>
          <div class="balance__title-line"></div>
        </div>
        <DepositInput :depositAmount="depositAmount" @update:depositAmount="updateAmount" />
        <PaymentMethods :paymentMethods="paymentMethods" :selectedMethod="selectedMethod" :depositAmount="depositAmount" @selectMethod="selectMethod" />
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
        <ContactButton />
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

@media (max-width: 1024px) {
  .layout-container {
    margin-top: 32px;
  }
}

@media (max-width: 768px) {
  .page-block {
    padding: 35px 20px;
  }

  .balance__title {
    font-size: 27px;
  }
}
</style>

<script setup>
import { ref, watch } from 'vue';
import DepositInput from './components/DepositInput.vue';
import PaymentMethods from './components/PaymentMethods.vue';
import ContactButton from './components/ContactButton.vue';
import cryptoIcon from "@/assets/icons/balancePage/crypto.svg";
import payeerIcon from "@/assets/icons/balancePage/payeer.svg";
import advcashIcon from "@/assets/icons/balancePage/advcash.svg";

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

const updateAmount = (newAmount) => {
  depositAmount.value = newAmount;
};

const selectMethod = (index) => {
  selectedMethod.value = index;
};

const isBlocked = (minAmount) => {
  return Number(depositAmount.value) < minAmount;
};

watch(depositAmount, (newAmount) => {
  if (selectedMethod.value !== null && isBlocked(paymentMethods[selectedMethod.value].minAmount)) {
    selectedMethod.value = null;
  }
});
</script>