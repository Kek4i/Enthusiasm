<template>
  <div v-if="isVisible" class="modal-backdrop" @click.self="closeModal">
    <div class="modal">
      <img @click="closeModal" alt="close" src="../../assets/icons/common/close.svg" class="modal__close-icon">
      <div class="modal__header">{{ modalTitle }}</div>
      <div class="modal__body modal__body--login">
        <!-- Авторизация -->
        <template v-if="currentModal === 'login'">
          <input
              v-model="username"
              type="text"
              placeholder="Никнейм"
              class="input-field input-field--default"
              :class="{'input-error': errors.username}"
          />
          <div v-if="errors.username" class="error-message">{{ errors.username }}</div>

          <input
              v-model="password"
              type="password"
              placeholder="Пароль"
              class="input-field input-field--default"
              :class="{'input-error': errors.password}"
          />
          <div v-if="errors.password" class="error-message">{{ errors.password }}</div>
        </template>

        <!-- Регистрация -->
        <template v-if="currentModal === 'register'">
          <input
              type="text"
              v-model="email"
              placeholder="Email"
              class="input-field input-field--default"
              :class="{'input-error': errors.email}"
          />
          <span class="form-description" v-if="!errors.email">Не будет возможности сменить, нужен для восстановления пароля.</span>
          <div v-if="errors.email" class="error-message">{{ errors.email }}</div>

          <input
              type="text"
              v-model="username"
              placeholder="Никнейм"
              class="input-field input-field--default"
              :class="{'input-error': errors.username}"
          />
          <span class="form-description" v-if="!errors.username">Минимум 4 символа, максимум 16</span>
          <div v-if="errors.username" class="error-message">{{ errors.username }}</div>

          <input
              type="password"
              v-model="password"
              placeholder="Пароль"
              class="input-field input-field--default"
              :class="{'input-error': errors.password}"
          />
          <div v-if="errors.password" class="error-message">{{ errors.password }}</div>

          <input
              type="password"
              v-model="passwordConfirmation"
              placeholder="Подтвердите пароль"
              class="input-field input-field--default"
              :class="{'input-error': errors.passwordConfirmation}"
          />
          <div v-if="errors.passwordConfirmation" class="error-message">{{ errors.passwordConfirmation }}</div>

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
          <div v-if="errors.termsAgreed" class="error-message">{{ errors.termsAgreed }}</div>
        </template>

        <!-- Сброс пароля -->
        <template v-if="currentModal === 'reset'">
          <input
              v-model="email"
              type="email"
              placeholder="Email"
              class="input-field input-field--default"
              :class="{'input-error': errors.email}"
          />
          <div v-if="errors.email" class="error-message">{{ errors.email }}</div>
        </template>
      </div>
      <div class="ModalFooter_container Common_footer">
        <button type="submit" class="submit-button" @click="handleAction">{{ modalAction }}</button>
        <div class="divider"></div>

        <!-- Ссылки для переключения модальных окон -->
        <div v-if="currentModal === 'login'" class="text pointer" @click="switchModal('register')">
          Нет аккаунта? <span class="action-link">Создать</span>
        </div>
        <div v-if="currentModal === 'login'" class="text pointer" @click="switchModal('reset')">
          Не помните пароль? <span class="action-link">Сбросить</span>
        </div>

        <div v-if="currentModal === 'register'" class="text pointer" @click="switchModal('login')">
          Есть аккаунт? <span class="action-link">Войти</span>
        </div>

        <div v-if="currentModal === 'reset'" class="text pointer" @click="switchModal('login')">
          Вспомнили пароль? <span class="action-link">Войти</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.text {
  color: white;
}

.modal-backdrop {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, .5);
  -webkit-backdrop-filter: blur(2px);
  backdrop-filter: blur(2px);
  z-index: 100;
}

.modal {
  max-width: 400px;
  max-height: min(700px, -20px + 100vh);
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  position: relative;
  border-radius: 10px;
  background: rgba(30, 29, 29, .9);
  width: 100%;
}

.modal__close-icon {
  color: transparent;
  position: absolute;
  top: 25px;
  right: 25px;
  cursor: pointer;
}

