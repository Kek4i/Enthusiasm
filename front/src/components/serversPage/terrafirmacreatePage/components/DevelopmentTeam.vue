<template>
  <div class="container about-server">
    <div class="row d-flex">
      <div class="col-md-12 d-flex justify-content-center align-items-start">
        <h2 class="title">Команда разработки</h2>
      </div>
      <div class="col-md-12 d-flex justify-content-center align-items-start">
        <h4>Наша команда провела огромную работу в процессе создания данного сервера.</h4>
      </div>
      <div class="col-md-12 d-flex justify-content-center align-items-center flex-wrap">
        <div class="player-profile text-center" v-for="(member, index) in teamMembers" :key="index">
          <img :src="member.imgSrc" class="player-head img-fluid">
          <h5 class="title">{{ member.name }}</h5>
          <p>{{ member.role }}</p>
        </div>
      </div>
    </div>
    <div class="row d-flex">
      <div class="col-md-12 d-flex justify-content-center align-items-start glow">
        <h2 class="title">Мы уже ждем тебя на сервере!</h2>
      </div>
      <div class="col-md-12 d-flex justify-content-center align-items-start">
        <button class="btn menu my-2 my-sm-0 main-button">Начать играть</button>
      </div>
    </div>
  </div>
</template>

<style scoped>

h2 {
  font-weight: 700;
  color: #fff;
  font-size: 2em;
  padding-bottom: 20px;
  margin: 0 0 8px 0;
}

h4 {
  font-weight: 300;
  letter-spacing: .05em;
  color: rgb(212, 212, 212);
  font-size: 1.125rem;
  line-height: 1.75rem;
  margin: 0 0 8px 0;
}

.container {
  max-width: 1140px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  margin-right: -15px;
  margin-left: -15px;
}

.col-md-12 {
  flex: 0 0 100%;
  max-width: 100%;
}

.title {
  background: -webkit-linear-gradient(left, #FF5F6D, #FFC371);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.about-server {
  background-color: rgba(20, 20, 20, 0.251);
  border-radius: 1.5rem;
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  padding-top: 2rem;
  backdrop-filter: blur(2px);
  box-shadow: 0 0px 1px rgba(108, 108, 108, 0.421);
  box-sizing: border-box;
}

.d-flex {
  display: flex;
}

.align-items-start {
  align-items: flex-start;
}

.glow {
  animation: glow 5s infinite alternate;
}

@keyframes glow {
  0% {
    filter: drop-shadow(0 0 5px #FF5F6D);
  }
  100% {
    filter: drop-shadow(0 0 20px #FFC371);
  }
}

.justify-content-center {
  justify-content: center;
}

.img-fluid {
  max-width: 100%;
  height: auto;
}

.player-profile {
  margin: 40px;
}

.player-profile h5 {
  margin-top: 10px;
  color: rgb(212, 212, 212);
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 8px;
}

.player-profile p {
  margin-top: 5px;
  font-size: 14px;
  font-weight: 500;
  color: rgb(212, 212, 212);
}

.text-center {
  text-align: center;
  font-size: 16px;
  color: #333;
}

.player-head {
  width: 100px;
  height: 100px;
  border-radius: 10%;
  object-fit: cover;
}

.main-button {
  font-size: 1.15em;
  border-radius: 6px;
  color:white;
  margin-left: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  transform: scale(1.05) translateZ(0px);
  background: linear-gradient(132deg, rgb(255, 95, 109) 0%, rgb(255, 195, 113) 100%);
  padding: 10px;
  padding-left: 30px;
  padding-right: 30px;
  transition: box-shadow 200ms, transform 200ms;
  border: none;
  cursor: pointer;
}

.main-button:hover {
  box-shadow: rgb(255, 147, 112) 0px 20px 50px -10px;
  transform: scale(1.1);
  transition: 200ms transform;
  color:white;

}

.main-button:not(:hover) {
  transform: scale(1);
  box-shadow: none;
}

</style>

<script setup>
const props = defineProps({
  teamMembers: {
    type: Array,
    default: () => []
  }
});
</script>