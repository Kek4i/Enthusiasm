<template>
  <header class="header">
    <nav class="nav">
      <router-link class="nav__logo" to="/">
        <img alt="logo" src="../../assets/icons/logo.png">
      </router-link>

      <ul class="nav__menu" v-if="!isMobileView">
        <li class="nav__menu-item">
          <router-link class="nav__menu-link nav__menu-link--home" to="/">Главная</router-link>
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

      <div v-if="isMobileView" class="burger" :class="{ open: burgerOpen }" @click="toggleBurgerMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <button v-if="!isMobileView" class="nav__button">Личный кабинет</button>
    </nav>

    <BurgerMenu :isOpen="burgerOpen" @close="closeBurgerMenu" />
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
  min-height: 110px;
  margin: 0 auto;
  padding: 15px 15px;
  position: relative;
  z-index: 13;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: hsla(0, 0%, 100%, .05);
  -webkit-backdrop-filter: blur(2px);
  backdrop-filter: blur(2px);
  border-radius: 10px;
  box-sizing: border-box;
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
  padding: 0;
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
  bottom: -45px;
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

.nav__button {
  max-width: 222px;
}

.burger {
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 24px;
  width: 30px;
  position: relative;
  z-index: 11;
}

.burger span {
  width: 30px;
  height: 3px;
  background: rgb(255, 147, 112);
  border-radius: 2px;
  transition: all 0.3s;
}

.burger.open span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
  background: white;
}

.burger.open span:nth-child(2) {
  opacity: 0;
}

.burger.open span:nth-child(3) {
  transform: rotate(-45deg) translate(10px, -10px);
  background: white;
}

.nav__button {
  max-width: 222px;
  background: linear-gradient(132deg, rgb(255, 95, 109) 0%, rgb(255, 195, 113) 100%);
  padding: 16px 20px;
  color: #fff;
  font-size: 19px;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  border: none;
}

.nav__menu-link {
  font-size: 16px;
  text-transform: uppercase;
  color: white;
}

@media (max-width: 1472px) {
  .nav__menu-link--home {
    display: none;
  }
}
</style>

<script>
import BurgerMenu from './NavBurger.vue';

export default {
  name: 'CommonNav',
  components: {
    BurgerMenu,
  },
  data() {
    return {
      burgerOpen: false,
      isMobileView: false,
      previousScrollPosition: 0,
    };
  },
  mounted() {
    this.checkMobileView();
    window.addEventListener('resize', this.checkMobileView);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkMobileView);
  },
  methods: {
    toggleBurgerMenu() {
      this.burgerOpen = !this.burgerOpen;
      if (this.burgerOpen) {
        this.previousScrollPosition = window.scrollY;
        document.body.style.position = 'fixed';
        document.body.style.top = `-${this.previousScrollPosition}px`;
        document.body.style.width = '100%';
      } else {
        document.body.style.position = '';
        document.body.style.top = '';
        window.scrollTo(0, this.previousScrollPosition);
      }
    },
    closeBurgerMenu() {
      this.burgerOpen = false;
      document.body.style.position = '';
      document.body.style.top = '';
      window.scrollTo(0, this.previousScrollPosition);
    },
    checkMobileView() {
      this.isMobileView = window.innerWidth <= 1024;
    },
  },
};
</script>