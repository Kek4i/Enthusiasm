<template>
  <div v-if="isVisible" class="modal-backdrop">
    <div class="modal-content">
      <img @click="closeModal" class="close-icon" src="@/assets/icons/close.svg" alt="close" />
      <div class="modal-header">{{ selectedPrivilege.name }}</div>
      <div class="modal-body">
        <div class="privilege-description">
          <div v-for="section in selectedPrivilege.details" :key="section.title" class="privilege-block">
            <p>{{ section.title }}</p>
            <div v-for="item in section.items" :key="item.name || item" class="privilege-item">
              <p v-if="item.name">{{ item.name }}</p>
              <div v-if="item.image" class="privilege-description-img">
                <img :src="item.image" class="kit-image" alt="" />
              </div>
              <p v-else v-html="item"></p>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button class="buy-btn">Купить</button>
        <button class="gift-btn">
          <img src="@/assets/icons/gift.svg" alt="gift" />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>

p {
  margin: 0;
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

.modal-content {
  display: flex;
  flex-direction: column;
  gap: 15px;
  position: relative;
  padding: 30px;
  border-radius: 10px;
  background: rgba(30, 29, 29, .9);
  width: 100%;
  max-width: 600px;
  max-height: min(700px, -20px + 100vh);
}

.close-icon {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}

.modal-header {
  margin-inline: auto;
  padding-inline: 15px;
  color: #fff;
  font-size: 32px;
  font-weight: 700;
}

.modal-body {
  overflow-y: auto;
  padding-inline-end: 15px;
  padding-inline: 15px;
  color: #fff;
}

.modal-body::-webkit-scrollbar {
  width: 12px;
}

.modal-body::-webkit-scrollbar-thumb {
  background: linear-gradient(132deg, rgb(255, 95, 109) 0%, rgb(255, 195, 113) 100%);
  border-radius: 10px;
}

.modal-body::-webkit-scrollbar-track {
  background: hsla(0, 0%, 100%, .05);
  border-radius: 10px;
}

.privilege-description {
  display: flex;
  width: 100%;
  border-radius: 10px;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.privilege-block {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 6px;
  width: 100%;
  position: relative;
  padding: 16px 22px;
  background: hsla(0, 0%, 100%, .05);
  border-radius: 10px;
}

.privilege-item {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 8px 16px;
  width: 100%;
  background: hsla(0, 0%, 100%, .05);
  border-radius: 10px;
}

.privilege-description-img {
  margin-left: 5px;
  display: block;
  position: relative;
  min-height: 50px;
}

.kit-image {
  width: 100%;
  max-width: 400px;
  height: auto;
  color: transparent;
}

.modal-footer {
  padding-inline: 15px;
  display: grid;
  grid-template-columns: 9fr 1fr;
  grid-gap: 6px;
  gap: 6px;
}

.buy-btn, .gift-btn {
  display: flex;
  padding: 16px 20px;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 8px;
  background: linear-gradient(90deg, #ff626d, #ffc171);
  color: #fff;
  font-size: 19px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  border: initial;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.buy-btn:hover, .gift-btn:hover {
  box-shadow: rgb(255, 147, 112) 0 20px 50px -10px;
  transform: scale(1.05) translateZ(0px);
}

@media (max-width: 768px) {
  .modal-content {
    padding: 30px 10px;
  }
}

</style>

<script>
export default {
  props: ['selectedPrivilege'],
  data() {
    return {
      isVisible: true,
    };
  },
  methods: {
    closeModal() {
      this.isVisible = false;
      this.$emit('close');
    },
  },
};
</script>