<template>
  <div class="page-block">
    <div class="header">
      <h2 class="section-title">Бонусы</h2>
      <div class="divider"></div>
    </div>
    <div class="vote-center">
      <h3 class="sub-title">Голосуйте за наш проект!</h3>
      <div class="vote-list">
        <div class="vote-item">
          <span class="vote-title">McRating</span>
          <div class="reward-wrapper">
            <span>20</span>
            <img alt="coins" src="@/assets/icons/accountPage/coins.svg" width="32" height="32">
          </div>
          <a target="_blank" href="https://minecraftrating.ru/projects/enthusiasm/">
            <button class="vote-button">Голосовать</button>
          </a>
        </div>
        <div class="vote-item">
          <span class="vote-title">McServers</span>
          <div class="reward-wrapper">
            <span>20</span>
            <img alt="coins" src="@/assets/icons/accountPage/coins.svg" width="32" height="32">
          </div>
          <a target="_blank" href="https://minecraft-servers.ru/server/enthusiasm">
            <button class="vote-button">Голосовать</button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

a {
  text-decoration: none;
}

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

.vote-list {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px;
}

.vote-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 32px;
  border-radius: 10px;
  background: hsla(0, 0%, 100%, .05);
}

.vote-title {
  color: #fff;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
}

.reward-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  color: #fff;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
}

.vote-button {
  display: flex;
  padding: 16px 20px;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 8px;
  background: linear-gradient(132deg, rgb(255, 95, 109) 0%, rgb(255, 195, 113) 100%);
  color: #fff;
  font-size: 19px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  border: initial;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.vote-button:hover {
  box-shadow: rgb(255, 195, 113) 0 20px 50px -10px;
  transform: scale(1.05) translateZ(0px);
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

  .vote-list {
    flex-direction: column;
  }
}

</style>

<script setup>

</script>