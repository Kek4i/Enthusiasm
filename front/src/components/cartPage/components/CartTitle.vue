<template>
  <div class="cart-title-container">
    <h2 class="cart-title">Корзина</h2>
    <div class="cart-title-line"></div>
  </div>
</template>

<style scoped>

h2 {
  margin: 0;
}

.cart-title-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
}

.cart-title {
  color: #fff;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.cart-title-line {
  width: 64px;
  height: 8px;
  border-radius: 4px;
  background: linear-gradient(132deg, #ff5f6d, #ffc371);
}

@media (max-width: 768px) {
  .cart-title {
    font-size: 27px;
  }
}

</style>