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
          <div class="slide-buttons" v-if="!isMobile">
            <router-link to="/play" class="button button--primary">Начать играть</router-link>
            <router-link :to="serverLinks[currentSlide]" class="button button--secondary">Подробнее</router-link>
          </div>
        </div>
        <div class="slide-image">
          <img :src="slide.image" :alt="slide.title" />
          <button class="slider-navigation__button slider-navigation__button--prev" @click="prevSlide">
            <img src="@/assets/icons/arrow.png" alt="Предыдущий слайд" />
          </button>
          <button class="slider-navigation__button slider-navigation__button--next" @click="nextSlide">
            <img src="@/assets/icons/arrow.png" alt="Следующий слайд" />
          </button>
        </div>
        <div class="slide-buttons-mobile" v-if="isMobile">
          <router-link to="/play" class="button button--primary">Начать играть</router-link>
          <router-link :to="serverLinks[currentSlide]" class="button button--secondary">Подробнее</router-link>
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
  width: 100%;
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

.slider-slide--active {
  display: flex;
  opacity: 1;
}

.slide-info {
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 50%;
  text-align: left;
  align-items: flex-start;
}

.slide-title {
  color: #fff;
  font-size: 60px;
  font-weight: 800;
  text-transform: uppercase;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.slide-description {
  color: #fff;
  font-size: 24px;
}

.slide-buttons {
  display: flex;
  gap: 24px;
}

.slide-buttons-mobile {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
  width: 100%;
}

.slide-image {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  margin-left: 40px;
}

.slide-image img {
  height: 100%;
  width: 100%;
  inset: 0;
  color: transparent;
  border-radius: 10px;
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
  z-index: 10;
}

.slider-navigation__button--prev {
  left: 10px;
}

.slider-navigation__button--next {
  right: 10px;
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
  box-sizing: border-box;
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

@media (max-width: 1270px) {
  .slide-title {
    font-size: 44px;
  }

  .slide-description {
    font-size: 20px;
  }
}

@media (max-width: 1024px) {
  .slider-container {
    flex-direction: column;
    align-items: flex-start;
  }

  .slide-image {
    margin-left: 0;
    margin-top: 16px;
  }

  .slide-info {
    max-width: 100%;
  }

  .slider-slide {
    flex-direction: column;
  }

  .slide-title {
    font-size: 27px;
  }

  .slide-description {
    font-size: 20px;
  }

  .slide-buttons {
    display: none; /* Скрыть кнопки в slide-info */
  }
}
</style>

<script setup>
import {ref, onMounted, onBeforeUnmount} from 'vue';

const slides = ref([
  {
    title: 'HARDTECH',
    description: 'Сервер с постепенным техническим развитием. Начни с бронзовых механизмов, изучай новые технологии и дойди до термоядерного синтеза!',
    image: 'src/assets/icons/hardtech.webp',
  },
  {
    title: 'TERRAFIRMACREATE',
    description: 'Сервер, предлагающий уникальный геймплей, где реалистичная выживаемость и сложные механизмы сочетаются с автоматизацией процессов.',
    image: 'src/assets/icons/terrafirmacreate.webp',
  },
  {
    title: 'HITECH',
    description: 'Сервер новейших технологий и возможностей. Оригинальные разработки, новые моды, крафты, квесты и уникальная генерация мира ждёт тебя!',
    image: 'src/assets/icons/hitech.webp',
  },
  {
    title: 'IND:UPGRADE',
    description: 'Уникальный сервер на базе мода Industrial Upgrade, предлагающий огромное количество технологий и постепенную прогрессию улучшения производства.',
    image: 'src/assets/icons/apgrade.png',
  },
]);

const serverLinks = ref([
  '/servers/hardtech',
  '/servers/terrafirmacreate',
  '/servers/hitech',
  '/servers/indupgrade',
]);

const currentSlide = ref(0);
let slideInterval = null;

const isMobile = ref(window.innerWidth < 1024);

function nextSlide() {
  currentSlide.value = (currentSlide.value + 1) % slides.value.length;
  resetInterval();
}

function prevSlide() {
  currentSlide.value = (currentSlide.value - 1 + slides.value.length) % slides.value.length;
  resetInterval();
}

function resetInterval() {
  clearInterval(slideInterval);
  startAutoSlide();
}

function startAutoSlide() {
  slideInterval = setInterval(nextSlide, 20000);
}

onMounted(() => {
  startAutoSlide();
  window.addEventListener('resize', handleResize);
});

onBeforeUnmount(() => {
  clearInterval(slideInterval);
  window.removeEventListener('resize', handleResize);
});

function handleResize() {
  isMobile.value = window.innerWidth < 1024;
}
</script>