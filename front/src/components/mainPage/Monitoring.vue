<template>
  <div class="monitoring">
    <div class="monitoring-container">
      <div class="page-container-title">
        <h2 class="page-title">Мониторинг</h2>
        <div class="page-line"></div>
      </div>
      <div class="monitoring-online">
        <span class="monitoring-online-text">Общий онлайн:</span>
        <span class="monitoring-online-number">{{ totalOnline }}</span>
      </div>
    </div>
    <div class="servers-container">
      <div class="servers-list">
        <div
            v-for="server in servers"
            :key="server.id"
            class="servers-card"
        >
          <router-link :to="server.link" class="servers-image">
            <img :src="server.image" :alt="server.title" class="servers-card-img"/>
            <div class="server-header">
              <div class="servers-card-tag" :class="server.tag === 'NEW' ? 'new-tag' : 'wipe-tag'">{{ server.tag }}</div>
              <div class="servers-card-online">
                <template v-if="server.status === 'online'">
                  <span>{{ server.online }}</span><img alt="onlineIcon" src="@/assets/icons/status_online.svg"/>
                </template>
                <template v-else-if="server.status === 'offline'">
                  <span class="servers-offline">Оффлайн</span><img alt="offlineIcon" src="@/assets/icons/status_offline.svg"/>
                </template>
                <template v-else-if="server.status === 'maintenance'">
                  <span class="servers-maintenance">Тех.работы</span><img alt="maintenanceIcon" src="@/assets/icons/status_maintrance.svg"/>
                </template>
              </div>
            </div>
            <div class="server-title">{{ server.title }}</div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.monitoring {
  width: 100%;
  padding: 64px 96px;
  flex-direction: column;
  gap: 32px;
  border-radius: 10px;
  background: hsla(0, 0%, 100%, .05);
}

.monitoring-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.page-container-title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
}

.page-title {
  color: #fff;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0;
}

.page-line {
  width: 64px;
  height: 8px;
  border-radius: 4px;
  background: linear-gradient(132deg, #ff5f6d, #ffc371);
}

.monitoring-online {
  display: flex;
  gap: 8px;
}

.monitoring-online-text {
  color: #fff;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.monitoring-online-number {
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  background: linear-gradient(90deg, #ff626d, #ffc171);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.servers-container {
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  padding-top: 20px;
}

.servers-list {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 23px;
  width: 100%;
  flex-wrap: wrap;
}

.servers-card {
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

.servers-card:hover {
  box-shadow: rgb(255, 147, 112) 0px 20px 50px -10px;
  transform: scale(1.05) translateZ(0px);
}

.servers-card-online {
  display: flex;
  align-items: center;
  font-size: 20px;
}

.servers-image {
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

.servers-image img {
  width: 198px;
  height: 198px;
  object-fit: cover;
}

.servers-card-img {
  position: absolute;
  left: -32px;
  bottom: -58px;
  transform: rotate(13deg);
}

.servers-card-online img {
  width: 18px;
  height: 18px;
  margin-left: 8px;
}

.server-header {
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
}

.servers-card-tag {
  text-transform: uppercase;
  text-align: right;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-right: 10px;
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
}

.new-tag {
  background: linear-gradient(132deg, #1effc9, #71ddff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 6.5px rgba(30, 255, 201, 0.7);
}

.wipe-tag {
  background: linear-gradient(132deg, #ff5f6d, #ffc371);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 6.5px rgba(255,195,113,.7);
}

.servers-offline{
  color: #ff0000;
}

.servers-maintenance{
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
</style>

<script setup>
import { ref, computed } from 'vue';

const servers = ref([
  {
    id: 1,
    title: 'HardTech',
    online: 120,
    image: 'src/assets/icons/hardtech.png',
    link: '/servers/hardtech',
    status: 'online',
    tag: 'NEW',
  },
  {
    id: 2,
    title: 'Hitech',
    online: 110,
    image: 'src/assets/icons/hitech.png',
    link: '/servers/hitech',
    status: 'online',
    tag: 'WIPE',
  },
  {
    id: 3,
    title: 'MI:Foundation',
    online: 0,
    image: 'src/assets/icons/mif.png',
    link: '/servers/mif',
    status: 'offline',
    tag: 'WIPE',
  },
  {
    id: 4,
    title: 'Ind:Upgrade',
    online: 0,
    image: 'src/assets/icons/apgrade.png',
    link: '/servers/indupgrade',
    status: 'maintenance',
    tag: 'NEW',
  },
  {
    id: 5,
    title: 'Hitech',
    online: 110,
    image: 'src/assets/icons/hitech2.png',
    link: '/servers/hitech',
    status: 'online',
    tag: 'WIPE',
  },
]);

const totalOnline = computed(() => {
  return servers.value.reduce((sum, server) => sum + server.online, 0);
});
</script>