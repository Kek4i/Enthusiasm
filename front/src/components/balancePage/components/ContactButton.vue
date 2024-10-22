<template>
  <div class="balance__block">
    <div class="balance__wrapper">
      <span class="balance__block-title">При возникновении проблем с пополнением, свяжитесь с администрацией:</span>
      <a target="_blank" href="https://t.me/opulat">
        <button type="submit" class="balance__submit-button">Связаться (Telegram)</button>
      </a>
    </div>
  </div>
</template>

<style scoped>

a {
  text-decoration: none;
}

.balance__block {
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 32px;
}

.balance__wrapper {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
}

.balance__block-title {
  color: #fff;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.balance__submit-button {
  display: flex;
  padding: 16px 20px;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 8px;
  background: linear-gradient(132deg, rgb(255, 95, 109) 0%, rgb(255, 195, 113) 100%);
  color: #fff;
  font-size: 19px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  border: initial;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.balance__submit-button:hover {
  background: linear-gradient(132deg, rgb(255, 95, 109) 0%, rgb(255, 195, 113) 100%);
  box-shadow: rgb(255, 147, 112) 0 20px 50px -10px;
  transform: scale(1.05) translateZ(0px);
}
</style>