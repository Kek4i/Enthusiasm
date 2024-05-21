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
              <h2>{{ slide.title }}</h2>
              <p>{{ slide.description }}</p>
              <img :src="slide.image" :alt="slide.title" />
              <div>
                <button>Играть</button>
                <button>Подробнее</button>
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
  margin-top: 32px;
  margin-inline: auto;
  display: flex;
  justify-content: space-between;
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
  justify-content: center;
  align-items: center;
  gap: 128px;
}

.page__container__slider {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.page__container__slider__slideContainer {
  display: flex;
  overflow: hidden;
  width: 100%;
  position: relative;
}

.slide {
  min-width: 100%;
  transition: transform 0.5s ease-in-out;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
}

.slide.active {
  opacity: 1;
  position: relative;
}

.page__container__slider__slideNav {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.page__container__slider__slideNav button {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  background-color: gray;
  cursor: pointer;
}

.page__container__slider__slideNav button.active {
  background: linear-gradient(132deg, rgb(255, 95, 109) 0%, rgb(255, 195, 113) 100%);
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
}

function nextSlide() {
  currentSlide.value = (currentSlide.value + 1) % slides.value.length;
}

onMounted(() => {
  intervalId = setInterval(nextSlide, 10000);
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>
