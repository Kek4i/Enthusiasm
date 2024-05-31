<template>
  <div class="page__slider">
    <div class="slide-container">
      <div
          v-for="(slide, index) in slides"
          :key="index"
          :class="['slide', { active: index === currentSlide }]"
      >
        <div class="info">
          <div class="title">{{ slide.title }}</div>
          <div class="description">{{ slide.description }}</div>
          <div class="buttons">
            <router-link to="/play" class="custom-button">Начать играть</router-link>
            <router-link :to="serverLinks[currentSlide]" class="custom-button more-button">Подробнее</router-link>
          </div>
        </div>
        <div class="image">
          <img :src="slide.image" :alt="slide.title" />
        </div>
      </div>
    </div>
    <div class="slide-nav">
      <button
          v-for="(slide, index) in slides"
          :key="index"
          @click="setSlide(index)"
          :class="{ active: index === currentSlide }"
      ></button>
    </div>
  </div>
</template>

<style scoped>

.page__slider {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.slide-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 100%;
  position: relative;
  padding: 16px;
  box-sizing: border-box;
}

.slide {
  display: none;
  align-items: center;
}

.slide.active {
  display: flex;
}

.info {
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 50%;
  text-align: left;
  align-items: flex-start;
}

.image {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 50%;
  margin-left: 40px;
}

.image img {
  width: 660px;
  height: 373px;
  object-fit: cover;
  border-radius: 6px;
}

.title {
  color: #fff;
  font-size: 64px;
  font-weight: 800;
  text-transform: uppercase;
}

.description {
  color: #fff;
  font-size: 24px;
}

.buttons {
  display: flex;
  gap: 24px;
}

.slide-nav {
  display: flex;
  padding: 32px 16px;
  align-items: flex-start;
  gap: 24px;
}

.slide-nav button {
  width: 70px;
  height: 16px;
  border-radius: 8px;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.05);
  border: initial;
}

.slide-nav button.active {
  background: linear-gradient(132deg, rgb(255, 95, 109) 0%, rgb(255, 195, 113) 100%);
}

.custom-button {
  display: flex;
  padding: 16px 20px;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 8px;
  background: linear-gradient(132deg, rgb(255, 95, 109) 0%, rgb(255, 195, 113) 100%);
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none;
  white-space: nowrap;
  transition: transform 0.3s ease;
}

.custom-button:hover {
  box-shadow: rgb(255, 147, 112) 0px 10px 15px -5px;
  transform: scale(1.05);
}

.more-button {
  background: rgba(255, 255, 255, 0.05);
}

.more-button:hover {
  background: rgba(255, 255, 255, 0.1);
  box-shadow: none;
  transform: scale(1.05);
}
</style>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const slides = ref([
  {
    title: 'HARDTECH',
    description: 'Сервер с постепенным техническим развитием. Начни с бронзовых механизмов, изучай новые технологии и дойди до термоядерного синтеза!',
    image: 'src/assets/icons/hardtech.webp',
  },
  {
    title: 'HITECH',
    description: 'Сервер новейших технологий и возможностей. Оригинальные разработки, новые моды, крафты, квесты и уникальная генерация мира ждёт тебя!',
    image: 'src/assets/icons/hitech.webp',
  },
  {
    title: 'MI:Foundation',
    description: 'Технически сложный и захватывающий модпак с элементами магии, ориентированный на автоматизацию и масштабирование вашего производства!',
    image: 'src/assets/icons/mif.webp',
  },
  {
    title: 'IND:UPGRADE',
    description: 'Уникальный сервер на базе мода Industrial Upgrade, предлагающий огромное количество технологий и постепенную прогрессию улучшения производства.',
    image: 'src/assets/icons/apgrade.webp',
  },
]);

const serverLinks = ref([
  '/servers/hardtech',
  '/servers/mif',
  '/servers/indupgrade',
  '/servers/hitech',
]);

const currentSlide = ref(0);
let intervalId;

function setSlide(index) {
  currentSlide.value = index;
  resetTimer();
}

function nextSlide() {
  currentSlide.value = (currentSlide.value + 1) % slides.value.length;
}

function resetTimer() {
  clearInterval(intervalId);
  intervalId = setInterval(nextSlide, 10000);
}

onMounted(() => {
  intervalId = setInterval(nextSlide, 10000);
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>