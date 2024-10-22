<template>
  <div class="balance__wrapper">
    <label for="money" class="balance__block-title">Сумма пополнения:</label>
    <input
        type="text"
        v-model="amount"
        @input="validateInput"
        placeholder="Введи сумму"
        class="balance__input"
    >
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  depositAmount: String
});

const emit = defineEmits(['update:depositAmount']);
const amount = ref(props.depositAmount);

const validateInput = (event) => {
  const value = event.target.value;
  amount.value = value.replace(/\D/g, '');
};

watch(amount, (newValue) => {
  emit('update:depositAmount', newValue);
});
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
</style>