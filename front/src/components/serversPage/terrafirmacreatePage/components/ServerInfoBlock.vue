<template>
  <div class="container about-server" v-for="(block, index) in blocks" :key="index">
    <div class="row d-flex" :class="{'reversed': block.reversed}">
      <div v-if="!block.reversed" class="col-md-6 d-flex align-items-start flex-column">
        <div class="title">
          <h2 v-html="block.title"></h2>
        </div>
        <div class="text">
          <h4 v-html="block.text"></h4>
        </div>
      </div>
      <div v-if="!block.reversed" class="col-md-6 d-flex justify-content-center align-items-start glow">
        <img :src="block.imgSrc" class="img-fluid">
      </div>

      <div v-if="block.reversed" class="col-md-6 d-flex justify-content-center align-items-start glow">
        <img :src="block.imgSrc" class="img-fluid">
      </div>
      <div v-if="block.reversed" class="col-md-6 d-flex align-items-start flex-column">
        <div class="title">
          <h2 v-html="block.title"></h2>
        </div>
        <div class="text">
          <h4 v-html="block.text"></h4>
        </div>
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
  margin-inline: auto;
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  margin-inline: auto;
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
  box-shadow: 0 0 1px rgba(108, 108, 108, 0.421);
  box-sizing: border-box
}

.d-flex {
  display: flex;
}

.align-items-start {
  align-items: flex-start;
}

.flex-column {
  flex-direction: column;
}

.col-md-6 {
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  flex: 0 0 50%;
  max-width: 50%;
}

.text {
  color: #fff;
  margin-bottom: 20px;
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

@media (max-width: 768px) {
  .col-md-6 {
    flex: none;
    max-width: 100%;
  }
}

</style>

<script setup>
const props = defineProps({
  blocks: {
    type: Array,
    default: () => []
  }
});
</script>