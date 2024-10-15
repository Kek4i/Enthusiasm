<template>
  <div class="info-section">
    <div class="section-header">
      <h2 class="header-title">Информация</h2>
      <div class="header-underline"></div>
    </div>
    <div class="card-container">
      <div class="info-card play-card">
        <span class="card-title">3 простых шага, чтобы начать играть</span>
        <router-link to="/play" class="action-button start-button" style="width: 120px; height: 20px;">НАЧАТЬ ИГРАТЬ</router-link>
      </div>
      <div class="info-card download-card">
        <span class="card-title">Скачай лаунчер</span>
        <router-link to="/play" class="action-button download-button" style="width: 120px; height: 20px;">СКАЧАТЬ</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>

.info-section {
  padding: 64px 96px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  border-radius: 10px;
  background: hsla(0, 0%, 100%, .05);
  width: 100%;
}

.section-header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
}

.header-title {
  color: #fff;
  font-size: 36px;
  font-weight: 700;
  margin: 0;
}

.header-underline {
  width: 64px;
  height: 8px;
  border-radius: 4px;
  background: linear-gradient(132deg, #ff5f6d, #ffc371);
}

.card-container {
  display: flex;
  justify-content: center;
  gap: 20px;
  width: 100%;
  padding-top: 20px;
}

.info-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 16px;
  padding: 26px 56px;
  border-radius: 30px;
  background: #1b1918;
  width: calc(50% - 20px);
  min-height: 181px;
  background-size: cover;
  flex: 1 1 calc(50% - 20px);
  max-width: 442px;
}

.card-title {
  max-width: 208px;
  color: #fff;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
}

.play-card {
  background-image: url('@/assets/icons/play_bg.png');
  background-repeat: no-repeat;
}

.download-card {
  background-image: url('@/assets/icons/download_bg.png');
  background-repeat: no-repeat;
}

.action-button {
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

.action-button:hover {
  background: rgba(255, 255, 255, 0.1);
  box-shadow: none;
  transform: scale(1.05) translateZ(0px);
}

.start-button {
  background: rgba(255, 255, 255, 0.05);
}

.download-button {
  background: rgba(255, 255, 255, 0.05);
}

@media (max-width: 1023px) {

  .info-section {
    padding: 35px 20px;
  }

  .info-card {
    width: calc(100% - 20px);
  }

  .download-card {
    display: none;
  }
}

@media (max-width: 768px) {

  .header-title {
    font-size: 27px;
  }

}
</style>

<script setup>
</script>