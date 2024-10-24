<template>
  <div class="buy-coins__form-wrapper">
    <span class="buy-coins__label">Сервер</span>
    <div class="dropdown-select__container">
      <div class="dropdown-select__select" @click="toggleDropdown">
        <span>{{ selectedServer ? selectedServer.name : 'Выбери сервер' }}</span>
        <div class="dropdown-select__wrapper">
          <img
              class="dropdown-select__arrow"
              alt="arrow"
              loading="lazy"
              width="24"
              height="24"
              decoding="async"
              src="@/assets/icons/chevron-down.svg"
              :class="{ 'rotate': isDropdownOpen }"
          />
        </div>
      </div>
      <div v-if="isDropdownOpen" class="dropdown-select__dropdown">
        <div
            v-for="server in servers"
            :key="server.id"
            @click="selectServer(server)"
            class="dropdown-select__item"
        >
          {{ server.name }}
        </div>
      </div>
    </div>
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

.dropdown-select__container {
  position: relative;
  width: 100%;
}

.dropdown-select__select {
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
}

.dropdown-select__wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.dropdown-select__arrow {
  transform: rotate(-180deg);
  transition: transform 0.3s ease;
}

.dropdown-select__dropdown {
  position: absolute;
  z-index: 99;
  top: 51px;
  left: 0;
  border-radius: 10px;
  width: 100%;
  max-height: 280px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.dropdown-select__dropdown::-webkit-scrollbar {
  display: none;
}

.dropdown-select__item {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 12px 24px;
  background: #1c1c1c;
  color: hsla(0, 0%, 100%, 0.5);
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

.dropdown-select__item:hover {
  background-color: rgb(39, 39, 39);
}

.rotate {
  transform: rotate(-360deg);
  transition: transform 0.3s ease;
}
</style>

<script setup>
const props = defineProps({
  servers: Array,
  selectedServer: Object,
  isDropdownOpen: Boolean,
})

const emits = defineEmits(['select'])

const toggleDropdown = () => emits('toggle')

const selectServer = (server) => {
  emits('select', server)
}
</script>