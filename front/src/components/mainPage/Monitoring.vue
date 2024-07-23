<template>
  <div class="monitoring-section">
    <div class="monitoring-header">
      <div class="title-container">
        <h2 class="section-title">Мониторинг</h2>
        <div class="title-underline"></div>
      </div>
      <div class="online-status">
        <span class="online-status-label">Общий онлайн:</span>
        <span class="online-status-number">{{ totalOnline }}</span>
      </div>
    </div>
    <div class="server-list-container">
      <div class="server-cards">
        <div
            v-for="server in servers"
            :key="server.id"
            class="server-card"
        >
          <router-link :to="server.link" class="server-image-wrapper">
            <img :src="server.image" :alt="server.title" class="server-image"/>
            <div class="server-info">
              <div class="server-tag" :class="server.tag === 'NEW' ? 'tag-new' : 'tag-wipe'">{{ server.tag }}</div>
              <div class="server-status">
                <template v-if="server.status === 'online'">
                  <span>{{ server.online }}</span><img alt="onlineIcon" src="@/assets/icons/status_online.svg"/>
                </template>
                <template v-else-if="server.status === 'offline'">
                  <span class="status-offline">Оффлайн</span><img alt="offlineIcon" src="@/assets/icons/status_offline.svg"/>
                </template>
                <template v-else-if="server.status === 'maintenance'">
                  <span class="status-maintenance">Тех.работы</span><img alt="maintenanceIcon" src="@/assets/icons/status_maintrance.svg"/>
                </template>
              </div>
            </div>
            <div class="server-title">
              <div class="server-name">{{ server.name }}</div>
                <div class="server-version">{{ server.version }}</div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.monitoring-section {
  padding: 64px 96px;
  flex-direction: column;
  gap: 24px;
  border-radius: 10px;
  background: hsla(0, 0%, 100%, .05);
  font-family: 'Inter', sans-serif;
}

.monitoring-header {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.title-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
}

.section-title {
  color: #fff;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0;
}

.title-underline {
  width: 64px;
  height: 8px;
  border-radius: 4px;
  background: linear-gradient(132deg, #ff5f6d, #ffc371);
}

.online-status {
  display: flex;
  gap: 8px;
}

.online-status-label {
  color: #fff;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.online-status-number {
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  background: linear-gradient(90deg, #ff626d, #ffc171);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.server-list-container {
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  padding-top: 20px;
}

.server-cards {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 23px;
  width: 100%;
  flex-wrap: wrap;
}

.server-card {
  width: 100%;
  max-width: 360px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: transparent;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
}

.server-card:hover {
  box-shadow: rgb(255, 147, 112) 0px 20px 50px -10px;
  transform: scale(1.05) translateZ(0px);
}

.server-status {
  display: flex;
  align-items: center;
  font-size: 20px;
}

.server-image-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: 360px;
  height: 136px;
  background-color: #222;
  overflow: hidden;
}

.server-image-wrapper img {
  width: 198px;
  height: 198px;
  object-fit: cover;
}

.server-image {
  position: absolute;
  left: -32px;
  bottom: -58px;
  transform: rotate(13deg);
}

.server-status img {
  width: 18px;
  height: 18px;
  margin-left: 8px;
}

.server-info {
  position: absolute;
  top: 10px;
  left: 10px;
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 324px;
  gap: 20px;
}

.server-tag {
  text-transform: uppercase;
  text-align: right;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
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

.status-offline {
  color: #ff0000;
}

.status-maintenance {
  color: #ffc371;
}

.server-title {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 32px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
}

.server-version {
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  text-align: right;
}
</style>

<script setup>
import { ref, computed } from 'vue';

const servers = ref([
  {
    id: 1,
    name: 'HardTech',
    version: '1.20.1',
    online: 120,
    image: 'src/assets/icons/hardtech.png',
    link: '/servers/hardtech',
    status: 'online',
    tag: 'NEW',
  },
  {
    id: 2,
    name: 'HiTech',
    version: '1.19.2',
    online: 110,
    image: 'src/assets/icons/hitech.png',
    link: '/servers/hitech',
    status: 'online',
    tag: 'WIPE',
  },
  {
    id: 3,
    name: 'Ind:Upgrade',
    version: '1.12.2',
    online: 0,
    image: 'src/assets/icons/apgrade.png',
    link: '/servers/indupgrade',
    status: 'maintenance',
    tag: 'NEW',
  },
  {
    id: 4,
    name: 'HiTech',
    version: '1.7.10',
    online: 0,
    image: 'src/assets/icons/hitech2.png',
    link: '/servers/hitech',
    status: 'offline',
    tag: 'WIPE',
  },
]);

const totalOnline = computed(() => {
  return servers.value.reduce((sum, server) => sum + server.online, 0);
});
</script>