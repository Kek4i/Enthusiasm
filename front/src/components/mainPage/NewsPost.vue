<template>
  <div class="news-list">
    <div class="news-header">
      <h2 class="section-title">Новости</h2>
      <div class="title-underline"></div>
    </div>
    <div class="news-post" v-for="post in posts" :key="post.id">
      <div class="news-post-right-side">
        <img :alt="post.imageAlt" :src="post.imageSrc">
      </div>
      <div class="news-post-left-side">
        <router-link :to="post.link" class="news-post-title" target="_blank">{{ post.title }}</router-link>
        <div class="news-post-description">
          <p v-html="post.description"></p>
        </div>
        <router-link :to="post.link" class="custom-button full-width-button">ЧИТАТЬ ПОЛНОСТЬЮ</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
a {
  text-decoration: none;
}

.news-list {
  display: flex;
  padding: 64px 96px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  border-radius: 10px;
  background: hsla(0, 0%, 100%, .05);
  -webkit-backdrop-filter: blur(2px);
  backdrop-filter: blur(2px);
  font-family: 'Inter', sans-serif;
}

.news-header {
  display: flex;
  width: 100%;
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

.news-post {
  position: relative;
  flex-direction: row;
  display: flex;
  gap: 32px;
  width: 100%;
}

.news-post-left-side {
  flex-basis: 60%;
  flex-grow: 1;
  flex-shrink: 1;
  max-width: 815px;
}

.news-post-right-side {
  flex-basis: 40%;
  flex-grow: 1;
  flex-shrink: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 14px;
}

.news-post-right-side img {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 6px;
}

.news-post-title {
  font-size: 24px;
  color: #fff;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.news-post-description {
  color: #fff;
}

.custom-button {
  display: flex;
  padding: 16px 20px;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none;
  white-space: nowrap;
  transition: transform 0.3s ease;
}

.custom-button:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: scale(1.05);
}

.full-width-button {
  width: 220px;
  height: 52px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0;
}
</style>

<script setup>
import { ref } from 'vue';
import terraFirmaCreateImage from '@/assets/icons/TERRAFIRMACREATE1.20.1.png';
import indUpgradeCreateImage from '@/assets/icons/INDUPGRADE.png';
import miFoundationNewCreateImage from '@/assets/icons/MIFOUNDATION NEW 1.19.2.png';
import hiTechCreateImage from '@/assets/icons/HITECH 1.19.2_image.png';
import hardTechCreateImage from '@/assets/icons/HARDTECH 1.20.1_image.png';
import miFoundationCreateImage from '@/assets/icons/FOUNDATION 1.19.2_image.png';
import voteCreateImage from '@/assets/icons/Голосование_image.png';

