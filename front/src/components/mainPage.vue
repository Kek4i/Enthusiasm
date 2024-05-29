<template>
  <main class="main_content">
    <section class="page">
      <div class="page__container">
        <div class="page__slider">
          <div class="slide-container">
            <div
                v-for="(slide, index) in slides"
                :key="index"
                :class="['slide', { active: index === currentSlide }]"
            >
              <div class="info">
                <div class="title">{{ slide.title }}</div>
                <div class="description">{{ slide.description }}</div>
                <div class="buttons">
                  <router-link to="/play" class="custom-button">Начать играть</router-link>
                  <router-link :to="serverLinks[currentSlide]" class="custom-button more-button">Подробнее</router-link>
                </div>
              </div>
              <div class="image">
                <img :src="slide.image" :alt="slide.title" />
              </div>
            </div>
          </div>
          <div class="slide-nav">
            <button
                v-for="(slide, index) in slides"
                :key="index"
                @click="setSlide(index)"
                :class="{ active: index === currentSlide }"
            ></button>
          </div>
        </div>
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
                  <img :src="server.image" :alt="server.title" />
                  <div class="server-header">
                    <div class="servers-card-tag" :class="server.tag === 'NEW' ? 'new-tag' : 'wipe-tag'">{{ server.tag }}</div>
                    <div class="servers-card-online">
                      <template v-if="server.status === 'online'">
                        <span>{{ server.online }}</span><img alt="onlineIcon" src="./icons/status_online.svg" />
                      </template>
                      <template v-else-if="server.status === 'offline'">
                        <span class="servers-offline">Оффлайн</span><img alt="offlineIcon" src="./icons/status_offline.svg" />
                      </template>
                      <template v-else-if="server.status === 'maintenance'">
                        <span class="servers-maintenance">Тех.работы</span><img alt="maintenanceIcon" src="./icons/status_maintrance.svg" />
                      </template>
                    </div>
                  </div>
                  <div class="server-title">{{ server.title }}</div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="news-list">
          <div class="news-post">
            <div class="news-post-right-side">
              <img alt="HARDTECH 1.20.1_image" src="./icons/HARDTECH%201.20.1_image.webp">
            </div>
            <div class="news-post-left-side">
              <router-link class="news-post-title" to="/servers/hardtech" target="_blank">HARDTECH 1.20.1</router-link>
              <div class="news-post-description">
                <h3>
                  <strong>Дорогие игроки!
                    <br>
                    <br>
                  </strong>
                  <strong>Сервер
                    <router-link to="/servers/hardtech" target="_blank">
                      <span style="color: rgb(53, 152, 219);">HardTech</span>
                    </router-link>
                    открыт и доступен для игры!
                    <br>
                  </strong>
                  <strong>В честь открытия вы можете
                    <router-link to="/store/servers" target="_blank">
                      <span style="color: rgb(230, 126, 35);">купить привилегию</span>
                    </router-link>
                    со скидкой до
                    <span style="color: rgb(230, 126, 35);">20%</span>
                    <br>
                    <br>
                  </strong>
                  <strong>В полной новости вы сможете ознакомиться с сервером подробней!</strong>
                </h3>
              </div>
              <router-link to="/servers/hardtech" class="custom-button full-width-button">ЧИТАТЬ ПОЛНОСТЬЮ</router-link>
            </div>
          </div>
          <div class="news-post">
            <div class="news-post-right-side">
              <img alt="MI:FOUNDATION 1.19.2_image" src="./icons/FOUNDATION%201.19.2_image.webp">
            </div>
            <div class="news-post-left-side">
              <router-link class="news-post-title" to="/news/posts/mi-foundation-1-19-2-11" target="_blank">MI:FOUNDATION 1.19.2</router-link>
              <div class="news-post-description">
                <h3>
                  <strong>Дорогие игроки!
                    <br>
                    <br>
                  </strong>
                  <strong>Сервер
                    <router-link to="/servers/mifoundation" target="_blank">
                      <span style="color: rgb(132, 63, 161);">MI:Foundation</span>
                    </router-link>
                    открыт и доступен для игры!
                    <br>
                  </strong>
                  <strong>В честь открытия вы можете
                    <router-link to="/store/servers" target="_blank">
                      <span style="color: rgb(230, 126, 35);">купить привилегию</span>
                    </router-link>
                    со скидкой до
                    <span style="color: rgb(230, 126, 35);">20%</span>
                    <br>
                    <br>
                  </strong>
                  <strong>В полной новости вы сможете ознакомиться с обновлением подробней!</strong>
                </h3>
              </div>
              <router-link to="/news/posts/mi-foundation-1-19-2-11" class="custom-button full-width-button">ЧИТАТЬ ПОЛНОСТЬЮ</router-link>
            </div>
          </div>
          <div class="news-post">
            <div class="news-post-right-side">
              <img class="" alt="TERRA 2.0_image" src="./icons/ТЕRRА%202.0_image.webp">
            </div>
            <div class="news-post-left-side">
              <router-link class="news-post-title" to="/news/posts/terra-2-0-10" target="_blank">ТЕRRА 2.0</router-link>
              <div class="news-post-description">
                <h3>
                  <strong>Дорогие игроки!
                    <br>
                  </strong>
                  <strong>Сервер
                    <router-link to="/servers/terra" target="_blank">
                      <span style="color: rgb(230, 126, 35);">Тerra</span>
                    </router-link>
                    1.19.2 открыт и доступен для игры!
                    <br>
                  </strong>
                  <strong>При наличии предыдущей проходки, новую можно
                    <router-link to="/shop/servers/4/privileges" target="_blank">
                      <span style="color: rgb(224, 62, 45);">приобрести</span>
                    </router-link>
                    со скидкой до
                    <span style="color: rgb(224, 62, 45);">70%</span>
                    <br>
                    <br>
                  </strong>
                  <strong>В полной новости вы сможете ознакомиться с обновлением подробней!</strong>
                </h3>
              </div>
              <router-link to="/news/posts/terra-2-0-10" class="custom-button full-width-button">ЧИТАТЬ ПОЛНОСТЬЮ</router-link>
            </div>
          </div>
          <div class="news-post">
            <div class="news-post-right-side">
              <img class="" alt="Голосование_image" src="./icons/Голосование_image.webp">
            </div>
            <div class="news-post-left-side">
              <router-link class="news-post-title" to="/news/posts/golosovanie-8" target="_blank">Голосование</router-link>
              <div class="news-post-description">
                <h3>
                  <strong>Уважаемые игроки Энтузиазма!
                    <br>
                    <br>
                  </strong>
                  <strong>Спешим вам сообщить, что на проекте запущено
                    <router-link to="/account" target="_blank">
                      <span style="color: rgb(230, 126, 35);">голосование</span>
                    </router-link>,
                    с помощью которого вы сможете получать валюту -
                    "<router-link to="/account" target="_blank">
                      <span style="color: rgb(230, 126, 35);">Коины</span>
                    </router-link>"
                    и тратить их на кейсы или другие внутриигровые ценности.
                    <br>
                  </strong>
                </h3>
              </div>
              <router-link to="/news/posts/golosovanie-8" class="custom-button full-width-button">ЧИТАТЬ ПОЛНОСТЬЮ</router-link>
            </div>
          </div>
          <div class="news-post">
            <div class="news-post-right-side">
              <img alt="TERRA 1.19.2_image" src="./icons/TERRA%201.19.2_image.webp">
            </div>
            <div class="news-post-left-side">
              <router-link class="news-post-title" to="/news/posts/terra-1-19-2-5" target="_blank">TERRA 1.19.2</router-link>
              <div class="news-post-description">
                <h3>
                  <strong>Дорогие игроки!
                    <br>
                  </strong>
                  <strong>Приватный сезонный сервер
                    <router-link to="/servers/4" target="_blank">
                      <span style="color: rgb(230, 126, 35);">Terra 1.19.2</span>
                    </router-link>
                    официально ОТКРЫТ!
                    <br>
                  </strong>
                  <strong>Для игры на сервере не забудьте приобрести
                    <router-link to="/shop/servers/4/privileges" target="_blank">
                      <span style="color: rgb(230, 126, 35);">проходку</span>
                    </router-link>
                    <br>
                  </strong>
                  <strong>Начало сезона будет проходить на
                    <a href="https://www.twitch.tv/rivaviva">
                      <span style="color: rgb(230, 126, 35);">стриме</span>
                    </a>
                    <br>
                    А свежие новости вы сможете найти в
                    <a style="color: rgb(230, 126, 35);" href="https://discord.su/enthusiasm" target="_blank">дискорде</a>
                  </strong>
                </h3>
              </div>
              <router-link to="/news/posts/terra-1-19-2-5" class="custom-button full-width-button">ЧИТАТЬ ПОЛНОСТЬЮ</router-link>
            </div>
          </div>
          <div class="news-post">
            <div class="news-post-right-side">
              <img class="" alt="ЛАУНЧЕР ДОСТУПЕН К СКАЧИВАНИЮ!_image" src="./icons/ЛАУНЧЕР%20ДОСТУПЕН%20К%20СКАЧИВАНИЮ!_image.webp">
            </div>
            <div class="news-post-left-side">
              <router-link class="news-post-title" to="/news/posts/launcher-dostupen-k-skachivaniyu-4" target="_blank">ЛАУНЧЕР ДОСТУПЕН К СКАЧИВАНИЮ!</router-link>
              <div class="news-post-description">
                <h3>
                  <strong>Дорогие игроки, поздравляем с официальным открытием проекта!
                    <br>
                  </strong>
                  <strong>Прямо сейчас вас ожидают три сервера и скидки до
                      <span style="color: rgb(230, 126, 35);">35%</span>
                    <br>
                  </strong>
                  <strong>Так же в полной новости вас ожидает
                    <span style="color: rgb(230, 126, 35);">промокод</span>
                    для быстрого старта!
                    <br>
                  </strong>
                  <strong>
                    <router-link to="/servers/2" target="_blank" style="color: rgb(230, 126, 35);">Industrial Upgrade</router-link><br>
                    <router-link to="/servers/3" target="_blank" style="color: rgb(230, 126, 35);">Mi:Foundation</router-link><br>
                    <router-link to="/servers/1" target="_blank" style="color: rgb(230, 126, 35);">HiTech</router-link><br>
                  </strong>
                </h3>
              </div>
              <router-link to="/news/posts/launcher-dostupen-k-skachivaniyu-4" class="custom-button full-width-button">ЧИТАТЬ ПОЛНОСТЬЮ</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
