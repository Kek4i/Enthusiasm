<template>
  <div class="news-list">
    <div class="news-header">
      <h2 class="section-title">Новости</h2>
      <div class="title-underline"></div>
    </div>
    <div class="news-post">
      <div class="news-post-right-side">
        <img alt="HARDTECH 1.20.1_image" src="@/assets/icons/HITECH%201.19.2_image.webp">
      </div>
      <div class="news-post-left-side">
        <router-link class="news-post-title" to="/servers/hitech" target="_blank">HITECH 1.19.2</router-link>
        <div class="news-post-description">
          <p>
            Дорогие игроки!
            <br>
            <br>
            Сервер
            <strong>
              <router-link to="/servers/hitech" target="_blank">
                <span style="color: rgb(45, 194, 107);">HiTech 1.19.2</span>
              </router-link>
            </strong>
            открыт и доступен для игры!
            <br>
            В честь открытия вы можете
            <strong>
              <router-link to="/store/servers" target="_blank">
                <span style="color: rgb(230, 126, 35);">купить привилегию</span>
              </router-link>
            </strong>
            со скидкой до
            <span style="color: rgb(230, 126, 35);">20%</span>
            <br><br>
            В полной новости вы сможете ознакомиться с сервером подробней!
          </p>
        </div>
        <router-link to="/servers/hitech" class="custom-button full-width-button">ЧИТАТЬ ПОЛНОСТЬЮ</router-link>
      </div>
    </div>
    <div class="news-post">
      <div class="news-post-right-side">
        <img alt="HARDTECH 1.20.1_image" src="@/assets/icons/HARDTECH%201.20.1_image.webp">
      </div>
      <div class="news-post-left-side">
        <router-link class="news-post-title" to="/servers/hardtech" target="_blank">HARDTECH 1.20.1</router-link>
        <div class="news-post-description">
          <p>
            Дорогие игроки!
              <br>
              <br>
            Сервер
            <strong>
              <router-link to="/servers/hardtech" target="_blank">
                <span style="color: rgb(53, 152, 219);">HardTech</span>
              </router-link>
            </strong>
              открыт и доступен для игры!
              <br>
            В честь открытия вы можете
            <strong>
              <router-link to="/store/servers" target="_blank">
                <span style="color: rgb(230, 126, 35);">купить привилегию</span>
              </router-link>
            </strong>
              со скидкой до
              <span style="color: rgb(230, 126, 35);">20%</span>
              <br><br>
            В полной новости вы сможете ознакомиться с сервером подробней!
          </p>
        </div>
        <router-link to="/servers/hardtech" class="custom-button full-width-button">ЧИТАТЬ ПОЛНОСТЬЮ</router-link>
      </div>
    </div>
    <div class="news-post">
      <div class="news-post-right-side">
        <img alt="MI:FOUNDATION 1.19.2_image" src="@/assets/icons/FOUNDATION%201.19.2_image.webp">
      </div>
      <div class="news-post-left-side">
        <router-link class="news-post-title" to="/news/posts/mi-foundation-1-19-2-11" target="_blank">MI:FOUNDATION 1.19.2</router-link>
        <div class="news-post-description">
          <p>
            Дорогие игроки!
              <br><br>
            Сервер
            <strong>
              <router-link to="/servers/mifoundation" target="_blank">
                <span style="color: rgb(132, 63, 161);">MI:Foundation</span>
              </router-link>
            </strong>
              открыт и доступен для игры!
              <br>
            В честь открытия вы можете
            <strong>
              <router-link to="/store/servers" target="_blank">
                <span style="color: rgb(230, 126, 35);">купить привилегию</span>
              </router-link>
            </strong>
              со скидкой до
              <span style="color: rgb(230, 126, 35);">20%</span>
              <br><br>
            В полной новости вы сможете ознакомиться с обновлением подробней!
          </p>
        </div>
        <router-link to="/news/posts/mi-foundation-1-19-2-11" class="custom-button full-width-button">ЧИТАТЬ ПОЛНОСТЬЮ</router-link>
      </div>
    </div>
    <div class="news-post">
      <div class="news-post-right-side">
        <img alt="Голосование_image" src="@/assets/icons/Голосование_image.webp">
      </div>
      <div class="news-post-left-side">
        <router-link class="news-post-title" to="/news/posts/golosovanie-8" target="_blank">Голосование</router-link>
        <div class="news-post-description">
          <p>
            Уважаемые игроки Энтузиазма!
              <br><br>
            Спешим вам сообщить, что на проекте запущено
            <strong>
              <router-link to="/account" target="_blank">
                <span style="color: rgb(230, 126, 35);">голосование</span>
              </router-link>
            </strong>,
              с помощью которого вы сможете получать валюту -
              "<strong><router-link to="/account" target="_blank">
                <span style="color: rgb(230, 126, 35);">Коины</span>
              </router-link></strong>"
              и тратить их на кейсы или другие внутриигровые ценности.
              <br>
          </p>
        </div>
        <router-link to="/news/posts/golosovanie-8" class="custom-button full-width-button">ЧИТАТЬ ПОЛНОСТЬЮ</router-link>
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
</script>
