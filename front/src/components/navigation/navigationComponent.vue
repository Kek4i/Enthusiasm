<template>
  <header>
    <nav class="container__navigation">
      <router-link class="container__navigation__logo" to="/">
        <img alt="logo" src="../icons/logo.svg">
      </router-link>
      <ul class="container__navigation__item">
        <li class="container__navigation__item__list">
          <router-link class="container__navigation__item__list__links" to="/">Главная</router-link>
        </li>
        <li class="container__navigation__item__list">
          <router-link class="container__navigation__item__list__links" to="/servers">Сервера</router-link>
        </li>
        <li class="container__navigation__item__list">
          <router-link class="container__navigation__item__list__links" to="/rules">Правила</router-link>
        </li>
        <li class="container__navigation__item__list">
          <router-link class="container__navigation__item__list__links" to="/store">Магазин</router-link>
        </li>
        <li class="container__navigation__item__list">
          <a class="container__navigation__item__list__links" href="https://enthusiasm.world/forum/" target="_blank">Форум</a>
        </li>
      </ul>
      <button class="container__navigation__item__button">Личный кабинет</button>
    </nav>
  </header>
</template>

<style scoped>
a {
  color: inherit;
  text-decoration: none;
}

.container__navigation {
  padding: 24px 10px;
  max-width: 1316px;
  width: 100%;
  margin-inline: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
  background: hsla(0, 0%, 100%, .05);
  backdrop-filter: blur(2px);
  border-radius: 16px;
  font-family: 'Montserrat', sans-serif;
}

.container__navigation__logo {
  font-style: italic;
  font-weight: 800;
  z-index: 10;
}

.container__navigation__item {
  display: flex;
  flex-direction: row;
  gap: 32px;
  margin-left: 36px;
  list-style-type: none;
}

.container__navigation__item__list {
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 0;
}

.container__navigation__item__list__links {
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-transform: uppercase;
  color: #fff;
  position: relative;
}

.container__navigation__item__list__links::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -50px;
  height: 4px;
  border-radius: 6px;
  width: 0;
  background: linear-gradient(132deg, rgb(255, 95, 109) 0%, rgb(255, 195, 113) 100%);
  transition: width .3s ease;
}

.container__navigation__item__list__links:hover::after {
  width: 100%;
}

button {
  display: flex;
  padding: 16px 20px;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 8px;
  background: linear-gradient(132deg, rgb(255, 95, 109) 0%, rgb(255, 195, 113) 100%);
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  cursor: pointer;
  border: initial;
  box-shadow: none;
  transform: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

button:hover {
  box-shadow: rgb(255, 147, 112) 0px 20px 50px -10px;
  transform: scale(1.05) translateZ(0px);
}

.container__navigation__item__button {
  max-width: 222px;
}
</style>

<script setup>
</script>