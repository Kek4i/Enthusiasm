<template>
  <header class="header" :class="{ 'header-mif': isHighlightLink('/servers/mif') }">
    <nav class="nav" :class="{ 'nav-mif': isHighlightLink('/servers/mif') }">
      <router-link class="nav__logo" to="/">
        <img alt="logo" src="../../assets/icons/logo.png">
      </router-link>

      <div class="burger" @click="toggleMenu" :class="{ 'burger--blue': isHighlightLink('/servers/mif') }">
        <div :class="{ 'burger-line': true, 'burger-line--active': isMenuOpen }"></div>
        <div :class="{ 'burger-line': true, 'burger-line--active': isMenuOpen }"></div>
        <div :class="{ 'burger-line': true, 'burger-line--active': isMenuOpen }"></div>
      </div>

      <ul class="nav__menu" :class="{ 'nav__menu--open': isMenuOpen }">
        <li class="nav__menu-item">
          <router-link class="nav__menu-link" :class="{ 'nav__menu-link--blue': isHighlightLink('/servers/mif') }" to="/servers">
            Сервера
          </router-link>
        </li>
        <li class="nav__menu-item">
          <router-link class="nav__menu-link" :class="{ 'nav__menu-link--blue': isHighlightLink('/servers/mif') }" to="/rules">
            Правила
          </router-link>
        </li>
        <li class="nav__menu-item">
          <router-link class="nav__menu-link" :class="{ 'nav__menu-link--blue': isHighlightLink('/servers/mif') }" to="/shop">
            Магазин
          </router-link>
        </li>
        <li class="nav__menu-item">
          <a class="nav__menu-link" :class="{ 'nav__menu-link--blue': isHighlightLink('/servers/mif') }" href="https://enthusiasm.world/forum/" target="_blank">
            Форум
          </a>
        </li>
        <li class="nav__menu-item">
          <router-link class="nav__menu-link" :class="{ 'nav__menu-link--blue': isHighlightLink('/servers/mif') }" to="/other">
            Прочее
          </router-link>
        </li>
        <li class="nav__menu-item nav__button-container nav__button-container--burger">
          <button class="nav__button" :class="{ 'nav__button--blue': isHighlightLink('/servers/mif') }">
            Начать играть
          </button>
        </li>
      </ul>
      <div class="nav__button-container nav__button-container--desktop">
        <button class="nav__button" :class="{ 'nav__button--blue': isHighlightLink('/servers/mif') }">
          Начать играть
        </button>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.header {
  padding: 15px 15px 0;
  transition: backdrop-filter 0.3s ease;
}

.header-mif {
  backdrop-filter: blur(5px);
}

.nav {
  max-width: 1140px;
  min-height: 110px;
  margin-right: auto;
  margin-left: auto;
  background-color: rgba(20, 20, 20, 0.251);
  border-radius: 10px 10px 0 0;
  padding: 15px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  position: relative;
  transition: padding-bottom 0.3s ease;
}

.nav-mif {
  max-width: 1316px;
  background-color: hsla(0, 0%, 100%, .05);
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
  flex-grow: 1;
  justify-content: center;
  transition: transform 0.3s ease;
}

.nav__menu--open {
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: hsla(0, 0%, 100%, .05);
  padding: 20px;
  border-radius: 0 0 10px 10px;
  display: flex;
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
  transition: transform 0.3s ease, color 0.3s ease;
}

.nav__menu-link:hover {
  transform: scale(1.1);
  color: #ff9671;
}

.nav__menu-link--blue:hover {
  transform: scale(1.1);
  color: #1e90ff;
}

.nav__button {
  padding: 13px;
  padding-left: 36px;
  padding-right: 36px;
  font-size: 1.15rem;
  border-radius: 6px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  background: linear-gradient(132deg, rgb(255, 95, 109) 0%, rgb(255, 195, 113) 100%);
  transition: box-shadow 200ms, transform 200ms;
  border: none;
  cursor: pointer;
}

.nav__button:hover {
  box-shadow: rgb(255, 147, 112) 0px 20px 50px -10px;
  transform: scale(1.05) translateZ(0px);
}

.nav__button--blue {
  background: linear-gradient(132deg, #3a6ad4, #7ab4f7 100%);
}

.nav__button--blue:hover {
  box-shadow: rgba(30, 144, 255, 0.5) 0px 20px 50px -10px;
  transform: scale(1.05) translateZ(0px);
}

.burger {
  display: none;
  flex-direction: column;
  cursor: pointer;
  margin-left: auto;
}

.burger-line {
  width: 30px;
  height: 4px;
  border-radius: 6px;
  background-color: white;
  margin: 2px 0;
  transition: transform 0.3s ease;
}

.burger-line--active:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.burger-line--active:nth-child(2) {
  opacity: 0;
}

.burger-line--active:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

.burger--blue .burger-line {
  background: linear-gradient(132deg, #5c8bf1, #9fc7f5 100%);
}

.nav__button-container {
  display: flex;
}

.nav__button-container--desktop {
  display: block;
}

.nav__button-container--burger {
  display: none;
}

@media (max-width: 1140px) {
  .nav__menu {
    display: none;
  }

  .nav__menu--open {
    display: flex;
  }

  .burger {
    display: flex;
  }

  .nav__button-container--desktop {
    display: none;
  }

  .nav__button-container--burger {
    display: block;
    margin-top: 10px;
  }
}

.header.menu-open {
  padding-bottom: 200px;
}
</style>


<script>
export default {
  name: 'UniqueNav',
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    isHighlightLink(path) {
      return this.$route.path.includes(path);
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      document.body.style.overflow = this.isMenuOpen ? 'hidden' : '';

      if (this.isMenuOpen) {
        document.querySelector('header').classList.add('menu-open');
      } else {
        document.querySelector('header').classList.remove('menu-open');
      }
    }
  },
  beforeDestroy() {
    document.body.style.overflow = '';
  }
}
</script>
