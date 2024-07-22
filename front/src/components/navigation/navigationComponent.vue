<template>
  <header class="header">

    <nav class="nav">
      <router-link class="nav__logo" to="/">
        <img alt="logo" src="../../assets/icons/logo.svg">
      </router-link>
      <ul class="nav__menu">
        <li class="nav__menu-item">
          <router-link class="nav__menu-link" to="/">Главная</router-link>
        </li>
        <li class="nav__menu-item">
          <router-link class="nav__menu-link" to="/servers">Сервера</router-link>
        </li>
        <li class="nav__menu-item">
          <router-link class="nav__menu-link" to="/rules">Правила</router-link>
        </li>
        <li class="nav__menu-item">
          <router-link class="nav__menu-link" to="/store">Магазин</router-link>
        </li>
        <li class="nav__menu-item">
          <a class="nav__menu-link" href="https://enthusiasm.world/forum/" target="_blank">Форум</a>
        </li>
        <li class="nav__menu-item">
          <router-link class="nav__menu-link" to="/other">Прочее</router-link>
        </li>
      </ul>
      <button class="nav__button">Личный кабинет</button>
    </nav>

  </header>
</template>

<style scoped>

a {
  color: inherit;
  text-decoration: none;
}

.header {
  padding: 15px 15px 0;
}

.nav {
  max-width: 1316px;
  margin: 0 auto;
  padding: 15px 30px;
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: hsla(0, 0%, 100%, .05);
  -webkit-backdrop-filter: blur(2px);
  backdrop-filter: blur(2px);
  border-radius: 10px;
  font-family: 'Montserrat', sans-serif;
}

.nav__logo {
  font-style: italic;
  font-weight: 800;
  z-index: 10;
}

.nav__menu {
  display: flex;
  gap: 32px;
  margin: 0 0 0 36px;
  padding: 0px;
  list-style-type: none;
}

.nav__menu-item {
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 0;
}

.nav__menu-link {
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-transform: uppercase;
  color: #fff;
  position: relative;
}

.nav__menu-link::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -35px;
  height: 4px;
  border-radius: 6px;
  width: 0;
  background: linear-gradient(132deg, rgb(255, 95, 109) 0%, rgb(255, 195, 113) 100%);
  transition: width .3s ease;
}

.nav__menu-link:hover::after {
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

.nav__button {
  max-width: 222px;
}
</style>

<script setup>
</script>