<template>
  <div class="block block-large">
    <div class="block-header">
      <div class="title-container">
        <h2 class="title">Информация</h2>
        <div class="title-line"></div>
      </div>
    </div>
    <div class="info-container">
      <InfoBlock
          label="Энткоины"
          :balance="entcoins"
          :imgSrc="entcoinsIcon"
          linkText="Пополнить"
          linkTo="/account/balance"
      />
      <InfoBlock
          label="Коины"
          :balance="coins"
          :imgSrc="coinsIcon"
          linkText="Обменять"
          linkTo="/account/transfer"
      />
      <InfoBlock
          label="Телеграм"
          linkText="Не привязан"
          linkTo="#"
      />
      <InfoBlock
          label="Discord"
          linkText="Не привязан"
          linkTo="#"
      />
    </div>
  </div>
</template>

<style scoped>
h2 {
  margin: 0;
}

.block {
  display: flex;
  width: 100%;
  padding: 32px 64px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  border-radius: 10px;
  background: hsla(0, 0%, 100%, .05);
  -webkit-backdrop-filter: blur(2px);
  backdrop-filter: blur(2px);
}

.block-header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
}

.title-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
}

.title {
  color: #fff;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.title-line {
  width: 64px;
  height: 8px;
  border-radius: 4px;
  background: linear-gradient(132deg, #ff5f6d, #ffc371);
}

.info-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
}

@media (max-width: 768px) {
  .title {
    font-size: 27px;
  }
}

@media (max-width: 1024px) {
  .block {
    padding: 35px 20px;
  }
}
</style>

<script setup>
import InfoBlock from './InfoBlock.vue';
import entcoinsIcon from '@/assets/icons/entcoins.svg';
import coinsIcon from '@/assets/icons/coins.svg';

const props = defineProps({
  entcoins: {
    type: Number,
    default: 0
  },
  coins: {
    type: Number,
    default: 0
  }
});
</script>