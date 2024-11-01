<template>
  <div class="modal-backdrop" @click="handleBackdropClick">
    <div class="modal" @click.stop>
      <img alt="close" src="../../../assets/icons/common/close.svg" class="modal__close-icon" @click="handleBackdropClick">
      <div class="modal__header">Установить скин и плащ</div>
      <div class="modal__body">
        <div class="modal__body-container">
          <div class="modal__upload">
            <div class="modal__upload-type">
              <img src="../../../assets/icons/accountPage/skin.png" alt="skin">
              <span class="modal__upload-text">Скин</span>
            </div>
          </div>
        </div>
        <div class="modal__body-container">
          <div class="modal__upload">
            <div class="modal__upload-type">
              <img src="../../../assets/icons/accountPage/cape.png" alt="cape">
              <span class="modal__upload-text">Плащ</span>
            </div>
          </div>
        </div>
      </div>
      <div class="ModalFooter_container">
        <div class="SkinUploadModal_actionsContainer">
          <div class="SkinUploadModal_actions">
            <button @click="chooseSkin" class="submit-button">Загрузить</button>
            <button @click="removeSkin" class="submit-button transperent">Удалить</button>
          </div>
        </div>
        <div class="SkinUploadModal_actionsContainer">
          <div class="SkinUploadModal_actions">
            <button @click="chooseCape" class="submit-button">Загрузить</button>
            <button @click="removeCape" class="submit-button transperent">Удалить</button>
          </div>
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

@media (max-width: 768px) {
  .modal {
    padding: 30px 10px;
  }
}
</style>

<script setup>
const emit = defineEmits(['close', 'upload-skin', 'upload-cape', 'delete-skin', 'delete-cape']);

const handleBackdropClick = () => {
  emit('close');
};

const chooseSkin = () => {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.png';
  input.onchange = (e) => {
    const file = e.target.files[0];
    if (file) {
      emit('upload-skin', file);
      emit('close');
    }
  };
  input.click();
};

const chooseCape = () => {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.png';
  input.onchange = (e) => {
    const file = e.target.files[0];
    if (file) {
      emit('upload-cape', file);
      emit('close');
    }
  };
  input.click();
};

const removeSkin = () => {
  emit('delete-skin');
  emit('close');
};

const removeCape = () => {
  emit('delete-cape');
  emit('close');
};
</script>