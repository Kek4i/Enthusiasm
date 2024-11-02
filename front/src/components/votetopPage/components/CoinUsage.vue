<template>
  <div class="page-block">
    <div class="header">
      <h2 class="section-title">Что делать с коинами?</h2>
      <div class="divider"></div>
    </div>
    <div class="description">
      Голосуя за проект ты будешь получать Коины. <br>
      За них можно покупать специальный кейс или же торговать с игроками, распределив их на сервер где ты играешь.
    </div>
    <div class="vote-center">
      <h3 class="sub-title">За коины можно купить:</h3>
      <div class="rewards-list">
        <div class="reward-item">
          <img alt="diamond" src="@/assets/icons/votetopPage/item-diamond.webp" />
          <span>вещи на сервере</span>
        </div>
        <div class="reward-item">
          <img alt="diamond" src="@/assets/icons/votetopPage/case.webp" />
          <span>кейсы</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

h2,h3 {
  margin: 0;
}

.page-block {
  display: flex;
  width: 100%;
  padding: 64px 96px;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  border-radius: 10px;
  background: hsla(0, 0%, 100%, .05);
  -webkit-backdrop-filter: blur(2px);
  backdrop-filter: blur(2px);
}

.header {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
}

.section-title {
  color: #fff;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.divider {
  width: 64px;
  height: 8px;
  border-radius: 4px;
  background: linear-gradient(132deg, #ff5f6d, #ffc371);
}

.vote-center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  width: 100%;
}

.sub-title {
  color: #fff;
  font-size: 36px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  text-transform: uppercase;
}

.rewards-list {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px;
}

.description {
  color: #fff;
}

.reward-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  width: 220px;
  height: 227px;
  border-radius: 10px;
  background: hsla(0, 0%, 100%, .05);
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  text-transform: uppercase;
}

@media (max-width: 768px) {
  .page-block {
    padding: 35px 20px;
  }

  .section-title {
    font-size: 27px;
  }

  .sub-title {
    font-size: 24px;
  }

  .rewards-list {
    flex-direction: column;
  }
}

</style>

<script setup>

</script>