<template>
  <div v-if="isOpen" class="nav__burger-menu">
    <ul class="nav__burger-list">
      <li class="nav__burger-item">
        <router-link to="/" @click.native="closeMenu">Главная</router-link>
      </li>
      <li class="nav__burger-item">
        <router-link to="/servers" @click.native="closeMenu">Сервера</router-link>
      </li>
      <li class="nav__burger-item">
        <router-link to="/rules" @click.native="closeMenu">Правила</router-link>
      </li>
      <li class="nav__burger-item">
        <router-link to="/shop" @click.native="closeMenu">Магазин</router-link>
      </li>
      <li class="nav__burger-item">
        <a href="https://enthusiasm.world/forum/" target="_blank" @click="closeMenu">Форум</a>
      </li>
      <li class="nav__burger-item">
        <router-link to="/other" @click.native="closeMenu">Прочее</router-link>
      </li>
    </ul>
    <button class="nav__burger-account">Личный кабинет</button>
  </div>
</template>

<style scoped>

a {
  color: inherit;
  text-decoration: none;
}

.nav__burger-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  z-index: 12;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.nav__burger-list {
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: center;
}

.nav__burger-item {
  margin-bottom: 20px;
}

.nav__burger-item a {
  color: #fff;
  text-transform: uppercase;
  font-size: 20px;
}

button {
  display: flex;
  padding: 16px 20px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: linear-gradient(132deg, rgb(255, 95, 109) 0%, rgb(255, 195, 113) 100%);
  color: #fff;
  font-size: 19px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
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

.nav__burger-account {
  max-width: 222px;
}
</style>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    closeMenu() {
      this.$emit('close');
    }
  }
};
</script>