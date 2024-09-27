<template>
  <div class="admin-card">
    <span class="admin-card__nick">{{ nick }}</span>
    <img :src="avatar" class="admin-card__avatar" :alt="`Avatar of ${nick}`">
    <span class="admin-card__role">{{ role }}</span>

    <div v-if="links.length" class="admin-card__links">
      <a v-for="(link, index) in links" :key="index" :href="link.url" target="_blank">
        <img :src="getIcon(link.type)" :alt="`${link.type} icon`" class="social-link">
      </a>
    </div>
  </div>
</template>

<style scoped>

.admin-card {
  display: flex;
  padding: 15px 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border-radius: 10px;
  background: hsla(0, 0%, 100%, .05);
  width: 100%;
  margin-inside: auto;
  box-sizing: border-box;
}

.admin-card__nick {
  color: #fff;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.admin-card__avatar {
  width: 120px;
  height: 120px;
  color: transparent;
  border-radius: 10px;
}

.admin-card__role {
  color: #fff;
  text-align: center;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
}

.admin-card__links {
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

@media (max-width: 768px) {

  .admin-card__nick {
    font-size: 17px;
  }

  .admin-card__avatar {
    width: 70px;
    height: 70px;
  }

  .admin-card__role {
    font-size: 11px;
  }
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