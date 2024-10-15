<template>
  <div class="block vote-block">
    <div class="title-container">
      <h2 class="title">Голосование</h2>
      <div class="title-line"></div>
    </div>
    <div class="buttons">
      <a href="https://minecraftrating.ru/projects/enthusiasm/">
        <button class="btn btn-transparent btn-profile">
          <span>McRating</span>
          <span class="bonus-wrapper">
            <span>+20</span>
            <img src="@/assets/icons/coins.svg" alt="coins" width="20" height="26">
          </span>
        </button>
      </a>
      <a href="https://minecraft-servers.ru/server/enthusiasm">
        <button class="btn btn-transparent btn-profile">
          <span>McServers</span>
          <span class="bonus-wrapper">
            <span>+10</span>
            <img src="@/assets/icons/coins.svg" alt="coins" width="20" height="26">
          </span>
        </button>
      </a>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
h2 {
  margin: 0;
}

a {
  text-decoration: none;
}

.block {
  display: flex;
  width: 100%;
  padding: 32px 64px;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  border-radius: 10px;
  background: hsla(0, 0%, 100%, .05);
  -webkit-backdrop-filter: blur(2px);
  backdrop-filter: blur(2px);
}

.title-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
}

.title {
  color: #fff;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.title-line {
  width: 64px;
  height: 8px;
  border-radius: 4px;
  background: linear-gradient(132deg, #ff5f6d, #ffc371);
}

.buttons {
  display: flex;
  flex-direction: row;
  gap: 16px;
}

.btn {
  display: flex;
  padding: 16px 20px;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 8px;
  background: hsla(0, 0%, 100%, .05);
  border: initial;
  color: #fff;
  font-size: 19px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.btn:hover {
  transform: scale(1.05) translateZ(0px);
}

.btn-profile {
  display: flex;
  gap: .5rem;
}

.bonus-wrapper {
  display: flex;
  align-items: center;
  gap: 4px;
}
</style>