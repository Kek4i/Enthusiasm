<template>
  <div class="news-list">
    <div class="news-header">
      <h2 class="section-title">Новости</h2>
      <div class="title-underline"></div>
    </div>
    <div class="news-post" v-for="post in posts" :key="post.id">
      <div class="news-post-right-side">
        <img :alt="post.imageAlt" :src="post.imageSrc" />
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
  display: flex;
  flex-direction: row;
  gap: 32px;
  width: 100%;
}

.news-post-left-side {
  flex-basis: 60%;
  flex-grow: 1;
  max-width: 815px;
}

.news-post-right-side {
  flex-basis: 40%;
  flex-grow: 1;
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
  font-size: 30px;
  color: #fff;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.news-post-description {
  color: #fff;
  font-size: 18px;
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

@media (max-width: 1023px) {
  .news-post {
    flex-direction: column;
  }

  .news-post-left-side,
  .news-post-right-side {
    max-width: 100%;
    width: 100%;
  }

  .custom-button {
    justify-content: center;
    margin: 0 auto;
    width: 100%;
  }

  .full-width-button {
    width: 100%;
  }
}

@media (max-width: 768px) {

  .section-title {
    font-size: 27px;
  }

  .news-list {
    padding: 35px 20px;
  }
}
</style>

<script setup>
import { ref } from 'vue';
import HITECH1710CreateImage from '@/assets/icons/mainPage/HITECH1710.webp';
import denrozhdeniyaproektaCreateImage from '@/assets/icons/mainPage/den-rozhdeniya-proekta.webp';
import HARDTECH1201CreateImage from '@/assets/icons/mainPage/HARDTECH1.20.1.webp';
import HiTechCreateImage from '@/assets/icons/mainPage/HiTech 1.20.1.png';
import terraFirmaCreateImage from '../../assets/icons/mainPage/TERRAFIRMACREATE1.20.1.png';
import indUpgradeCreateImage from '@/assets/icons/mainPage/INDUPGRADE.png';

const posts = ref([
  {
    id: 1,
    title: 'HiTech 1.7.10',
    link: '/servers/hitech1710',
    imageSrc: HITECH1710CreateImage,
    imageAlt: 'HiTech 1.7.10',
    description: `
      Дорогие игроки!<br><br>
      Сервер <strong><router-link to="/servers/hitech1710" target="_blank"><span style="color: rgb(114, 164, 197);">HiTech 1.7.10</span></router-link></strong> открыт и доступен для игры!<br>
      В честь открытия вы можете <strong><router-link to="/store/servers" target="_blank"><span style="color: rgb(230, 126, 35);">купить привилегию</span></router-link></strong> со скидкой до <strong><span style="color: rgb(230, 126, 35);">20%</span></strong><br><br>
      В полной новости вы сможете ознакомиться с сервером подробней!
    `
  },
  {
    id: 2,
    title: 'День рождения проекта',
    link: '/news/posts/den-rozhdeniya-proekta',
    imageSrc: denrozhdeniyaproektaCreateImage,
    imageAlt: 'den-rozhdeniya-proekta',
    description: `
      Не упустите <strong><router-link to="/servers/hardtech" target="_blank"><span style="color: rgb(236, 92, 243);">крутые скидки</span></router-link></strong>, новый <strong><span style="color: rgb(236, 92, 243);">праздничный кейс</span></strong> по выгодной цене и <strong><span style="color: rgb(236, 92, 243);">"/kit 1year"</span></strong> для всех кто наиграл <strong><span style="color: rgb(236, 92, 243);">24 ч</span></strong><br><br>
      Так же напоминаем что на проекте работает <strong><span style="color: rgb(254, 139, 201);">скидка на оптовую покупку кейсов</span></strong> до <strong><span style="color: rgb(254, 139, 201);">30%</span></strong>
    `
  },
  {
    id: 3,
    title: 'HardTech 1.20.1',
    link: '/servers/hardtech',
    imageSrc: HARDTECH1201CreateImage,
    imageAlt: 'HardTech 1.20.1',
    description: `
      Дорогие игроки!<br><br>
      Сервер <strong><router-link to="/servers/hardtech" target="_blank"><span style="color: rgb(53, 152, 219);">HardTech</span></router-link></strong> открыт и доступен для игры!<br>
      В честь открытия вы можете <strong><router-link to="/store/servers" target="_blank"><span style="color: rgb(230, 126, 35);">купить привилегию</span></router-link></strong> со скидкой до <strong><span style="color: rgb(230, 126, 35);">20%</span></strong><br><br>
      В полной новости вы сможете ознакомиться с сервером подробней!
    `
  },
  {
    id: 4,
    title: 'HiTech 1.20.1',
    link: '/servers/hitech',
    imageSrc: HiTechCreateImage,
    imageAlt: 'HiTech 1.20.1',
    description: `
      Дорогие игроки!<br><br>
      Сервер <strong><router-link to="/servers/hitech" target="_blank"><span style="color: rgb(22, 145, 121);">HiTech 1.20.1</span></router-link></strong> открыт и доступен для игры!<br>
      В честь открытия вы можете <strong><router-link to="/store/servers" target="_blank"><span style="color: rgb(230, 126, 35);">купить привилегию</span></router-link></strong> со скидкой до <strong><span style="color: rgb(230, 126, 35);">20%</span></strong><br><br>
      В полной новости вы сможете ознакомиться с сервером подробней!
    `
  },
  {
    id: 5,
    title: 'TerraFirmaCreate 1.20.1',
    link: '/servers/terrafirmacreate',
    imageSrc: terraFirmaCreateImage,
    imageAlt: 'TerraFirmaCreate 1.20.1',
    description: `
      Дорогие игроки!<br><br>
      Сервер <strong><router-link to="/servers/industrialupgrade" target="_blank"><span style="color: rgb(22, 145, 121)">TerraFirmaCreate</span></router-link></strong> открыт и доступен для игры!<br>
      В честь открытия вы можете <strong><router-link to="/store/servers" target="_blank"><span style="color: rgb(230, 126, 35);">купить привилегию</span></router-link></strong> со скидкой до <strong><span style="color: rgb(230, 126, 35);">20%</span></strong><br><br>
      В полной новости вы сможете ознакомиться с сервером подробней!
    `
  },
  {
    id: 6,
    title: 'Ind:Upgrade',
    link: '/servers/industrialupgrade',
    imageSrc: indUpgradeCreateImage,
    imageAlt: 'Ind:Upgrade',
    description: `
      Дорогие игроки!<br><br>
      Сервер <strong><router-link to="/servers/industrialupgrade" target="_blank"><span style="color: rgb(230, 126, 35);">Ind:Upgrade</span></router-link></strong> открыт и доступен для игры!<br>
      В честь открытия вы можете <strong><router-link to="/store/servers" target="_blank"><span style="color: rgb(230, 126, 35);">купить привилегию</span></router-link></strong> со скидкой до <strong><span style="color: rgb(230, 126, 35);">20%</span></strong><br><br>
      В полной новости вы сможете ознакомиться с сервером подробней!
    `
  }
]);
</script>
