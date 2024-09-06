<template>
  <div class="container about-server">
    <div class="col-md-12">
      <h2>{{ whatIsGregTechTitle }}</h2>
    </div>
    <div v-for="(item, index) in gregTechFeatures" :key="index" class="container row about-row d-flex align-items-center">
      <div class="col-md-6">
        <div class="text">
          <h3>{{ item.title }}</h3>
          <h4>{{ item.description }}</h4>
        </div>
      </div>
      <div class="col-md-6">
        <img class="block-image img-fluid" :src="item.image" :alt="item.title">
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

.d-flex {
  display: flex;
}

.col-md-6 {
  flex: 0 0 50%;
  max-width: 50%;
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  box-sizing: border-box;
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

.about-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 3rem;
}

.text {
  color: white;
  margin-bottom: 20px;
}

</style>

<script setup>
const props = defineProps({
  whatIsGregTechTitle: String,
  gregTechFeatures: Array,
});
</script>