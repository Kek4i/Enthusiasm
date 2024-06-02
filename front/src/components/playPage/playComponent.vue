<template>
  <main class="main_content">
    <section class="page">
      <h1 class="page-title">Как начать играть</h1>
      <div class="page_stepsContainer">
        <div class="page-step">
          <h2 class="page-title">ШАГ 1</h2>
          <h3>Зарегистрируйся</h3>
          <h4>Регистрация доступна из любой страны.</h4>
          <router-link class="page-link" to="/register">Регистрация</router-link>
        </div>
        <div class="page-step">
          <h2 class="page-title">ШАГ 2</h2>
          <h3>Установи наш лаунчер</h3>
          <h4>Чтобы играть на наших серверах. Лаунчер доступен для Windows и MacOS</h4>
          <div class="page-link" @click="showModal = true">Скачать лаунчер</div>
        </div>
        <div class="page-step">
          <h2 class="page-title">ШАГ 3</h2>
          <h3>Выбери сервер</h3>
          <h4>У нас множество разных серверов. Выбери свой любимый!</h4>
          <router-link class="page-link" to="/servers">Наши сервера</router-link>
        </div>
      </div>
    </section>
    <LauncherModal :show="showModal" @close="showModal = false" />
  </main>
</template>

<style scoped>

.main_content {
  max-width: 1320px;
  margin-top: 32px;
  margin-inline: auto;
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.page-title {
  margin-bottom: 32px;
  font-weight: 800;
  font-size: 48px;
  line-height: 58px;
  text-transform: uppercase;
  color: #fff;
}

.page_stepsContainer {
  display: flex;
  gap: 24px;
}

.page-step {
  position: relative;
  padding: 16px 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 304px;
  height: 336px;
  background: hsla(0, 0%, 100%, .05);
  border-radius: 10px;
  overflow: hidden;
}

.page-link {
  position: absolute;
  padding: 16px;
  left: 0;
  bottom: 0;
  width: calc(100% - 32px);
  height: 50px;
  background: hsla(0, 0%, 100%, .1);
  border-radius: 0 0 10px 10px;
  font-weight: 800;
  font-size: 24px;
  line-height: 29px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  color: #fff;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  text-decoration: none;
}

h1, h2, h3, h4, h5, h6 {
  margin: 0;
}

.page_stepsContainer h2 {
  margin-bottom: 8px;
}

.page_stepsContainer h3 {
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #fff;
}

.page_stepsContainer h4 {
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  color: hsla(0, 0%, 100%, .5);
}

</style>

<script>
import { ref } from 'vue';
import LauncherModal from './LauncherModal.vue';

export default {
  components: {
    LauncherModal
  },
  setup() {
    const showModal = ref(false);

    return { showModal };
  }
}
</script>