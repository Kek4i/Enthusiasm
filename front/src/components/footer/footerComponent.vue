<template>
  <footer class="container__footer">
    <div class="container__footer__logo">
      <router-link class="container__footer__logo__link" to="/">
        <img alt="logo" src="../icons/logo.svg">
      </router-link>
      <span class="container__footer__logo__link__subText">Copyright © 2021 - 2024</span>
    </div>
    <div class="container__footer__info">
      <span>Полезная информация</span>
    </div>
    <div class="container__footer__users">
      <span>Для пользователей</span>
    </div>
    <div class="container__footer__logoWrapper"></div>
  </footer>
</template>

<style scoped>

.container__footer{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
  gap: 20px;
  justify-content: space-between;
  padding: 48px 94px 48px 96px;
  margin: 128px auto 32px;
  max-width: 1316px;
  border-radius: 16px;
  background: hsla(0, 0%, 100%, .05);
  backdrop-filter: blur(2px);
}

.container__footer__logo{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 8px;
}

.container__footer__logo__link{
  font-style: italic;
  font-weight: 800;
  z-index: 10;
}

.container__footer__logo__link__subText{
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: hsla(0, 0%, 100%, .05);
}

</style>

<script setup>

</script>