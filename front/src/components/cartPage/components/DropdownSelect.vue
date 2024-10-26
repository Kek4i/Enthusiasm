<template>
  <div class="dropdown-container">
    <div class="dropdown-select" @click="toggleDropdown">
      <span>{{ selectedOption }}</span>
      <div class="dropdown-arrow-wrapper">
        <img src="@/assets/icons/chevron-down.svg" alt="arrow" :class="{'rotate': isDropdownOpen}" class="dropdown-arrow" />
      </div>
    </div>
    <div v-if="isDropdownOpen" class="dropdown-list">
      <div
          v-for="option in options"
          :key="option"
          class="dropdown-item"
          @click="onOptionClick(option)"
      >
        {{ option }}
      </div>
    </div>
  </div>
</template>

<style scoped>

.dropdown-container {
  position: relative;
  width: 100%;
}

.dropdown-select {
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
  transition: transform 0.1s ease;
}

.dropdown-select:active {
  transform: scale(0.95);
}

.dropdown-arrow-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.dropdown-arrow {
  transform: rotate(-180deg);
  transition: transform 0.3s ease;
}

.rotate {
  transform: rotate(-360deg);
  transition: transform 0.3s ease;
}

.dropdown-list {
  position: absolute;
  z-index: 99;
  top: 62px;
  left: 0;
  border-radius: 10px;
  width: 100%;
  max-height: 280px;
  flex-direction: column;
  align-items: flex-start;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.dropdown-item {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 12px 24px;
  background: #1c1c1c;
  color: hsla(0, 0%, 100%, .5);
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

.dropdown-item:hover {
  background-color: rgb(39, 39, 39);
}

</style>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  options: Array,
  selectedOption: String,
});
const emit = defineEmits(['update:selectedOption']);

const isDropdownOpen = ref(false);

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

const onOptionClick = (option) => {
  emit('update:selectedOption', option);
  isDropdownOpen.value = false;
};
</script>