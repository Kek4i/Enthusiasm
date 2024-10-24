<template>
  <div class="buy-coins__form-wrapper">
    <span class="buy-coins__label">Кол-во коинов</span>
    <input
        class="input input__default"
        type="text"
        v-model="amount"
        @input="validateAmount"
    />
  </div>
</template>

<style scoped>

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
</style>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  coinAmount: Number,
  validateCoinAmount: Function,
})

const emits = defineEmits(['input'])

const amount = ref(props.coinAmount)

const validateAmount = (event) => {
  const input = event.target.value.replace(/\D/g, '')
  event.target.value = input
  emits('input', parseInt(input) || 0)
}

watch(() => props.coinAmount, (newVal) => {
  amount.value = newVal
})
</script>