<template>
  <footer class="container__footer">

    <div class="container__footer__logo">
      <router-link class="container__footer__logo__link" to="/">
        <img alt="logo" src="../icons/logo.svg">
      </router-link>
      <span class="container__footer__logo__link__subText">Copyright © 2021 - 2024</span>
    </div>

    <div class="container__footer__info">
      <span class="container__footer__info__title">Полезная информация</span>
      <router-link to="/play">
        <span class="container__footer__info__link">Начать играть</span>
      </router-link>
      <router-link to="/play">
        <span class="container__footer__info__link">Скачать лаунчер</span>
      </router-link>
      <router-link to="/auth">
        <span class="container__footer__info__link">Регистрация</span>
      </router-link>
      <router-link to="/rules">
        <span class="container__footer__info__link">Правила проекта</span>
      </router-link>
      <a href="https://enthusiasm.world/forum/" target="_blank">
        <span class="container__footer__info__link">Форум</span>
      </a>
    </div>

    <div class="container__footer__info">
      <span class="container__footer__info__title">Для пользователей</span>
      <router-link to="/">
        <span class="container__footer__info__link">Лицензионное соглашение</span>
      </router-link>
      <router-link to="/">
        <span class="container__footer__info__link">Политика обработки персональных данных</span>
      </router-link>
    </div>

    <div class="container__footer__logoWrapper">
      <div class="container__footer__logoWrapper__link">
        <a href="https://discord.com/invite/gg982TxU84" target="_blank">
          <img alt="discord-logo" src="../icons/discord.svg">
        </a>
        <a href="https://t.me/enthusiasmworld" target="_blank">
          <img alt="telegram-logo" src="../icons/telegram.svg">
        </a>
        <a href="https://www.youtube.com/RivaVivaOff" target="_blank">
          <img alt="youtube-logo" src="../icons/youtube.svg">
        </a>
      </div>
    </div>

  </footer>
</template>

<style scoped>

a{
  cursor: pointer;
  text-decoration: none;
  color: hsla(0, 0%, 100%, .5);
}

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
  font-family: 'Montserrat', sans-serif;
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
  color: hsla(0, 0%, 100%, .5);
}

.container__footer__info{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 8px;
}

.container__footer__info__title{
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #fff;
}

.container__footer__info__link {
  transition: color 0.4s ease;
}

.container__footer__info__link:hover {
  color: rgb(255, 183, 85);
}

.container__footer__logoWrapper{
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.container__footer__logoWrapper__link{
  display: flex;
  gap: 8px;
}

</style>

<script setup>

</script>