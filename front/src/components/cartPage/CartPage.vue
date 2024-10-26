<template>
  <main class="layout-container">
    <div class="cart-block">
      <CartTitle />
      <DropdownSelect
          :options="options"
          :selectedOption="selectedOption"
          @update:selectedOption="selectOption"
      />
      <CartInfo :cartStatus="cartStatus" />
    </div>
  </main>
</template>

<style scoped>

.layout-container {
  max-width: 1320px;
  position: relative;
  margin-top: 64px;
  margin-inline: auto;
  padding: 0 15px;
}

.cart-block {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  width: 100%;
  padding: 64px 96px;
  border-radius: 10px;
  background: hsla(0, 0%, 100%, .05);
  -webkit-backdrop-filter: blur(2px);
  backdrop-filter: blur(2px);
}

@media (max-width: 1024px) {
  .layout-container {
    margin-top: 32px;
  }
}

@media (max-width: 768px) {
  .cart-block {
    padding: 35px 20px;
  }
}

</style>

<script setup>
import { ref, computed } from 'vue';
import CartTitle from './components/CartTitle.vue';
import DropdownSelect from './components/DropdownSelect.vue';
import CartInfo from './components/CartInfo.vue';

const options = ref([
  "Нераспределенные",
  "HardTech #1",
  "HardTech #2",
  "HardTech #3",
  "HardTech #4",
  "HardTech #5",
  "HiTech 1.20.1 #1",
  "HiTech 1.20.1 #2",
  "TerraFirmaCreate #1"
]);

const selectedOption = ref("Нераспределенные");

const cartsByServer = ref({
  "Нераспределенные": [],
  "HardTech #1": ["item1", "item2"],
  "HardTech #2": [],
  "HardTech #3": ["item3"],
  "HardTech #4": [],
  "HardTech #5": ["item4", "item5"],
  "HiTech 1.20.1 #1": [],
  "HiTech 1.20.1 #2": [],
  "TerraFirmaCreate #1": ["item6"]
});

const selectOption = (option) => {
  selectedOption.value = option;
};

const cartStatus = computed(() => {
  if (selectedOption.value === "Нераспределенные") {
    const allItems = Object.values(cartsByServer.value).flat();
    return allItems.length > 0 ? `Всего предметов: ${allItems.length}` : "Корзина пуста";
  } else {
    const currentCart = cartsByServer.value[selectedOption.value];
    return currentCart && currentCart.length > 0 ? `Предметов: ${currentCart.length}` : "Корзина пуста";
  }
});
</script>