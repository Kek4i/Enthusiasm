<template>
  <div v-if="show" class="modal-overlay" @click="closeModal">
    <div class="StyledModal_modal" @click.stop>
      <div class="modal-content">
        <img alt="close" src="@/assets/icons/close.svg" class="styledModal-closeIcon" @click="closeModal">
        <div class="page-launcherContainer">
          <h3 class="PageSubTitle">Скачать лаунчер</h3>
          <div class="page-linksContainer">
            <a target="_blank" href="https://enthusiasm.world/Enthusiasm.exe" download @click="closeModal">
              <div class="page-link">
                <img src="@/assets/icons/Windows.svg" alt="Windows">
                <span>Windows (.exe)</span>
              </div>
            </a>
            <a target="_blank" href="https://enthusiasm.world/Enthusiasm.jar" download @click="closeModal">
              <div class="page-link">
                <img src="@/assets/icons/Apple.svg" alt="Windows">
                <span>Universal (.jar)</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.modal-overlay {
  top: 0;
  left: 0;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, .42);
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
}

.StyledModal_modal {
  background-image: url('@/assets/icons/modal-bg.png');
  background-position: -265.231px -333.34px;
  background-size: 206.875% 558.189%;
  background-color: rgb(22, 22, 22);
  background-repeat: no-repeat;
  z-index: 199;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 16px;
}

.modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 10px;
}

.page-launcherContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  padding: 32px 0;
  min-width: 754px;
}

.styledModal-closeIcon {
  position: absolute;
  top: 32px;
  right: 32px;
  cursor: pointer;
  color: transparent;
}

.PageSubTitle {
  color: #fff;
  font-size: 36px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  text-transform: uppercase;
  margin: 0;
}

.page-linksContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
}

.page-link {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 32px;
  border-radius: 10px;
  background: hsla(0, 0%, 100%, .05);
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  text-transform: uppercase;
  transition: transform 0.3s ease-in-out;
}

.page-link:hover {
  transform: scale(1.1);
}

.page-link span {
  text-decoration: none;
}

.page-link a {
  text-decoration: none;
}

.page-linksContainer a {
  text-decoration: none;
}

</style>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    closeModal() {
      this.$emit('close');
    }
  }
}
</script>