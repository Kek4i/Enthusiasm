<template>
  <div class="stat-block">
    <div class="stat">
      <div class="stat-name">{{ label }}</div>
      <div class="balance" v-if="balance !== undefined">
        {{ balance }}
        <img v-if="imgSrc" class="icon-balance" :alt="label" :src="imgSrc">
        <router-link class="two-factor-status disabled" :to="linkTo">{{ linkText }}</router-link>
      </div>
      <div v-else>
        <a class="two-factor-status disabled" :href="linkTo">{{ linkText }}</a>
      </div>
    </div>
    <div class="divider"></div>
  </div>
</template>

<style scoped>

a {
  text-decoration: none;
}

.stat-block {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
}

.stat {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.stat-name {
  color: #fff;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.balance {
  display: flex;
  align-items: center;
  gap: 6px;
  color: #fff;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.divider {
  width: 100%;
  height: 2px;
  border-radius: 3px;
  background: hsla(0, 0%, 100%, .05);
}

.icon-balance {
  width: 28px;
  height: 32px;
  color: transparent;
}

.two-factor-status {
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-decoration: underline;
}

.disabled {
  color: hsla(0, 0%, 100%, .4);
}
</style>

<script setup>
const props = defineProps({
  label: String,
  balance: {
    type: Number,
    default: null
  },
  imgSrc: {
    type: String,
    default: ''
  },
  linkText: String,
  linkTo: String
});
</script>