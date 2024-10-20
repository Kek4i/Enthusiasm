<template>
  <form class="change-password-form" @submit.prevent="handleSubmit">
    <div class="form-row">
      <input placeholder="Старый пароль" class="input input--default" type="password" v-model="oldPass">
    </div>
    <div class="form-row">
      <input placeholder="Новый пароль" class="input input--default" type="password" v-model="newPass">
    </div>
    <div class="form-row">
      <button type="submit" class="submit-button">Сменить пароль</button>
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue';

const oldPass = ref('');
const newPass = ref('');

const handleSubmit = () => {
  console.log('Смена пароля:', oldPass.value, newPass.value);
  // Логика отправки формы
};
</script>

<style scoped>

.change-password-form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 16px;
  width: 100%;
}

.form-row {
  width: 100%;
}

.input {
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
}

.input--default {
  padding: 16px;
  font-size: 16px;
  border: initial;
}

.input--default::placeholder {
  font-weight: 500;
  color: #bababa;
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

</style>