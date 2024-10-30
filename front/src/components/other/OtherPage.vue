<template>
  <main class="layout-container">
    <div class="content-wrapper">
      <div class="block-container">
        <div class="title-wrapper">
          <h2 class="title-text">Прочее</h2>
          <div class="title-underline"></div>
        </div>
        <div class="link-list">
          <div
              v-for="(link, index) in links"
              :key="index"
              @click="link.isModal ? openModal(link) : $router.push(link.path)"
              :class="['link-item', link.disabled ? 'link-item--disabled' : '']"
          >
            <img :src="link.icon" :alt="link.alt" class="link-image" />
            <div class="link-text-wrapper">
              <span class="link-title">{{ link.title }}</span>
              <span class="link-description">{{ link.description }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <SupportModal
        v-if="showModal"
        :title="modalData.title"
        :description="modalData.description"
        :visible="showModal"
        @close="closeModal"
    />
  </main>
</template>

<style scoped>
a {
  text-decoration: none;
}

.layout-container {
  max-width: 1320px;
  position: relative;
  margin-top: 64px;
  margin-inline: auto;
  padding: 0 15px;
}

.content-wrapper {
  display: flex;
  flex-direction: column;
}

.block-container {
  display: flex;
  padding: 64px 96px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 32px;
  border-radius: 10px;
  background: hsla(0, 0%, 100%, .05);
  -webkit-backdrop-filter: blur(2px);
  backdrop-filter: blur(2px);
}

.title-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
}

.title-text {
  color: #fff;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0;
}

.title-underline {
  width: 64px;
  height: 8px;
  border-radius: 4px;
  background: linear-gradient(132deg, #ff5f6d, #ffc371);
}

.link-list {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.link-item {
  display: flex;
  gap: 16px;
  padding: 18px 32px;
  border-radius: 10px;
  background: hsla(0, 0%, 100%, .05);
  transition: transform 0.2s ease;
  cursor: pointer;
}

.link-item:not(.link-item--disabled):hover {
  transform: scale(1.05);
}

.link-item:not(.link-item--disabled):active {
  transform: scale(1);
}

.link-image {
  width: 120px;
  height: 120px;
  color: transparent;
}

.link-text-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 8px;
}

.link-title {
  color: #fff;
  font-size: 32px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
}

.link-description {
  color: #fff;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.link-item--disabled {
  filter: grayscale(100%);
  opacity: 0.5;
  cursor: auto;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

@media (max-width: 768px) {
  .layout-container {
    margin-top: 32px;
  }

  .block-container {
    padding: 35px 20px;
  }

  .title-text {
    font-size: 27px;
  }

  .link-item {
    flex-direction: column;
    align-items: center;
  }

  .link-title {
    font-size: 28px;
    font-weight: 600;
  }
}

</style>

<script setup>
import { ref } from 'vue';
import SupportModal from './components/SupportModal.vue';
import adminsCreateImage from '@/assets/icons/admins.png';
import bonusCreateImage from '@/assets/icons/bonus.png';
import vacationCreateImage from '@/assets/icons/vacation.png';
import supportCreateImage from "@/assets/icons/support.webp";

const showModal = ref(false);
const modalData = ref({});

const openModal = (link) => {
  modalData.value = link;
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};

const links = ref([
  {
    path: '/other/admins',
    icon: adminsCreateImage,
    title: 'Команда проекта',
    description: 'Те самые люди, которые делают игру лучше и приятнее!',
    alt: 'Команда проекта',
    disabled: false,
    isModal: false
  },
  {
    path: '',
    icon: supportCreateImage,
    title: 'Поддержка',
    description: 'Ответы на большинство вопросов, различные ошибки и способы их решения.',
    alt: 'Поддержка',
    disabled: false,
    isModal: true
  },
  {
    path: '/account/votetop',
    icon: bonusCreateImage,
    title: 'Бонусы',
    description: 'Поддерживай наш проект и получай бонусы!',
    alt: 'Бонусы',
    disabled: false,
    isModal: false
  },
  {
    path: '/other/vacancies',
    icon: vacationCreateImage,
    title: 'Вакансии',
    description: 'Ищем людей, у которых есть желание присоединиться к команде проекта.',
    alt: 'Вакансии',
    disabled: false,
    isModal: false
  }
]);
</script>