<template>
  <div class="modal-backdrop">
    <div class="modal">
      <img alt="close" src="@/assets/icons/close.svg" class="modal__close-icon" @click="$emit('close')">
      <div class="modal__header">Установить скин и плащ</div>
      <div class="modal__body">
        <div class="modal__body-container">
          <form @submit.prevent="uploadSkin">
            <div class="modal__upload">
              <div class="modal__upload-type">
                <img src="@/assets/icons/skin.png" alt="skin">
                <span class="modal__upload-text">Скин</span>
              </div>
              <input type="file" accept=".png" @change="selectSkin">
            </div>
          </form>
        </div>
        <div class="modal__body-container">
          <form @submit.prevent="uploadCape">
            <div class="modal__upload">
              <div class="modal__upload-type">
                <img src="@/assets/icons/cape.png" alt="cape">
                <span class="modal__upload-text">Плащ</span>
              </div>
              <input type="file" accept=".png" @change="selectCape">
            </div>
          </form>
        </div>
      </div>
      <div class="ModalFooter_container">
        <div class="SkinUploadModal_actionsContainer">
          <button @click="uploadSkin" class="submit-button">Загрузить скин</button>
          <button @click="removeSkinAndCape" class="submit-button transperent">Удалить</button>
        </div>
        <div class="SkinUploadModal_actionsContainer">
          <button @click="uploadCape" class="submit-button">Загрузить плащ</button>
          <button @click="removeSkinAndCape" class="submit-button transperent">Удалить</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
  display: flex;
  gap: 20px;
  width: 100%;
  overflow-y: auto;
  padding-inline: 15px;
}

.modal__body-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
}

.modal__upload {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
}

.modal__upload-type {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 7px;
  aspect-ratio: 1/1;
  background: hsla(0, 0%, 100%, .05);
  border-radius: 10px;
}

.modal__upload-text {
  color: #fff;
  font-size: 18px;
}

.ModalFooter_container {
  display: flex;
  gap: 20px;
  width: 100%;
  padding-inline: 15px;
}

.SkinUploadModal_actionsContainer {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
}

.SkinUploadModal_actions {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.submit-button {
  display: flex;
  padding: 10px 12px;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 8px;
  background: linear-gradient(132deg, rgb(255, 95, 109) 0%, rgb(255, 195, 113) 100%);
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border: initial;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.transperent {
  background: hsla(0, 0%, 100%, .05);
  transition: transform 0.3s ease;
}

.submit-button:hover {
  box-shadow: rgb(255, 147, 112) 0 20px 50px -10px;
  transform: scale(1.05) translateZ(0px);
}

.transperent:hover {
  box-shadow: none;
  transform: scale(1.05) translateZ(0px);
}
</style>

<script setup>
const emit = defineEmits(['close', 'upload-skin', 'upload-cape', 'delete']);
let skinFile = null;
let capeFile = null;

const selectSkin = (event) => {
  skinFile = event.target.files[0];
};

const selectCape = (event) => {
  capeFile = event.target.files[0];
};

const uploadSkin = () => {
  if (skinFile) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const skinUrl = e.target.result;
      emit('upload-skin', skinUrl);
    };
    reader.readAsDataURL(skinFile);
  }
};

const uploadCape = () => {
  if (capeFile) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const capeUrl = e.target.result;
      emit('upload-cape', capeUrl);
    };
    reader.readAsDataURL(capeFile);
  }
};

const removeSkinAndCape = () => {
  emit('delete');
};
</script>