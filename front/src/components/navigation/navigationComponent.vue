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
          <router-link class="container__navigation__item__list__links" to="/">Форум</router-link>
        </li>
      </ul>
      <button>Личный кабинет</button>
    </nav>
  </header>
</template>

<style scoped>

.container__navigation{
  padding: 24px 10px;
  max-width: 1316px;
  width: 100px;
  margin-inline: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
  background: hsla(0, 0%, 100%, .05);
  backdrop-filter: blur(2px);
  border-radius: 16px;
}

.container__navigation__logo{
  font-style: italic;
  font-weight: 800;
  z-index: 10;
}

.container__navigation__item{
  display: flex;
  flex-direction: row;
  gap: 32px;
  margin-left: 36px;
  list-style-type: none;
}

.container__navigation__item__list{
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 0;
}

.container__navigation__item__list__links{
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-transform: uppercase;
}

button{
  display: flex;
  padding: 16px 20px;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 8px;
  background: #ff9370;
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  cursor: pointer;
}

</style>

<script setup>

</script>