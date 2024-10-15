<template>
  <div class="block block-large">
    <div class="block-header">
      <div class="title-container">
        <h2 class="title">Персонализация</h2>
        <div class="title-line"></div>
      </div>
    </div>
    <div class="skin-changer-header">
      <button class="btn btn-gradient skin-changer-button" @click="uploadSkin">
        <img alt="upload" src="@/assets/icons/upload.svg">
      </button>
      <h4 class="skin-changer-text">Здесь можно установить собственный скин и плащ!</h4>
    </div>
    <div class="skin-changer-model-container">
      <canvas ref="skinCanvas"></canvas>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { SkinViewer, WalkingAnimation } from 'skinview3d';
import steveSkin from '@/assets/icons/steve.png';

const skinCanvas = ref(null);
let viewer = null;
let rotationSpeed = 0.01;

const uploadSkin = () => {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.png';
  input.onchange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const skinUrl = event.target.result;
        if (viewer) {
          viewer.loadSkin(skinUrl);
        }
      };
      reader.readAsDataURL(file);
    }
  };
  input.click();
};

const rotateModel = () => {
  viewer.playerObject.rotation.y += rotationSpeed;
  requestAnimationFrame(rotateModel);
};

onMounted(() => {
  viewer = new SkinViewer({
    canvas: skinCanvas.value,
    width: 351,
    height: 520,
    skin: steveSkin,
  });

  if (WalkingAnimation && viewer.animations) {
    viewer.animations.add(WalkingAnimation);
  }

  rotateModel();
});
</script>

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
  gap: 32px;
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
</style>