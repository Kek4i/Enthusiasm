<template>
  <main class="main_content">
    <section class="page">
      <div class="page__container">
        <div class="page__container__slider">
          <div class="slideContainer">
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
          <div class="slideNav">
            <button
                v-for="(slide, index) in slides"
                :key="index"
                @click="setSlide(index)"
                :class="{ active: index === currentSlide }"
            ></button>
          </div>
        </div>
        <div class="monitoring">
          <div class="monitoring-container">
            <div class="page-container-title">
              <h2 class="page-title">Мониторинг</h2>
              <div class="page-line"></div>
            </div>
            <div class="monitoring-online">

            </div>
          </div>
          <div class="serversContainer">

          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.main_content {
  max-width: 1320px;
  margin-top: 32px;
  margin-inline: auto;
  display: flex;
  width: 100%;
  padding: 0 16px;
}

.page {
  max-width: 1320px;
  width: 100%;
}

.page__container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.page__container__slider {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.slideContainer {
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

.slideNav {
  display: flex;
  padding: 32px 16px;
  align-items: flex-start;
  gap: 24px;
}

.slideNav button {
  width: 70px;
  height: 16px;
  border-radius: 8px;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.05);
  border: initial;
}

.slideNav button.active {
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

.monitoring{
  width: 100%;
  padding: 64px 96px;
  flex-direction: column;
  gap: 32px;
  border-radius: 10px;
  background: hsla(0, 0%, 100%, .05);
}

.monitoring-container{
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.page-container-title{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
}

.page-title{
  color: #fff;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0;
}

.page-line{
  width: 64px;
  height: 8px;
  border-radius: 4px;
  background: linear-gradient(132deg, #ff5f6d, #ffc371);
}
</style>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const slides = ref([
  {
    title: 'HARDTECH',
    description:
        'Сервер с постепенным техническим развитием. Начни с бронзовых механизмов, изучай новые технологии и дойди до термоядерного синтеза!',
    image: 'src/components/icons/hardtech.webp',
  },
  {
    title: 'MI:Foundation',
    description:
        'Технически сложный и захватывающий модпак с элементами магии, ориентированный на автоматизацию и масштабирование вашего производства!',
    image: 'src/components/icons/mif.webp',
  },
  {
    title: 'IND:UPGRADE',
    description:
        'Уникальный сервер на базе мода Industrial Upgrade, предлагающий огромное количество технологий и постепенную прогрессию улучшения производства.',
    image: 'src/components/icons/apgrade.webp',
  },
  {
    title: 'HITECH',
    description:
        'Сервер ставший классикой технологического Майнкрафта со всеми любимыми HiTech модами.',
    image: 'src/components/icons/hitech.webp',
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