<template>
  <main class="registration-layout">
    <div class="registration-page page_container">
      <div class="page-header">
        <h2 class="page-title">Регистрация</h2>
        <div class="title-underline"></div>
      </div>
      <form @submit.prevent="validateForm">
        <div class="form-body">
          <div class="form-fields">
            <div class="form-group">
              <input type="text" v-model="email" placeholder="Email" class="input-field input-default" name="email">
              <span class="form-description" v-if="!errors.email">
                Не будет возможности сменить, нужен
                <br>
                для восстановления пароля.
              </span>
              <span class="error-message" v-if="errors.email">{{ errors.email }}</span>
            </div>
            <div class="form-group">
              <input type="text" v-model="username" placeholder="Никнейм" class="input-field input-default" name="username">
              <span class="form-description" v-if="!errors.username">
                Минимум 4 символа, максимум 16
              </span>
              <span class="error-message" v-if="errors.username">{{ errors.username }}</span>
            </div>
            <div class="form-group">
              <input type="password" v-model="password" placeholder="Пароль" class="input-field input-default" name="password" aria-autocomplete="list">
              <span class="error-message" v-if="errors.password">{{ errors.password }}</span>
            </div>
            <div class="form-group">
              <input type="password" v-model="passwordConfirmation" placeholder="Подтвердите пароль" class="input-field input-default" name="passwordConfirmation">
              <span class="error-message" v-if="errors.passwordConfirmation">{{ errors.passwordConfirmation }}</span>
            </div>
            <div class="form-group">
              <label class="checkbox-container">
                <input type="checkbox" v-model="termsAgreed" class="checkbox-input" name="termsAgreed">
                <span class="checkbox-overlay"></span>
                <span class="text">
                  Я принимаю
                  <router-link to="/rules" class="gradient-text" target="_blank">правила</router-link>,
                  <router-link to="/rules/license" class="gradient-text" target="_blank">лицензионное соглашение</router-link>,
                  и даю свое согласие на
                  <router-link to="/rules/policy" class="gradient-text" target="_blank">обработку персональных данных</router-link>.
                </span>
              </label>
              <span class="error-message" v-if="errors.termsAgreed">{{ errors.termsAgreed }}</span>
            </div>
          </div>
          <div class="form-footer">
            <button type="submit" class="submit-button">Зарегистрироваться</button>
            <div class="divider"></div>
            <div class="text pointer" @click="openLoginModal">Есть аккаунт?
              <span class="action-link">Войти</span>
            </div>
          </div>
        </div>
      </form>
    </div>
    <LoginModal
        v-if="showLoginModal"
        :isVisible="showLoginModal"
        @close="showLoginModal = false"
    />
  </main>
</template>

<style scoped>

.registration-layout {
  max-width: 1320px;
  position: relative;
  margin-top: 64px;
  margin-inline: auto;
  padding: 0 15px;
}

.registration-page {
  display: flex;
  width: 100%;
  max-width: 600px;
  padding: 64px 96px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 32px;
  border-radius: 10px;
  background: hsla(0, 0%, 100%, .05);
  backdrop-filter: blur(2px);
  box-sizing: border-box;
}

.page_container {
  max-width: 600px;
  margin: 0 auto;
}

.page-header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
}

.page-title {
  color: #fff;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0;
}

