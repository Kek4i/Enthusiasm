<template>
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
        <div class="payment-method__way-block" :style="{ opacity: isBlocked(method.minAmount) ? 0.2 : 1 }">
          <img :alt="method.name" :src="method.icon" width="42" height="42">
          <span>{{ method.name }}</span>
        </div>
        <div class="PaymentMethod_minAvailable-blocker" :class="{ 'PaymentMethod_minAvailable-blocker-active': isBlocked(method.minAmount) }">
          От {{ method.minAmount }}
          <img alt="entcoins" width="28" height="32" src="../../../assets/icons/accountPage/entcoins.svg">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  paymentMethods: Array,
  selectedMethod: Number,
  depositAmount: String
});

const emit = defineEmits(['selectMethod']);
const selectMethod = (index) => {
  emit('selectMethod', index);
};

const isBlocked = (minAmount) => {
  return Number(props.depositAmount) < minAmount;
};
</script>

<style scoped>

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

@media (max-width: 1024px) {
  .balance__ways-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .balance__ways-container {
    grid-template-columns: 1fr;
  }
}
</style>