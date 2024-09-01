<template>
  <footer class="footer">
    <div class="footer__logo-section">
      <router-link class="footer__logo-link" to="/">
        <img alt="logo" src="../../assets/icons/logo.png">
      </router-link>
      <span class="footer__subtext">Copyright © 2021 - 2024</span>
    </div>

    <div class="footer__info-section">
      <span class="footer__info-title">Полезная информация</span>
      <router-link to="/play">
        <span class="footer__info-link">Начать играть</span>
      </router-link>
      <router-link to="/play">
        <span class="footer__info-link">Скачать лаунчер</span>
      </router-link>
      <router-link to="/rules">
        <span class="footer__info-link">Правила</span>
      </router-link>
      <a href="https://enthusiasm.world/forum/" target="_blank">
        <span class="footer__info-link">Форум</span>
      </a>
    </div>

    <div class="footer__info-section">
      <span class="footer__info-title">Для пользователей</span>
      <router-link to="/rules/license">
        <span class="footer__info-link">Лицензионное соглашение</span>
      </router-link>
      <router-link to="/rules/policy">
        <span class="footer__info-link">Политика конфиденциальности</span>
      </router-link>
      <router-link to="/other/admins">
        <span class="footer__info-link">Наша команда</span>
      </router-link>
    </div>

    <div class="footer__social-section">
      <div class="footer__social-links">
        <a href="https://discord.com/invite/gg982TxU84" target="_blank">
          <img alt="discord-logo" src="../../assets/icons/discord.png">
        </a>
        <a href="https://t.me/enthusiasmworld" target="_blank">
          <img alt="telegram-logo" src="../../assets/icons/telegram.png">
        </a>
        <a href="https://www.youtube.com/RivaVivaOff" target="_blank">
          <img alt="youtube-logo" src="../../assets/icons/youtube.png">
        </a>
      </div>
    </div>

  </footer>
</template>

<style scoped>
a {
  cursor: pointer;
  text-decoration: none;
  color: hsla(0, 0%, 100%, 0.5);
}

.footer {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  justify-content: space-between;
  padding: 48px 94px;
  margin: 128px auto 32px;
  max-width: 1316px;
  border-radius: 16px;
  background: hsla(0, 0%, 100%, 0.05);
  backdrop-filter: blur(2px);
  width: 100%;
  box-sizing: border-box;
}

.footer__logo-section {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.footer__logo-link {
  font-style: italic;
  font-weight: 800;
  z-index: 10;
}

.footer__subtext {
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: hsla(0, 0%, 100%, 0.5);
}

.footer__info-section {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.footer__info-title {
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #fff;
}

.footer__info-link {
  transition: color 0.4s ease;
}

.footer__info-link:hover {
  color: rgb(255, 183, 85);
}

.footer__social-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.footer__social-links {
  display: flex;
  gap: 8px;
}
</style>

<script setup>
</script>
