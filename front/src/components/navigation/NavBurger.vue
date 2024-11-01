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
                <router-link class="mini-profile__hover-menu-link" to="/account" @click="closeMenu">Личный кабинет</router-link>
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
    <button v-else class="nav__burger-account" @click="handlePersonalCabinetClick">Личный кабинет</button>
  </div>
  <LoginModal v-if="showLoginModal" :isVisible="showLoginModal" @close="showLoginModal = false" />
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
  box-shadow: rgb(255, 147, 112) 0 20px 50px -10px;
  transform: scale(1.05) translateZ(0px);
}

.nav__burger-account {
  max-width: 222px;
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

</style>

<script>
import LoginModal from '@/components/modalComponents/AuthModal.vue';
import avatarIcon from '@/assets/icons/navigation/headSteve.png';

export default {
  props: {
    isOpen: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      isAuthenticated: true,
      showLoginModal: false,
      isProfileMenuOpen: false,
      userAvatar: avatarIcon,
      userNickname: 'Ooda',
      userEntCoins: 100,
      userCoins: 50,
    };
  },
  components: {
    LoginModal,
  },
  methods: {
    closeMenu() {
      this.$emit('close');
    },
    handlePersonalCabinetClick() {
      if (this.isAuthenticated) {
        this.$router.push('/account');
        this.closeMenu();
      } else {
        this.showLoginModal = true;
      }
    },
    toggleProfileMenu() {
      this.isProfileMenuOpen = !this.isProfileMenuOpen;
    },
    logout() {
      this.isAuthenticated = false;
      this.closeMenu();
    }
  }
};
</script>