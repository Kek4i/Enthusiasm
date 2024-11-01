<template>
  <main class="main-content">
    <div class="page-title">
      <div class="page-title__container">
        <h2 class="page-title__title">Как начать играть?</h2>
        <div class="page-title__line"></div>
      </div>
      <div class="steps">
        <div class="step">
          <div class="step__number">1</div>
          <router-link class="step__name" to="/register">Зарегистрируйтесь</router-link>
        </div>
        <div class="step">
          <div class="step__number">2</div>
          <div class="step__name">Скачайте лаунчер</div>
        </div>
        <div class="clients">
          <a class="client" target="_blank" href="https://enthusiasm.world/Enthusiasm.exe">
            <img src="../../assets/icons/playPage/Windows.png" alt="Windows">
          </a>
          <a class="client" target="_blank" href="https://enthusiasm.world/Enthusiasm.jar">
            <img src="../../assets/icons/playPage/Apple.png" alt="Apple">
          </a>
        </div>
        <div class="step">
          <div class="step__number">3</div>
          <router-link class="step__name" to="/servers">Выберите сервер</router-link>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.main-content {
  max-width: 1320px;
  position: relative;
  margin-top: 64px;
  margin-inline: auto;
  padding: 0 15px;
}

.page-title {
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

.page-title__container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
}

.page-title__title {
  color: #fff;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0;
}

.page-title__line {
  width: 64px;
  height: 8px;
  border-radius: 4px;
  background: linear-gradient(132deg, #ff5f6d, #ffc371);
}

.steps {
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
}

.step {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 8px 10px;
  border-radius: 8px;
  background: hsla(0, 0%, 100%, .05);
}

.step__number {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 51px;
  padding: 6px;
  font-weight: 700;
  font-size: 40px;
  background: linear-gradient(132deg, #ff5f6d, #ffc371);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.step__name {
  font-weight: 500;
  font-size: 24px;
  text-decoration: none;
  color: #fff;
}

.clients {
  display: flex;
  gap: 20px;
}

.client {
  background: hsla(0, 0%, 100%, .05);
  padding: 20px;
  border-radius: 10px;
}

@media (max-width: 1024px) {
  .clients {
    display: none;
  }
}

@media (max-width: 768px) {
  .main-content {
    margin-top: 32px;
  }

  .page-title {
    padding: 35px 20px;
  }

  .page-title__title {
    font-size: 27px;
  }
}
</style>

<script setup>
</script>