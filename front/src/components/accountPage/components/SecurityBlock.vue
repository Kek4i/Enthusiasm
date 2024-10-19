<template>
  <div class="block button-block">
    <div class="title-container">
      <h2 class="title">Защита аккаунта</h2>
      <div class="title-line"></div>
    </div>
    <div class="buttons">
      <router-link to="/account/security">
        <button class="btn btn-transparent btn-profile">Безопасность</button>
      </router-link>
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
  gap: 24px;
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

@media (max-width: 768px) {
  .title {
    font-size: 27px;
  }
}

@media (max-width: 1024px) {
  .block {
    padding: 35px 20px;
  }
}
</style>