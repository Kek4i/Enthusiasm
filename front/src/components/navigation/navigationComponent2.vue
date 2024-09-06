<template>
  <header class="header">
    <nav class="nav">
      <router-link class="nav__logo" to="/">
        <img alt="logo" src="../../assets/icons/logo.png">
      </router-link>
      <ul class="nav__menu">
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
      </ul>
      <button class="nav__button">Начать играть</button>
    </nav>
  </header>
</template>

<style scoped>
.nav {
  margin-top: 16px;
  margin-right: auto;
  margin-left: auto;
  background-color: rgba(20, 20, 20, 0.251);
  border-radius: 1.5rem;
  padding: 1.5rem 1rem;
  box-shadow: 0 0px 1px rgba(108, 108, 108, 0.421);
  backdrop-filter: blur(2px);
  max-width: 1140px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav__logo {
  display: inline-block;
  padding-top: .3125rem;
  padding-bottom: .3125rem;
  margin-right: 1rem;
  font-size: 1.25rem;
  line-height: inherit;
  white-space: nowrap;
}

.nav__menu {
  display: flex;
  margin: 0;
  padding-left: 0;
  list-style: none;
  flex-direction: row;
  align-items: center;
}

.nav__menu-link {
  display: inline-block;
  font-weight: 600;
  color: #fff;
  font-size: 1.15rem;
  text-transform: uppercase;
  padding: .5rem 0.5rem;
  margin-left: 10px;
  margin-right: 10px;
  text-decoration: none;
  transition: transform 0.3s ease;
  transform-origin: center;
}

.nav__menu-link:hover {
  transform: scale(1.1);
  color: #ff9671;
}

.nav__button {
  font-size: 1.15rem;
  border-radius: 6px;
  color: #fff;
  margin-left: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  background: linear-gradient(132deg, rgb(255, 95, 109) 0%, rgb(255, 195, 113) 100%);
  padding: 10px 30px;
  transition: box-shadow 200ms, transform 200ms;
  border: none;
  cursor: pointer;
}

.nav__button:hover {
  box-shadow: rgb(255, 147, 112) 0px 20px 50px -10px;
  transform: scale(1.05) translateZ(0px);
}
</style>

<script>
export default {
  name: 'UniqueNav',
}
</script>