<template>
  <header class="header">
    <nav class="nav">
      <router-link class="nav__logo" to="/">
        <img alt="logo" src="../../assets/icons/common/logo.png" />
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
          <router-link class="nav__menu-link" to="/shop">Магазин</router-link>
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
      <div v-if="isAuthenticated" class="nav__mini-profile" @click="toggleProfileMenu">
        <div class="mini-profile__login-block">
          <div class="mini-profile__profile">
            <div class="mini-profile__user-container">
              <div class="mini-profile__user">
                <img alt="avatar" loading="lazy" width="24" height="24" decoding="async" class="mini-profile__avatar" :src="userAvatar" />
                <span class="mini-profile__nickname">{{ userNickname }}</span>
              </div>
              <div class="mini-profile__balance">
                <div class="mini-profile__balance-item">
                  <img alt="entcoins" loading="lazy" width="19" height="22" decoding="async" src="../../assets/icons/accountPage/entcoins.svg" />
                  <span>{{ userEntCoins }}</span>
                </div>
                <div class="mini-profile__balance-item">
                  <img alt="coins" loading="lazy" width="22" height="22" decoding="async" src="../../assets/icons/accountPage/coins.svg" />
                  <span>{{ userCoins }}</span>
                </div>
              </div>
            </div>
            <transition name="fade">
              <div v-if="isProfileMenuOpen" class="mini-profile__hovered-profile">
                <div class="mini-profile__hover-menu">
                  <router-link class="mini-profile__hover-menu-link" to="/account">Личный кабинет</router-link>
                  <div class="mini-profile__hover-menu-link" @click="logout">
                    Выйти
                    <img alt="Exit" loading="lazy" width="24" height="25" src="../../assets/icons/navigation/account_exit.svg" />
                  </div>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
      <button v-else class="nav__button" @click="handlePersonalCabinetClick">
        Личный кабинет
      </button>
    </nav>
    <LoginModal v-if="showLoginModal" :isVisible="showLoginModal" @close="showLoginModal = false" />
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
  box-shadow: rgb(255, 147, 112) 0 20px 50px -10px;
  transform: scale(1.05) translateZ(0px);
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

.nav__mini-profile {
  display: block;
}

.mini-profile__login-block {
  display: flex;
  gap: 16px;
}

.mini-profile__profile {
  position: relative;
  cursor: pointer;
}

.mini-profile__user-container {
  display: flex;
  flex-direction: column;
  padding: 7px;
  align-items: center;
  gap: 8px;
  width: 200px;
  border-radius: 8px;
  background: hsla(0, 0%, 100%, .05);
}

.mini-profile__user {
  display: flex;
  align-items: center;
  gap: 8px;
}

.mini-profile__avatar {
  color: transparent;
  border-radius: 3px;
}

.mini-profile__nickname {
  color: #fff;
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.mini-profile__balance {
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 4px;
  border-radius: 6px;
  background: hsla(0, 0%, 100%, .05);
}

.mini-profile__balance-item {
  display: flex;
  align-items: center;
  gap: 6px;
  color: #fff;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.mini-profile__hovered-profile {
  display: flex;
  width: 100%;
  min-width: fit-content;
  flex-direction: column;
  position: absolute;
  padding-top: 8px;
}

.mini-profile__hover-menu {
  background: rgba(62, 62, 62, .7);
  -webkit-backdrop-filter: blur(2px);
  backdrop-filter: blur(2px);
  color: #fff;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  border-radius: 8px;
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.3s;
}
.fade-slide-enter {
  opacity: 0;
  transform: translateY(-10px);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.mini-profile__hover-menu-link {
  display: flex;
  padding: 8px 16px;
  gap: 8px;
  white-space: nowrap;
  transition: all 0.3s;
}

.mini-profile__hover-menu-link:hover {
  color: #FF9370;
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

@media (max-width: 1024px) {
  .nav__mini-profile {
    display: none;
  }
}
</style>

<script>
import BurgerMenu from './NavBurger.vue';
import LoginModal from '@/components/modalComponents/AuthModal.vue';
import avatarIcon from '@/assets/icons/navigation/headSteve.png'

export default {
  name: 'CommonNav',
  components: {
    BurgerMenu,
    LoginModal,
  },
  data() {
    return {
      burgerOpen: false,
      isMobileView: false,
      previousScrollPosition: 0,
      isAuthenticated: true,
      showLoginModal: false,
      isProfileMenuOpen: false,
      userAvatar: avatarIcon,
      userNickname: 'Ooda',
      userEntCoins: 0,
      userCoins: 0,
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
    handlePersonalCabinetClick() {
      if (this.isAuthenticated) {
        this.$router.push('/account');
      } else {
        this.showLoginModal = true;
      }
    },
    toggleProfileMenu() {
      this.isProfileMenuOpen = !this.isProfileMenuOpen;
    },
    logout() {
      this.isAuthenticated = false;
    },
  },
};
</script>