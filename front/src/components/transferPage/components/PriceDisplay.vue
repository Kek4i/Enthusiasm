<template>
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
</template>

<style scoped>

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

</style>

<script setup>
const props = defineProps({
  totalPrice: Number
})
</script>