.title-underline {
  width: 64px;
  height: 8px;
  border-radius: 4px;
  background: linear-gradient(132deg, #ff5f6d, #ffc371);
}

.form-body {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
}

.form-fields {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 100%;
}

.form-group {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  width: 100%;
  box-sizing: border-box;
}

.input-field, .input-default {
  padding: 16px;
  font-size: 16px;
}

.input-field {
  display: flex;
  width: 100%;
  max-width: 100%;
  align-items: flex-start;
  gap: 10px;
  border-radius: 8px;
  background: hsla(0, 0%, 100%, .1);
  color: #fff;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding: 16px;
  border: none;
  box-sizing: border-box;
}

.input-field::placeholder {
  color: rgba(255, 255, 255, 0.5);
  font-weight: 500;
}

.form-description {
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding-bottom: 8px;
}

.checkbox-container {
  display: flex;
  align-items: flex-start;
  position: relative;
  padding-left: 32px;
}

.checkbox-input {
  opacity: 0;
  position: absolute;
  left: 0;
  top: 0;
  width: 25px;
  height: 25px;
  cursor: pointer;
}

.checkbox-overlay {
  position: absolute;
  left: 0;
  top: 0;
  width: 25px;
  height: 25px;
  border-radius: 5px;
  background: hsla(0, 0%, 100%, .05);
  cursor: pointer;
  transition: background 0.25s ease;
}

.checkbox-overlay::after {
  content: '';
  position: absolute;
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid transparent;
  border-width: 0 3px 3px 0;
  transform: rotate(45deg);
  transition: border 0.25s ease;
}

.checkbox-input:checked + .checkbox-overlay {
  background: linear-gradient(90deg, #ff626d, #ffc171);
}

.checkbox-input:checked + .checkbox-overlay::after {
  border-color: #fff;
}

.gradient-text {
  background: linear-gradient(132deg, #ff5f6d, #ffc371);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-decoration: none;
}

.text {
  color: #fff;
}

.error-message {
  color: #ff5f6d;
  font-size: 14px;
}

.submit-button {
  display: flex;
  padding: 16px 20px;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 8px;
  background: linear-gradient(132deg, rgb(255, 95, 109) 0%, rgb(255, 195, 113) 100%);
  color: #fff;
  font-size: 19px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  border: initial;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.submit-button:hover {
  background: linear-gradient(132deg, rgb(255, 95, 109) 0%, rgb(255, 195, 113) 100%);
  box-shadow: rgb(255, 147, 112) 0px 20px 50px -10px;
  transform: scale(1.05) translateZ(0px);
}

.form-footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
}

.divider {
  width: 100%;
  height: 4px;
  margin: 5px;
  border-radius: 10px;
  background: hsla(0, 0%, 100%, .05);
}

.pointer {
  cursor: pointer;
}

.action-link {
  position: relative;
  background: linear-gradient(132deg, #ff5f6d, #ffc371);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.action-link:before {
  content: "";
  position: absolute;
  left: 0;
  bottom: -1px;
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, #ff626d, #ffc171);
}

</style>

<script setup>
import { ref } from 'vue';
import LoginModal from '../modalComponent/AuthModal.vue';

const email = ref('');
const username = ref('');
const password = ref('');
const passwordConfirmation = ref('');
const termsAgreed = ref(false);

const errors = ref({
  email: null,
  username: null,
  password: null,
  passwordConfirmation: null,
  termsAgreed: null
});

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const showLoginModal = ref(false);

const openLoginModal = () => {
  showLoginModal.value = true;
};

const validateForm = () => {
  errors.value.email = null;
  errors.value.username = null;
  errors.value.password = null;
  errors.value.passwordConfirmation = null;
  errors.value.termsAgreed = null;

  if (!email.value) {
    errors.value.email = 'Email обязателен для ввода.';
  } else if (!emailRegex.test(email.value)) {
    errors.value.email = 'Введите корректный email.';
  }

  if (!username.value) {
    errors.value.username = 'Никнейм обязателен.';
  } else if (username.value.length < 4 || username.value.length > 16) {
    errors.value.username = 'Никнейм должен содержать от 4 до 16 символов.';
  }

  if (!password.value) {
    errors.value.password = 'Пароль обязателен.';
  } else if (password.value.length < 8) {
    errors.value.password = 'Пароль должен быть не менее 8 символов.';
  }

  if (password.value !== passwordConfirmation.value) {
    errors.value.passwordConfirmation = 'Пароли не совпадают.';
  }

  if (!termsAgreed.value) {
    errors.value.termsAgreed = 'Вы должны принять условия выше';
  }

  if (
      !errors.value.email &&
      !errors.value.username &&
      !errors.value.password &&
      !errors.value.passwordConfirmation &&
      !errors.value.termsAgreed
  ) {
    alert('Регистрация прошла успешно!');
  }
};
</script>