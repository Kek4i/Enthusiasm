<template>
  <div class="modal-backdrop">
    <div class="modal">
      <img alt="close" src="@/assets/icons/close.svg" class="modal__close-icon" @click="$emit('close')">
      <div class="modal__header">2FA Telegram</div>
      <div class="modal__body">
        <form>
          <div class="modal__wrapper">
            <span class="text">Скопируйте код и отправьте его нашему боту Telegram.</span>
            <span class="text">Ссылка на диалог с ботом:</span>
            <a class="link" target="_blank" href="https://t.me/enthusiasm_2fa_bot">https://t.me/enthusiasm_2fa_bot</a>
            <div class="code-wrapper">
              <span class="text">Код:</span>
              <div class="input-icon-container">
                <div class="input input-disabled">{{ code }}</div>
                <img src="@/assets/icons/file-multiple.svg" class="icon" alt="copy" @click="copyCode">
              </div>
              <span class="text">Важно: подключен может быть только один бот.</span>
            </div>
          </div>
        </form>
      </div>
      <div class="ModalFooter_container Common_footer">
        <button type="submit" class="submit-button">Проверить</button>
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
  max-width: 600px;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
}

.modal__wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 8px;
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

.link {
  color: #ff9370;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  -webkit-text-decoration-line: underline;
  text-decoration-line: underline;
}

.code-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 6px;
}

.input-icon-container {
  position: relative;
  width: 100%;
  background: linear-gradient(90deg, #ff626d, #ffc171);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
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
  padding: 16px;
  font-size: 16px;
}

.input-disabled {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  outline: none;
  pointer-events: none;
}

.icon {
  position: absolute;
  right: 16px;
  top: 30%;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.icon:hover {
  transform: scale(1.20) translateZ(0px);
}

@media (max-width: 768px) {
  .modal {
    padding: 30px 10px;
  }
}
</style>

<script setup>
import { ref, onMounted } from 'vue'

const code = ref('')

function generateCode() {
  code.value = Math.random().toString(36).substring(2, 34)
}

function copyCode() {
  navigator.clipboard.writeText(code.value).then(() => {
    console.log('Код скопирован!')
  }).catch(err => {
    console.error('Ошибка копирования: ', err)
  })
}

onMounted(() => {
  generateCode()
})
</script>