<template>
  <main class="layout-container">
    <div class="security-page">
      <div class="page-block">
        <TitleBlock
            title="Защита 2FA"
            description="Двухфакторная авторизация не позволит злоумышленникам войти под вашим аккаунтом, даже если они узнают ваш действующий пароль."
        />
        <FaBlock @open-modal="openModal" />
      </div>
      <div class="page-block">
        <TitleBlock
            title="Смена пароля"
        />
        <ChangePasswordForm />
      </div>
    </div>
    <SecurityModal v-if="isModalVisible" @close="closeModal" />
  </main>
</template>

<script setup>
import { ref } from 'vue';
import TitleBlock from './components/TitleBlock.vue';
import FaBlock from './components/TwoFactorAuthBlock.vue';
import ChangePasswordForm from './components/ChangePasswordForm.vue';
import SecurityModal from './components/SecurityModal.vue';

const isModalVisible = ref(false);

const openModal = () => {
  isModalVisible.value = true;
};

const closeModal = () => {
  isModalVisible.value = false;
};
</script>

<style scoped>

.layout-container {
  max-width: 1320px;
  position: relative;
  margin-top: 64px;
  margin-inline: auto;
  padding: 0 15px;
}

.security-page {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 32px;
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

@media (max-width: 1024px) {
  .security-page {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .page-block {
    padding: 35px 20px;
  }
}
</style>