a {
  text-decoration: none;
}

.main_content {
  max-width: 1320px;
  margin-top: 32px;
  margin-inline: auto;
  display: flex;
  width: 100%;
  padding: 0 16px;
}

.page {
  max-width: 1320px;
  width: 100%;
}

.page__container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 128px;
}

.page__slider {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.slide-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 100%;
  position: relative;
  padding: 16px;
  box-sizing: border-box;
}

.slide {
  display: none;
  align-items: center;
}

.slide.active {
  display: flex;
}

.info {
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 50%;
  text-align: left;
  align-items: flex-start;
}

.image {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 50%;
  margin-left: 40px;
}

.image img {
  width: 660px;
  height: 373px;
  object-fit: cover;
  border-radius: 6px;
}

.title {
  color: #fff;
  font-size: 64px;
  font-weight: 800;
  text-transform: uppercase;
}

.description {
  color: #fff;
  font-size: 24px;
}

.buttons {
  display: flex;
  gap: 24px;
}

.slide-nav {
  display: flex;
  padding: 32px 16px;
  align-items: flex-start;
  gap: 24px;
}

.slide-nav button {
  width: 70px;
  height: 16px;
  border-radius: 8px;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.05);
  border: initial;
}

.slide-nav button.active {
  background: linear-gradient(132deg, rgb(255, 95, 109) 0%, rgb(255, 195, 113) 100%);
}

