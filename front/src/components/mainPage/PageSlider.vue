<template>
  <div class="slider-page">
    <div class="slider-container">
      <div
          v-for="(slide, index) in slides"
          :key="index"
          :class="['slider-slide', { 'slider-slide--active': index === currentSlide }]"
      >
        <div class="slide-info">
          <div class="slide-title">{{ slide.title }}</div>
          <div class="slide-description">{{ slide.description }}</div>
          <div class="slide-buttons">
            <router-link to="/play" class="button button--primary">Начать играть</router-link>
            <router-link :to="serverLinks[currentSlide]" class="button button--secondary">Подробнее</router-link>
          </div>
        </div>
        <div class="slide-image">
          <img :src="slide.image" :alt="slide.title" />
          <button class="slider-navigation__button slider-navigation__button--prev" @click="prevSlide">
            <img src="@/assets/icons/arrow.svg" alt="Предыдущий слайд" />
          </button>
          <button class="slider-navigation__button slider-navigation__button--next" @click="nextSlide">
            <img src="@/assets/icons/arrow.svg" alt="Следующий слайд" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.slider-page {
  display: flex;
  flex-direction: column;
  width: 100%;
  font-family: 'Inter', sans-serif;
}

.slider-container {
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

.slider-slide {
  display: none;
  align-items: center;
}

.slider-slide--active {
  display: flex;
}

.slide-info {
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 50%;
  text-align: left;
  align-items: flex-start;
}

.slide-image {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 50%;
  margin-left: 40px;
  position: relative;
}

.slide-image img {
  width: 660px;
  height: 373px;
  object-fit: cover;
  border-radius: 6px;
}

.slide-title {
  color: #fff;
  font-size: 64px;
  font-weight: 800;
  text-transform: uppercase;
}

.slide-description {
  color: #fff;
  font-size: 24px;
}

.slide-buttons {
  display: flex;
  gap: 24px;
}

.slider-navigation__button {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: hsla(0, 0%, 100%, .1);
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  border: none;
  transition: opacity 0.3s ease;
}

.slider-navigation__button--prev {
  left: 0px;
}

.slider-navigation__button--next {
  right: 0px;
  transform: translateY(-50%) rotate(180deg);
}

.slider-navigation__button img {
  width: 20px;
  height: 20px;
}

.slider-navigation__button:hover {
  opacity: 0.95;
}

.slider-navigation__button:not(:hover) {
  opacity: 0.5;
}

.button {
  display: flex;
  padding: 16px 20px;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 8px;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none;
  white-space: nowrap;
  transition: transform 0.3s ease;
}

.button--primary {
  background: linear-gradient(132deg, rgb(255, 95, 109) 0%, rgb(255, 195, 113) 100%);
}

.button--primary:hover {
  box-shadow: rgb(255, 147, 112) 0px 10px 15px -5px;
  transform: scale(1.05);
}

.button--secondary {
  background: rgba(255, 255, 255, 0.05);
}

.button--secondary:hover {
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

function prevSlide() {
  currentSlide.value = (currentSlide.value - 1 + slides.value.length) % slides.value.length;
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