.modal__header {
  margin-inline: auto;
  padding-inline: 15px;
  color: #fff;
  font-size: 32px;
  font-weight: 700;
}

.modal__body {
  overflow-y: auto;
  padding-inline: 15px;
}

.modal__body--login {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
}

.input-field {
  padding: 16px;
  font-size: 16px;
}

.input-field--default {
  display: flex;
  width: 100%;
  align-items: flex-start;
  gap: 10px;
  border-radius: 8px;
  background: hsla(0, 0%, 100%, .1);
  color: #fff;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  border: 0;
}

.ModalFooter_container {
  padding-inline: 15px;
}

.Common_footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
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
  box-shadow: rgb(255, 147, 112) 0 20px 50px -10px;
  transform: scale(1.05) translateZ(0px);
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

.error-message {
  color: red;
  margin-top: 5px;
  font-size: 14px;
}

.input-error {
  border: 1px solid red;
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
</style>


<script>
export default {
  props: {
    isVisible: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      currentModal: 'login', // Стартовое состояние модального окна (login, register, reset)
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      termsAgreed: false,
      errors: {
        username: null,
        email: null,
        password: null,
        passwordConfirmation: null,
        termsAgreed: null,
      },
      emailRegex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    };
  },
  computed: {
    modalTitle() {
      switch (this.currentModal) {
        case 'login':
          return 'Авторизация';
        case 'register':
          return 'Регистрация';
        case 'reset':
          return 'Сброс пароля';
        default:
          return '';
      }
    },
    modalAction() {
      switch (this.currentModal) {
        case 'login':
          return 'Войти';
        case 'register':
          return 'Зарегистрироваться';
        case 'reset':
          return 'Сбросить пароль';
        default:
          return '';
      }
    },
  },
  methods: {
    handleAction() {
      if (this.currentModal === 'login') {
        this.handleLogin();
      } else if (this.currentModal === 'register') {
        this.handleRegister();
      } else if (this.currentModal === 'reset') {
        this.handleReset();
      }
    },
    handleLogin() {
      if (this.username.length < 4 || this.username.length > 16) {
        this.errors.username = 'Никнейм должен быть от 4 до 16 символов';
      } else {
        this.errors.username = '';
        // Логика авторизации
        this.closeModal();
      }
    },
    handleRegister() {
      this.clearErrors(); // Сброс ошибок перед валидацией

      if (!this.email) {
        this.errors.email = 'Email обязателен для ввода.';
      } else if (!this.emailRegex.test(this.email)) {
        this.errors.email = 'Введите корректный email.';
      }

      if (!this.username) {
        this.errors.username = 'Никнейм обязателен.';
      } else if (this.username.length < 4 || this.username.length > 16) {
        this.errors.username = 'Никнейм должен содержать от 4 до 16 символов.';
      }

      if (!this.password) {
        this.errors.password = 'Пароль обязателен.';
      } else if (this.password.length < 8) {
        this.errors.password = 'Пароль должен быть не менее 8 символов.';
      }

      if (this.password !== this.passwordConfirmation) {
        this.errors.passwordConfirmation = 'Пароли не совпадают.';
      }

      if (!this.termsAgreed) {
        this.errors.termsAgreed = 'Вы должны принять условия выше.';
      }

      if (!Object.values(this.errors).some(error => error)) {
        alert('Регистрация прошла успешно!');
        this.closeModal();
      }
    },
    handleReset() {
      this.clearErrors(); // Сброс ошибок перед валидацией

      if (!this.email) {
        this.errors.email = 'Email обязателен для ввода.';
      } else if (!this.emailRegex.test(this.email)) {
        this.errors.email = 'Введите корректный email.';
      }

      if (!this.errors.email) {
        alert('Инструкция по сбросу отправлена на ваш email');
        this.closeModal();
      }
    },
    switchModal(modalType) {
      this.currentModal = modalType;
    },
    clearErrors() {
      this.errors = {
        username: null,
        email: null,
        password: null,
        passwordConfirmation: null,
        termsAgreed: null,
      };
    },
    closeModal() {
      this.$emit('close');
    },
  },
};
</script>