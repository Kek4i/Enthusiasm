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
  <img src="../../../../assets/icons/serverPage/mifPage/earth.png" class="hidden-image">
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

.anonce {
  position: relative;
  backdrop-filter: blur(15px);
  font-weight: 700;
  letter-spacing: .05em;
  color: white;
  font-size: 1.5rem;
  top: 5rem;
  box-shadow: 0 0 1px rgba(108, 108, 108, 0.421);
  text-transform: uppercase;
  text-align: center;
  background-color: hsla(0, 0%, 100%, .05);
  border-radius: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
}

.date {
  color: #fff;
  padding-bottom: 20rem;
  padding-top: 3rem;
  text-align: center;
  font-size: 1.5rem;
}

.hidden-image {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50%;
  height: auto;
  z-index: -1;
  opacity: 1;
  transform: translateX(-40%) translateY(50%);
}

@media (max-width: 768px) {
  h1 {
    font-size: 2rem;
  }
}

</style>

<script setup>
const props = defineProps({
  announcement: String,
  serverTitle: String,
  serverDate: String,
});
</script>