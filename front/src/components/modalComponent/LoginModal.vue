<template>
  <div v-if="isVisible" class="Modal_backdrop" @click.self="closeModal">
    <div class="Modal_modal">
      <img @click="closeModal" alt="close" src="../../assets/icons/close.svg" class="Modal_closeIcon">
      <div class="ModalHeader_container">Авторизация</div>
      <div class="ModalBody_container LoginModal_body">
        <input
            v-model="username"
            type="text"
            placeholder="Никнейм"
            class="input-field input-default"
            :class="{'input-error': usernameError}"
        />
        <div v-if="usernameError" class="error-message">{{ usernameError }}</div>

        <input
            v-model="password"
            type="password"
            placeholder="Пароль"
            class="input-field input-default"
        />
      </div>
      <div class="ModalFooter_container Common_footer">
        <button type="submit" class="submit-button" @click="handleLogin">Войти</button>
        <div class="divider"></div>
        <div class="text pointer">Нет аккаунта?
          <span class="action-link">Создать</span>
        </div>
        <div class="text pointer">Не помните пароль?
          <span class="action-link">Сбросить</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.text {
  color: white;
}

.Modal_backdrop {
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

.Modal_modal {
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

.Modal_closeIcon {
  color: transparent;
  position: absolute;
  top: 25px;
  right: 25px;
  cursor: pointer;
}

.ModalHeader_container {
  margin-inline: auto;
  padding-inline: 15px;
  color: #fff;
  font-size: 32px;
  font-weight: 700;
}

.ModalBody_container {
  overflow-y: auto;
  padding-inline: 15px;
}

.LoginModal_body {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.input-field {
  padding: 16px;
  font-size: 16px;
}

.input-default {
  display: flex;
  width: 100%;
  align-items: flex-start;
  gap: 10px;
  border-radius: 8px;
  background: hsla(0, 0%, 100%, .1);
  color: #fff;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border: 0px;
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
  box-shadow: rgb(255, 147, 112) 0px 20px 50px -10px;
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
      username: '',
      password: '',
      usernameError: '',
    };
  },
  methods: {
    handleLogin() {
      if (this.username.length < 4 || this.username.length > 16) {
        this.usernameError = 'Никнейм должен быть от 4 до 16 символов';
      } else {
        this.usernameError = '';
        // Логика авторизации
        this.closeModal();
      }
    },
    closeModal() {
      this.$emit('close');
    },
  },
};
</script>