.custom-button {
  display: flex;
  padding: 16px 20px;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 8px;
  background: linear-gradient(132deg, rgb(255, 95, 109) 0%, rgb(255, 195, 113) 100%);
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none;
  white-space: nowrap;
  transition: transform 0.3s ease;
}

.custom-button:hover {
  box-shadow: rgb(255, 147, 112) 0px 10px 15px -5px;
  transform: scale(1.05);
}

.more-button {
  background: rgba(255, 255, 255, 0.05);
}

.more-button:hover {
  background: rgba(255, 255, 255, 0.1);
  box-shadow: none;
  transform: scale(1.05);
}

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

.servers-card-online img {
  width: 18px;
  height: 18px;
  margin-left: 8px;
}

.servers-image {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 33px;
  border-radius: 10px;
  width: 100%;
  max-width: 360px;
  background-color: #222;
}

.servers-image img {
  width: 100%;
  border-radius: 10px;
  object-fit: cover;
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

.news-list{
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
}

.news-post{
  position: relative;
  display: flex;
  gap: 32px;
  width: 100%;
}

.news-post-left-side {
  width: 100%;
  max-width: 815px;
}

.news-post-right-side {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 14px;
}

.news-post-right-side img {
  width: 480px;
  height: 310px;
  object-fit: cover;
  border-radius: 6px;
}

.news-post-description {
  max-height: 216px;
  color: #fff;
  font-size: 19px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.full-width-button {
  width: 220px;
  height: 52px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0;
}

.news-post-title {
  font-size: 32px;
  color: #fff;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
</style>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

const slides = ref([
  {
    title: 'HARDTECH',
    description:
        'Сервер с постепенным техническим развитием. Начни с бронзовых механизмов, изучай новые технологии и дойди до термоядерного синтеза!',
    image: 'src/components/icons/hardtech.webp',
  },
  {
    title: 'MI:Foundation',
    description:
        'Технически сложный и захватывающий модпак с элементами магии, ориентированный на автоматизацию и масштабирование вашего производства!',
    image: 'src/components/icons/mif.webp',
  },
  {
    title: 'IND:UPGRADE',
    description:
        'Уникальный сервер на базе мода Industrial Upgrade, предлагающий огромное количество технологий и постепенную прогрессию улучшения производства.',
    image: 'src/components/icons/apgrade.webp',
  },
  {
    title: 'HITECH',
    description:
        'Сервер ставший классикой технологического Майнкрафта со всеми любимыми HiTech модами.',
    image: 'src/components/icons/hitech.webp',
  },
]);

const servers = ref([
  {
    id: 1,
    title: 'HardTech',
    online: 120,
    image: 'src/components/icons/hardtech.png',
    link: '/servers/hardtech',
    status: 'online',
    tag: 'NEW',
  },
  {
    id: 2,
    title: 'MI:Foundation',
    online: 0,
    image: 'src/components/icons/mif.png',
    link: '/servers/mif',
    status: 'offline',
    tag: 'WIPE',
  },
  {
    id: 3,
    title: 'Ind:Upgrade',
    online: 0,
    image: 'src/components/icons/apgrade.png',
    link: '/servers/indupgrade',
    status: 'maintenance',
    tag: 'NEW',
  },
  {
    id: 4,
    title: 'Hitech',
    online: 110,
    image: 'src/components/icons/hitech.png',
    link: '/servers/hitech',
    status: 'online',
    tag: 'WIPE',
  },
]);

const serverLinks = ref([
  '/servers/hardtech',
  '/servers/mif',
  '/servers/indupgrade',
  '/servers/hitech',
]);

const currentSlide = ref(0);
let intervalId;

function setSlide(index) {
  currentSlide.value = index;
  resetTimer();
}

function nextSlide() {
  currentSlide.value = (currentSlide.value + 1) % slides.value.length;
}

function resetTimer() {
  clearInterval(intervalId);
  intervalId = setInterval(nextSlide, 10000);
}

onMounted(() => {
  intervalId = setInterval(nextSlide, 10000);
});

onUnmounted(() => {
  clearInterval(intervalId);
});

const totalOnline = computed(() => {
  return servers.value.reduce((sum, server) => sum + server.online, 0);
});
</script>