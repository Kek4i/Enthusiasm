<template>
  <div class="modal-backdrop">
    <div class="modal">
      <img alt="close" src="@/assets/icons/close.svg" class="modal__close-icon" @click="$emit('close')">
      <div class="modal__header">Активация промокода</div>
      <div class="modal__body">
        <form>
          <div class="modal__wrapper">
            <span class="text">Используя промокод, вы можете получить кейсы, привилегии или коины совершенно бесплатно!</span>
            <label class="text">Введите промокод</label>
            <input type="text" placeholder="xxxx-xxxx-xxxx-xxxx" class="input-field input-field--default"/>
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

@media (max-width: 768px) {
  .modal {
    padding: 30px 10px;
  }
}
</style>

<script>
</script>