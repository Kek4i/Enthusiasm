<template>
  <div class="block referral-block">
    <div class="info-container">
      <div class="block-header">
        <div class="title-container">
          <h2 class="title">Реферальная система</h2>
          <div class="title-line"></div>
        </div>
        <span class="text">
          Приглашайте друзей и получайте 20% от их пополнений на баланс Личного Кабинета!
        </span>
      </div>
      <div class="link-container">
        <label for="refLink" class="label">Ваша персональная ссылка</label>
        <div class="input-icon-container">
          <div class="input input-disabled">{{ referralLink }}</div>
          <img src="@/assets/icons/file-multiple.svg" class="icon" alt="copy" @click="copyReferralLink">
        </div>
      </div>
    </div>
    <div class="counter-container">
      <span class="referral-text">Вы привели</span>
      <span class="count">{{ referrals }}</span>
      <span class="referral-text">рефералов</span>
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

.link-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  width: 100%;
}

.label {
  color: #fff;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.input-icon-container {
  position: relative;
  width: 100%;
}

.input {
  display: flex;
  width: 100%;
  align-items: flex-start;
  gap: 10px;
  border-radius: 8px;
  background: hsla(0, 0%, 100%, .1);
  color: #fff;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding: 16px;
  font-size: 16px;
}

.input-disabled {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  outline: none;
  pointer-events: none;
}

.icon {
  position: absolute;
  right: 16px;
  top: 30%;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.icon:hover {
  transform: scale(1.20) translateZ(0px);
}

.counter-container {
  display: flex;
  padding: 27px 53px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  border-radius: 8px;
  background: hsla(0, 0%, 100%, .05);
  max-width: 250px;
  width: 100%;
  aspect-ratio: 1 / 1;
}

.referral-text {
  color: hsla(0, 0%, 100%, .6);
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.count {
  font-size: 64px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  background: linear-gradient(132deg, #ff5f6d, #ffc371);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.text {
  color: #fff;
  font-size: 16px;
}

@media (max-width: 768px) {
  .title {
    font-size: 27px;
  }
  .referral-block {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

@media (min-width: 768px) {
  .referral-block {
    flex-direction: row;
  }
}

@media (max-width: 1024px) {
  .block {
    padding: 35px 20px;
  }
}
</style>

<script setup>
const props = defineProps({
  referralLink: String,
  referrals: {
    type: Number,
    default: 0
  }
});

function copyReferralLink() {
  navigator.clipboard.writeText(props.referralLink)
      .catch((err) => {
        console.error('Ошибка при копировании: ', err);
      });
}
</script>