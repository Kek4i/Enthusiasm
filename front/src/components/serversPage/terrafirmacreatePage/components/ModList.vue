<template>
  <div class="container about-server">
    <div class="col-md-12">
      <div class="title">
        <h2>Основные моды</h2>
      </div>
      <div class="container row">
        <div class="col-md-6 d-flex flex-column" v-for="(list, index) in modLists" :key="index">
          <ul class="list-group list-group-flush custom-list">
            <li class="text mod-info" v-for="(mod, i) in list" :key="i">
              {{ mod }}
            </li>
          </ul>
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
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
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
  box-sizing: border-box
}

.d-flex {
  display: flex;
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
  box-sizing: border-box;
}

.text {
  color: #fff;
  margin-bottom: 20px;
}

.custom-list {
  list-style: none;
  padding-left: 0;
}

.list-group {
  display: flex;
  flex-direction: column;
  margin: 0;
}

.custom-list li {
  position: relative;
  padding-left: 20px;
  cursor: pointer;
  transition: color 0.3s;
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
  background-color: rgb(255, 195, 113)
}

.mod-info {
  margin-bottom: 7px;
  margin-left: 20px;
  height: 24px;
}
</style>

<script setup>
const props = defineProps({
  modLists: {
    type: Array,
    default: () => []
  }
});
</script>