const posts = ref([
  {
    id: 1,
    title: 'TerraFirmaCreate 1.20.1',
    link: '/servers/terrafirmacreate',
    imageSrc: terraFirmaCreateImage,
    imageAlt: 'TerraFirmaCreate 1.20.1',
    description: `
      Дорогие игроки!<br><br>
      Сервер <strong><router-link to="/servers/industrialupgrade" target="_blank"><span style="color: rgb(22, 145, 121)">TerraFirmaCreate</span></router-link></strong> открыт и доступен для игры!<br>
      В честь открытия вы можете <strong><router-link to="/store/servers" target="_blank"><span style="color: rgb(230, 126, 35);">приобрести привилегию</span></router-link></strong> со скидкой до <strong><span style="color: rgb(230, 126, 35);">20%</span></strong><br><br>
      В полной новости вы сможете ознакомиться с сервером подробней!
    `
  },
  {
    id: 2,
    title: 'Ind:Upgrade',
    link: '/servers/indupgrade',
    imageSrc: indUpgradeCreateImage,
    imageAlt: 'Ind:Upgrade',
    description: `
      Дорогие игроки!<br><br>
      Сервер <strong><router-link to="/servers/industrialupgrade" target="_blank"><span style="color: rgb(230, 126, 35);">Ind:Upgrade</span></router-link></strong> открыт и доступен для игры!<br>
      В честь открытия вы можете <strong><router-link to="/store/servers" target="_blank"><span style="color: rgb(230, 126, 35);">приобрести привилегию</span></router-link></strong> со скидкой до <strong><span style="color: rgb(230, 126, 35);">20%</span></strong><br><br>
      В полной новости вы сможете ознакомиться с сервером подробней!
    `
  },
  {
    id: 3,
    title: 'MI:FOUNDATION NEW 1.19.2',
    link: '/servers/mif',
    imageSrc: miFoundationNewCreateImage,
    imageAlt: 'MI:FOUNDATION NEW 1.19.2',
    description: `
      Дорогие игроки!<br><br>
      Приватный сервер <strong><router-link to="/servers/mif" target="_blank"><span style="color: rgb(230, 126, 35);">MI:FoundationNEW</span></router-link></strong> открыт и доступен для игры!<br>
      Приобрести проход на сервер можно в разделе <strong><router-link to="/store/servers" target="_blank"><span style="color: rgb(230, 126, 35);">привилегий</span></router-link></strong><br><br>
      В полной новости вы сможете ознакомиться с сервером подробней!
    `
  },
  {
    id: 4,
    title: 'HITECH 1.19.2',
    link: '/servers/hitech',
    imageSrc: hiTechCreateImage,
    imageAlt: 'HITECH 1.19.2',
    description: `
      Дорогие игроки!<br><br>
      Сервер <strong><router-link to="/servers/hitech" target="_blank"><span style="color: rgb(45, 194, 107);">HiTech 1.19.2</span></router-link></strong> открыт и доступен для игры!<br>
      В честь открытия вы можете <strong><router-link to="/store/servers" target="_blank"><span style="color: rgb(230, 126, 35);">купить привилегию</span></router-link></strong> со скидкой до <strong><span style="color: rgb(230, 126, 35);">20%</span></strong><br><br>
      В полной новости вы сможете ознакомиться с сервером подробней!
    `
  },
  {
    id: 5,
    title: 'HARDTECH 1.20.1',
    link: '/servers/hardtech',
    imageSrc: hardTechCreateImage,
    imageAlt: 'HARDTECH 1.20.1',
    description: `
      Дорогие игроки!<br><br>
      Сервер <strong><router-link to="/servers/hardtech" target="_blank"><span style="color: rgb(53, 152, 219);">HardTech</span></router-link></strong> открыт и доступен для игры!<br>
      В честь открытия вы можете <strong><router-link to="/store/servers" target="_blank"><span style="color: rgb(230, 126, 35);">купить привилегию</span></router-link></strong> со скидкой до <strong><span style="color: rgb(230, 126, 35);">20%</span></strong><br><br>
      В полной новости вы сможете ознакомиться с сервером подробней!
    `
  },
  {
    id: 6,
    title: 'MI:FOUNDATION 1.19.2',
    link: '/news/posts/mi-foundation-1-19-2-11',
    imageSrc: miFoundationCreateImage,
    imageAlt: 'MI:FOUNDATION 1.19.2',
    description: `
      Дорогие игроки!<br><br>
      Сервер <strong><router-link to="/servers/mifoundation" target="_blank"><span style="color: rgb(230, 126, 35);">MI:Foundation</span></router-link></strong> обновлен до версии 1.19.2!<br>
      В честь обновления вы можете <strong><router-link to="/store/servers" target="_blank"><span style="color: rgb(230, 126, 35);">приобрести привилегию</span></router-link></strong> со скидкой до <strong><span style="color: rgb(230, 126, 35);">20%</span></strong><br><br>
      В полной новости вы сможете ознакомиться с изменениями подробнее!
    `
  },
  {
    id: 7,
    imageAlt: 'Голосование',
    imageSrc: voteCreateImage,
    link: '/news/posts/golosovanie-8',
    title: 'Голосование',
    description: `
      Уважаемые игроки Энтузиазма!
      <br><br>
      Спешим вам сообщить, что на проекте запущено <strong><router-link to="/account" target="_blank"><span style="color: rgb(230, 126, 35);">голосование</span></router-link></strong>, с помощью которого вы сможете получать валюту - "<strong><router-link to="/account" target="_blank"><span style="color: rgb(230, 126, 35);">Коины</span></router-link></strong>" и тратить их на кейсы или другие внутриигровые ценности.
      <br>
    `
  }
]);
</script>
