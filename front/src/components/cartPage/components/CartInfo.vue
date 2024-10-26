<template>
  <h2 class="cart-info">{{ cartStatus }}</h2>
</template>

<style scoped>

h2 {
  margin: 0;
}

.cart-info {
  color: #fff;
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  width: 100%;
  text-align: center;
}

</style>

<script setup>
const props = defineProps({
  cartStatus: String,
});
</script>