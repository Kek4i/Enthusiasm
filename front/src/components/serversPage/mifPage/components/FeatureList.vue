<template>
  <div class="container about-server">
    <div class="col-md-12">
      <h2>{{ serverFeaturesTitle }}</h2>
    </div>
    <div class="container row">
      <div v-for="(feature, index) in features" :key="index" class="col-md-6 d-flex align-items-center flex-column">
        <img class="block-image img-fluid" :src="feature.image" :alt="feature.title">
        <div class="text">
          <h3>{{ feature.title }}</h3>
          <h4 v-html="feature.description"></h4>
        </div>
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
  margin-inline: auto;
  width: 100%;
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin-inline: auto;
}

.col-md-12 {
  flex: 0 0 100%;
  max-width: 100%;
}

.about-server {
  background-color: hsla(0, 0%, 100%, .05);
  border-radius: 1.5rem;
  margin-bottom: 10rem;
  padding-bottom: 2rem;
  padding-top: 2rem;
  backdrop-filter: blur(15px);
  box-shadow: 0 0 1px rgba(108, 108, 108, 0.421);
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

.col-md-6 {
  flex: 0 0 50%;
  max-width: 50%;
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
}

.block-image {
  border-radius: 1rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 100%;
}

.block-image:hover {
  transform: scale(1.05);
  box-shadow: rgba(30, 144, 255, 0.5) 0px 0px 50px 10px;
}

.img-fluid {
  max-width: 100%;
  height: auto;
}

.text {
  color: white;
  margin-bottom: 20px;
}

@media (max-width: 768px) {
  .col-md-6 {
    flex: none;
    max-width: 100%;
  }

  .about-server {
    margin-bottom: 5rem;
  }
}

</style>

<script setup>
const props = defineProps({
  serverFeaturesTitle: String,
  features: Array,
});
</script>