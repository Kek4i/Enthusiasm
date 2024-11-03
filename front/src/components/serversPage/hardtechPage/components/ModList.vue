<template>
  <div class="container about-server">
    <div class="col-md-12">
      <h2>{{ modsTitle }}</h2>
    </div>
    <div class="container row">
      <div v-for="(modType, type) in modTypes" :key="type" class="col-md-4 d-flex flex-column">
        <h3>{{ type }}</h3>
        <ul class="list-group list-group-flush custom-list">
          <li v-for="(mod, index) in modType" :key="index" class="text mod-info">
            <div class="tooltip-container">
              {{ mod.name }}
              <span class="tooltip-text">{{ mod.description }}</span>
            </div>
            <span v-if="mod.customLabel" class="custom-label">{{ mod.customLabel }}</span>
          </li>
        </ul>
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

.col-md-4 {
  flex: 0 0 33.3333%;
  max-width: 33.3333%;
  padding-right: 15px;
  padding-left: 15px;
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

.flex-column {
  flex-direction: column;
}

.d-flex {
  display: flex;
}

.custom-list {
  list-style: none;
  padding-left: 0;
}

.list-group {
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-left: 0;
}

.custom-list li {
  position: relative;
  padding-left: 20px;
  cursor: pointer;
  transition: color 0.3s;
}

.text {
  color: white;
  margin-bottom: 20px;
}

.mod-info {
  margin-bottom: 7px;
  margin-left: 20px;
}

.custom-list li::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 3px;
  height: 100%;
  background-color: gray;
  transition: background-color 0.3s;
}

.custom-list li:hover::before {
  background-color: rgb(255, 195, 113);
}

.tooltip-container {
  position: relative;
  display: inline-block;
  cursor: pointer;
}

.tooltip-container .tooltip-text {
  visibility: hidden;
  width: 200px;
  background-color: rgba(0, 0, 0, 0.9);
  color: #fff;
  text-align: center;
  border-radius: 0.25rem;
  padding: 0.5rem;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity 0.3s;
  font-size: .875rem;
}

.tooltip-container .tooltip-text::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.9) transparent transparent transparent;
}

.tooltip-container:hover .tooltip-text {
  visibility: visible;
  opacity: 0.9;
}

.custom-label {
  display: inline-block;
  border-radius: 6px;
  padding-left: 5px;
  padding-right: 5px;
  margin-left: 10px;
  color: white;
  box-shadow: rgb(255, 147, 112) 0px 20px 50px -10px;
  font-weight: 700;
  text-transform: uppercase;
  transform: scale(1.05) translateZ(0px);
  background: linear-gradient(132deg, rgb(255, 95, 109) 0%, rgb(255, 195, 113) 100%);
  position: relative;
}

@media (max-width: 768px) {
  .about-server {
    margin-bottom: 5rem;
  }

  .col-md-4 {
    flex: none;
    max-width: 100%;
  }
}

</style>

<script setup>
const props = defineProps({
  modsTitle: String,
  modTypes: Object,
});
</script>