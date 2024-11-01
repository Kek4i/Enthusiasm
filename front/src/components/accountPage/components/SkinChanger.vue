<template>
  <div class="block block-large">
    <div class="block-header">
      <div class="title-container">
        <h2 class="title">Персонализация</h2>
        <div class="title-line"></div>
      </div>
    </div>
    <div class="skin-changer-header">
      <button class="btn btn-gradient skin-changer-button" @click="openModal">
        <img alt="upload" src="../../../assets/icons/accountPage/upload.svg">
      </button>
      <h4 class="skin-changer-text">Здесь можно установить собственный скин и плащ!</h4>
    </div>
    <div class="skin-changer-model-container">
      <canvas ref="skinCanvas"></canvas>
    </div>
  </div>
  <SkinModal
      v-if="showModal"
      @close="closeModal"
      @upload-skin="setSkin"
      @upload-cape="setCape"
      @delete-skin="deleteSkin"
      @delete-cape="deleteCape"
  />
</template>

<style scoped>
h2, h4 {
  margin: 0;
}

.block {
  display: flex;
  width: 100%;
  padding: 32px 64px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  border-radius: 10px;
  background: hsla(0, 0%, 100%, .05);
  -webkit-backdrop-filter: blur(2px);
  backdrop-filter: blur(2px);
}

.block-header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
}

.title-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
}

.title {
  color: #fff;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.title-line {
  width: 64px;
  height: 8px;
  border-radius: 4px;
  background: linear-gradient(132deg, #ff5f6d, #ffc371);
}

.btn {
  display: flex;
  padding: 16px 20px;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 8px;
  background: hsla(0, 0%, 100%, .05);
  border: initial;
  color: #fff;
  font-size: 19px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.btn:hover {
  transform: scale(1.05) translateZ(0px);
}

.skin-changer-header {
  display: flex;
  align-items: center;
  gap: 20px;
}

.skin-changer-button {
  width: 60px;
  height: 60px;
}

.btn-gradient {
  background: linear-gradient(90deg, #ff626d, #ffc171);
}

.btn-gradient:hover {
  box-shadow: rgb(255, 147, 112) 0 20px 50px -10px;
  transform: scale(1.05) translateZ(0px);
}

.skin-changer-text {
  color: #fff;
  font-size: 19px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.skin-changer-model-container {
  position: relative;
  margin-inline: auto;
}

@media (max-width: 768px) {
  .title {
    font-size: 27px;
  }
}

@media (max-width: 1024px) {
  .block {
    padding: 35px 20px;
  }
}
</style>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import SkinModal from './SkinModal.vue';
import { SkinViewer } from 'skinview3d';
import steveSkin from '@/assets/icons/accountPage/steve.png';

const skinCanvas = ref(null);
let viewer = null;
let skinTexture = null;
let capeTexture = null;
const showModal = ref(false);

let animationFrameId = null;

const openModal = () => {
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};

const clearTextures = () => {
  if (skinTexture && typeof skinTexture.dispose === 'function') {
    skinTexture.dispose();
    skinTexture = null;
  }
  if (capeTexture && typeof capeTexture.dispose === 'function') {
    capeTexture.dispose();
    capeTexture = null;
  }
};

const setSkin = (file) => {
  const fileExtension = file.name.split('.').pop().toLowerCase();
  if (fileExtension !== 'png') {
    alert('Неверный формат файла для скина. Используйте PNG.');
    return;
  }
  const reader = new FileReader();
  reader.onload = (e) => {
    const skinUrl = e.target.result;
    clearTextures();
    viewer.loadSkin(skinUrl);
    skinTexture = viewer.playerObject.skin;
  };
  reader.readAsDataURL(file);
};

const setCape = (file) => {
  const fileExtension = file.name.split('.').pop().toLowerCase();
  if (fileExtension !== 'png') {
    alert('Неверный формат файла для плаща. Используйте PNG.');
    return;
  }
  const reader = new FileReader();
  reader.onload = (e) => {
    const capeUrl = e.target.result;
    clearTextures();
    viewer.loadCape(capeUrl);
    capeTexture = viewer.playerObject.cape;
  };
  reader.readAsDataURL(file);
};

const deleteSkin = () => {
  viewer.loadSkin(steveSkin);
};

const deleteCape = () => {
  viewer.loadCape(null);
};

const animate = () => {
  viewer.playerObject.rotation.y += 0.01;
  animationFrameId = requestAnimationFrame(animate);
};

const stopAnimation = () => {
  cancelAnimationFrame(animationFrameId);
};

onMounted(() => {
  viewer = new SkinViewer({
    canvas: skinCanvas.value,
    width: 300,
    height: 500,
    skin: steveSkin,
  });

  animate();
});

onBeforeUnmount(() => {
  stopAnimation();
  clearTextures();
  if (viewer) {
    viewer.dispose();
  }
});
</script>