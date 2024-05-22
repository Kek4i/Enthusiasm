<template>
  <main class="main_content">
    <section class="page">
      <div class="page__container">
        <div class="page__container__slider">
          <div class="page__container__slider__slideContainer">
            <div
                v-for="(slide, index) in slides"
                :key="index"
                :class="['slide', { active: index === currentSlide }]"
            >
              <div class="page__container__slider__slideContainer__info">
                <div class="page__container__slider__slideContainer__title">{{ slide.title }}</div>
                <div class="page__container__slider__slideContainer__description">{{ slide.description }}</div>
                <div class="page__container__slider__slideContainer__buttons">
                  <router-link to="/play" class="custom-button">
                    Играть
                  </router-link>
                  <router-link to="/servers" class="custom-button">
                    Подробнее
                  </router-link>
                </div>
              </div>
              <div class="page__container__slider__slideContainer__image">
                <img :src="slide.image" :alt="slide.title" />
              </div>
            </div>
          </div>
          <div class="page__container__slider__slideNav">
            <button
                v-for="(slide, index) in slides"
                :key="index"
                @click="setSlide(index)"
                :class="{ active: index === currentSlide }"
            ></button>
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

.page__container__slider__slideContainer {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 100%;
  position: relative;
}

.slide {
  display: none;
  align-items: center;
}

.slide.active {
  display: flex;
}

.page__container__slider__slideContainer__info {
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 50%;
  text-align: left;
  align-items: flex-start;
}

.page__container__slider__slideContainer__image {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 50%;
  margin-left: 50px;
}

.page__container__slider__slideContainer__image img {
  width: 660px;
  height: 373px;
  object-fit: cover;
  border-radius: 6px;
}

.page__container__slider__slideContainer__title {
  color: #fff;
  font-size: 64px;
  font-weight: 800;
  text-transform: uppercase;
}

.page__container__slider__slideContainer__description {
  color: #fff;
  font-size: 24px;
}

.page__container__slider__slideContainer__buttons {
  display: flex;
  gap: 24px;
}

.page__container__slider__slideNav {
  display: flex;
  padding: 32px 10px;
  align-items: flex-start;
  gap: 24px;
}

.page__container__slider__slideNav button {
  width: 70px;
  height: 16px;
  border-radius: 8px;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.05);
  border: initial;
}

.page__container__slider__slideNav button.active {
  background: linear-gradient(132deg, rgb(255, 95, 109) 0%, rgb(255, 195, 113) 100%);
}

.custom-button {
  display: flex;
  padding: 16px 20px;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 8px;
  background: #ff9370;
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  text-decoration: none;
}

.custom-button:hover {
  background: #ff8261; /* Optionally add hover effects */
}

.custom-button:active {
  background: #ff7152; /* Optionally add active effects */
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