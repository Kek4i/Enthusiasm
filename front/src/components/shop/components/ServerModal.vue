<template>
  <div class="modal-overlay" @click="closeModal">
    <div class="modal-content" @click.stop>
      <img class="modal-close-icon" @click="closeModal" src="@/assets/icons/close.svg" alt="close" />
      <div class="modal-header">Выберите сервер</div>
      <div class="modal-body">
        <div v-for="subServer in subServers" :key="subServer.id" class="server-card">
          <a :href="subServer.link" class="server-card-link">
            <img :src="subServer.image" alt="server_image" class="server-image" />
            <div class="server-info">
              <div class="server-tag" :class="subServer.tag === 'NEW' ? 'tag-new' : subServer.tag === 'WIPE' ? 'tag-wipe' : subServer.tag === 'SEASON' ? 'tag-season' : ''">{{ subServer.tag }}</div>
              <div class="server-status">
                <template v-if="subServer.status === 'online'">
                  <span>{{ subServer.online }}</span>
                  <img alt="onlineIcon" src="@/assets/icons/status_online.png" />
                </template>
                <template v-else-if="subServer.status === 'offline'">
                  <span class="status-offline">Оффлайн</span>
                  <img alt="offlineIcon" src="@/assets/icons/status_offline.png" />
                </template>
                <template v-else-if="subServer.status === 'maintenance'">
                  <span class="status-maintenance">Тех.работы</span>
                  <img alt="maintenanceIcon" src="@/assets/icons/status_maintrance.png" />
                </template>
              </div>
            </div>
            <div class="server-title">
              <div class="server-name">{{ subServer.name }}</div>
              <div class="server-version">{{ subServer.version }}</div>
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

.modal-overlay {
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
  box-sizing: border-box;
}

.modal-content {
  display: flex;
  flex-direction: column;
  gap: 15px;
  position: relative;
  padding: 30px 10px;
  border-radius: 10px;
  background: rgba(30, 29, 29, .9);
  max-width: 600px;
  max-height: min(700px, -20px + 100vh);
  width: 100%;
}

.modal-close-icon {
  position: absolute;
  top: 25px;
  right: 25px;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 16px;
  overflow-y: auto;
  padding-inline: 15px;
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

.server-card {
  width: 100%;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  max-width: 360px;
  align-items: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background: transparent;
}

.server-card:hover {
  box-shadow: rgb(255, 147, 112) 0 20px 50px -10px;
  transform: scale(1.05) translateZ(0px);
}

.server-card-link {
  flex-direction: column;
  align-items: flex-end;
  gap: 15px;
  position: relative;
  padding: 16px 18px;
  background-color: rgba(0, 0, 0, .3);
  overflow: hidden;
  width: 100%;
  display: flex;
  justify-content: center;
  border-radius: 10px;
}

.server-image {
  position: absolute;
  left: -32px;
  bottom: -58px;
  transform: rotate(13deg);
  width: 198px;
  height: 198px;
  object-fit: cover;
}

.server-info {
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  width: 100%;
  z-index: 1;
}

.server-tag {
  text-transform: uppercase;
  text-align: right;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.server-status {
  display: flex;
  gap: 6px;
  justify-content: center;
  align-items: flex-end;
  color: #fff;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.tag-new {
  background: linear-gradient(132deg, #1effc9, #71ddff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 6.5px rgba(30, 255, 201, 0.7);
}

.tag-wipe {
  background: linear-gradient(132deg, #ff5f6d, #ffc371);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 6.5px rgba(255,195,113,.7);
}

.tag-season {
  background: linear-gradient(132deg, #63cd51, #adff00);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 6.5px rgba(166, 255, 66, .7);
}

.status-offline {
  color: #ff0000;
}

.status-maintenance {
  color: #ffc371;
}

.server-title {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2px;
  z-index: 1;
}

.server-name {
  color: #fff;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  white-space: nowrap;
}

.server-version {
  color: #fff;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
</style>

<script setup>
const props = defineProps({
  subServers: Array,
  closeModal: Function
});
</script>