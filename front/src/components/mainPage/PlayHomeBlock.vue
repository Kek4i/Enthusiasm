<template>
  <div class="PlayHomeBlock">
    <div class="PageTitle_container">
      <h2 class="PageTitle_title">Информация</h2>
      <div class="PageTitle_line"></div>
    </div>
    <div class="PlayHomeBlock_cardsContainer">
      <div class="PlayHomeBlock_card play-card">
        <span class="PlayHomeBlock_title">3 простых шага, чтобы начать играть</span>
        <router-link to="/play" class="custom-button more-button" style="width: 120px; height: 20px;">НАЧАТЬ ИГРАТЬ</router-link>
      </div>
      <div class="PlayHomeBlock_card download-card">
        <span class="PlayHomeBlock_title">Скачай лаунчер</span>
        <router-link to="/play" class="custom-button more-button" style="width: 120px; height: 20px;">СКАЧАТЬ</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>

.PlayHomeBlock {
  width: 100%;
  padding: 64px 96px;
  flex-direction: column;
  gap: 32px;
  border-radius: 10px;
  background: hsla(0, 0%, 100%, .05);
}

.PageTitle_container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
}

.PageTitle_title {
  color: #fff;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0;
}

.PageTitle_line {
  width: 64px;
  height: 8px;
  border-radius: 4px;
  background: linear-gradient(132deg, #ff5f6d, #ffc371);
}

.PlayHomeBlock_cardsContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  gap: 20px;
  width: 100%;
  padding-top: 20px;
}

.PlayHomeBlock_card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 16px;
  padding: 26px 56px;
  border-radius: 30px;
  background: #1b1918;
  width: 442px;
  min-height: 181px;
  background-size: cover;
  flex: 0 1 calc(50% - 20px);
  max-width: 442px;
}

.PlayHomeBlock_title {
  max-width: 208px;
  color: #fff;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.play-card {
  background-image: url('@/assets/icons/play_bg.png');
  background-repeat: no-repeat;
}

.download-card {
  background-image: url('@/assets/icons/download_bg.png');
  background-repeat: no-repeat;
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
  background: rgba(255, 255, 255, 0.1);
  box-shadow: none;
  transform: scale(1.05) translateZ(0px);
}

.more-button {
  background: rgba(255, 255, 255, 0.05);
}

</style>

<script setup>

</script>