<template>
  <div class="offer">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="anonce col-md-4 offset-md-4">
            {{ announcement }}
          </div>
          <h1>{{ serverTitle }}</h1>
          <div class="date">{{ serverDate }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

h1 {
  font-weight: 800;
  letter-spacing: 0.05em;
  color: #fff;
  font-size: 4.5rem;
  text-transform: uppercase;
  text-align: center;
  padding-top: 8rem;
  margin: 0 0 8px 0;
}

.offer {
  top: 8rem;
  position: relative;
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

.anonce {
  position: relative;
  backdrop-filter: blur(5px);
  font-weight: 700;
  letter-spacing: .05em;
  color: white;
  font-size: 1.5rem;
  top: 5rem;
  box-shadow: 0 0px 1px rgba(108, 108, 108, 0.421);
  text-transform: uppercase;
  text-align: center;
  background-color: rgba(20, 20, 20, 0.251);
  border-radius: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
}

.offset-md-4 {
  margin-left: 33.333333%;
}

.col-md-4 {
  flex: 0 0 33.3333%;
  max-width: 33.3333%;
  padding-right: 15px;
  padding-left: 15px;
  box-sizing: border-box;
}

.date {
  color: #fff;
  padding-bottom: 20rem;
  padding-top: 3rem;
  text-align: center;
  font-size: 1.5rem;
}

</style>

<script setup>
const props = defineProps({
  announcement: String,
  serverTitle: String,
  serverDate: String,
});
</script>