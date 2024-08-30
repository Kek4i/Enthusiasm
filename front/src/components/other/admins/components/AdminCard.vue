<template>
  <div class="AdminsPage_card">
    <span class="AdminsPage_nick">{{ nick }}</span>
    <img :src="avatar" class="AdminsPage_avatar" :alt="`Avatar of ${nick}`">
    <span class="AdminsPage_pex">{{ role }}</span>

    <div v-if="links.length" class="AdminsPage_links">
      <a v-for="(link, index) in links" :key="index" :href="link.url" target="_blank">
        <img :src="getIcon(link.type)" :alt="`${link.type} icon`" class="social-link">
      </a>
    </div>
  </div>
</template>

<style scoped>

.AdminsPage_card {
  display: flex;
  padding: 15px 0px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border-radius: 10px;
  background: hsla(0, 0%, 100%, .05);
  width: 100%;
  margin-inside: auto;
}

.AdminsPage_nick {
  color: #fff;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.AdminsPage_avatar {
  width: 120px;
  height: 120px;
  color: transparent;
  border-radius: 10px;
}

.AdminsPage_pex {
  color: #fff;
  text-align: center;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
}

.AdminsPage_links {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  width: 100%;
}

.social-link {
  width: 24px;
  height: 24px;
}

</style>

<script setup>

import { defineProps } from 'vue';
import discordCreateImage from '@/assets/icons/discord.png'
import telegramCreateImage from '@/assets/icons/telegram.png'

const props = defineProps({
  nick: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  links: {
    type: Array,
    default: () => []
  }
});
const getIcon = (type) => {
  if (type === 'discord') return discordCreateImage;
  if (type === 'telegram') return telegramCreateImage;
  return '';
};

</script>