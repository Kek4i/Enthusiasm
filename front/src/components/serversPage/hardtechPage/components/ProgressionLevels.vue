<template>
  <div class="container about-server">
    <div class="col-md-12">
      <h2>{{ progressionTitle }}</h2>
    </div>
    <div class="container row">
      <div v-for="(progress, index) in progressionLevels" :key="index" class="col-md-4 d-flex align-items-center flex-column progression">
        <img class="block-image img-fluid" :class="progress.class" :src="progress.image" :alt="progress.level">
        <h3>{{ progress.level }}</h3>
        <h4>{{ progress.description }}</h4>
      </div>
    </div>
  </div>
</template>

<style scoped>

h2 {
  font-weight: 700;
  letter-spacing: 0.05em;
  color: #fff;
  font-size: 2rem;
  text-transform: uppercase;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 20px;
  margin: 0;
}

h3 {
  font-weight: 600;
  letter-spacing: .05em;
  color: #fff;
  font-size: 1.5rem;
  line-height: 2rem;
  padding-top: .75rem;
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
  width: 100%;
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}

.col-md-12 {
  flex: 0 0 100%;
  max-width: 100%;
}

.col-md-4 {
  flex: 0 0 33.3333%;
  max-width: 33.3333%;
  padding-right: 15px;
  padding-left: 15px;
  box-sizing: border-box;
}

.about-server {
  background-color: rgba(20, 20, 20, 0.251);
  border-radius: 1.5rem;
  margin-bottom: 10rem;
  padding-bottom: 2rem;
  padding-top: 2rem;
  backdrop-filter: blur(2px);
  box-shadow: 0 0px 1px rgba(108, 108, 108, 0.421);
}

.align-items-center {
  align-items: center;
}

.flex-column {
  flex-direction: column;
}

.d-flex {
  display: flex;
}

.block-image {
  border-radius: 1rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 100%;
}

.block-image:hover {
  transform: scale(1.05);
  box-shadow: rgb(255, 147, 112) 0px 10px 50px -5px;
}

.img-fluid {
  max-width: 100%;
  height: auto;
}

.progression {
  margin-bottom: 40px;
  text-align: center;
}

.yellow-hover:hover {
  box-shadow: rgba(255, 255, 0, 0.8) 0px 10px 50px -5px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.gray-hover:hover {
  box-shadow: rgba(128, 128, 128, 0.421) 0px 10px 50px -5px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.aqua-hover:hover {
  box-shadow: rgba(0, 255, 255, 0.8) 0px 10px 50px -5px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.orange-hover:hover {
  box-shadow: rgba(255, 165, 0, 0.8) 0px 10px 50px -5px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.purple-hover:hover {
  box-shadow: rgba(128, 0, 128, 0.8) 0px 10px 50px -5px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.blue-hover:hover {
  box-shadow: rgba(0, 0, 255, 0.8) 0px 10px 50px -5px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.pink-hover:hover {
  box-shadow: rgba(255, 20, 147, 0.8) 0px 10px 50px -5px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.white-hover:hover {
  box-shadow: rgba(255, 255, 255, 0.8) 0px 10px 50px -5px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.dark-aqua-hover:hover {
  box-shadow: rgba(5, 105, 107, 0.8) 0px 10px 50px -5px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

</style>

<script setup>
const props = defineProps({
  progressionTitle: String,
  progressionLevels: Array,
});
</script>