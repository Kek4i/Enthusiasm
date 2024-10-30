<template>
  <div v-if="visible" class="modal-backdrop" @click="close">
    <div class="modal" @click.stop>
      <img @click="close" alt="close" src="@/assets/icons/close.svg" class="modal__close-icon">
      <div class="modal__header">Способы связи</div>
      <div class="modal__body">
        <div class="PageList_modal">
          <a href="https://u.enthusiasm.world/discordsupport">
            <div class="PageList_item">
              <img src="@/assets/icons/discord.svg" alt="Discord">
              <span class="PageList_name">Discord</span>
            </div>
          </a>
          <a href="https://u.enthusiasm.world/telegramsupport">
            <div class="PageList_item">
              <img src="@/assets/icons/telegram.svg" alt="Telegram">
              <span class="PageList_name">Telegram</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

a {
  text-decoration: none;
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
}

.PageList_modal {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  flex-direction: column;
  gap: 20px;
  padding: 10px;
}

.PageList_item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 22px;
  background: hsla(0, 0%, 100%, .05);
  border-radius: 10px;
  transition: transform 0.2s ease;
}

.PageList_item:hover {
  transform: scale(1.05) translateZ(0px);
}

.PageList_name {
  font-size: 22px;
  color: #fff;
}

@media (max-width: 544px) {
  .PageList_modal {
    display: flex;
  }
}

</style>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    visible: {
      type: Boolean,
      required: true
    }
  },
  emits: ['close'],
  methods: {
    close() {
      this.$emit('close');
    }
  }
};
</script>