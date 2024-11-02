<template>
  <div class="page-block">
    <div class="header">
      <h2 class="section-title">Голоса</h2>
      <div class="divider"></div>
    </div>
    <div class="vote-center">
      <h3 class="sub-title">Ваши голоса: {{ userVotes }}</h3>
      <div class="progress-container">
        <div class="progress-labels">
          <span class="progress-label">0</span>
          <span class="progress-label" style="min-width: 52px;">10</span>
          <span class="progress-label" style="min-width: 52px;">20</span>
          <span class="progress-label" style="min-width: 52px;">30</span>
        </div>
        <div class="progress-bar">
          <div class="progress-bar-fill" :style="{ width: progressBarWidth + '%' }"></div>
        </div>
        <div class="prize-labels">
          <div class="prize-label">0</div>
          <div class="prize-label">
            +50
            <img alt="coins" src="@/assets/icons/accountPage/coins.svg" width="10" height="20" />
          </div>
          <div class="prize-label">
            +100
            <img alt="coins" src="@/assets/icons/accountPage/coins.svg" width="10" height="20" />
          </div>
          <div class="prize-label">
            +150
            <img alt="coins" src="@/assets/icons/accountPage/coins.svg" width="10" height="20" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

h2,h3 {
  margin: 0;
}

.page-block {
  display: flex;
  width: 100%;
  padding: 64px 96px;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  border-radius: 10px;
  background: hsla(0, 0%, 100%, .05);
  -webkit-backdrop-filter: blur(2px);
  backdrop-filter: blur(2px);
}

.header {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
}

.section-title {
  color: #fff;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.divider {
  width: 64px;
  height: 8px;
  border-radius: 4px;
  background: linear-gradient(132deg, #ff5f6d, #ffc371);
}

.vote-center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  width: 100%;
}

.sub-title {
  color: #fff;
  font-size: 36px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  text-transform: uppercase;
}

.progress-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  max-width: 696px;
  width: 100%;
}

.progress-labels, .prize-labels {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.progress-label, .prize-label {
  display: flex;
  gap: 2px;
  align-items: center;
  justify-content: center;
  color: #fff;
}

.progress-bar {
  position: relative;
  width: 100%;
  height: 20px;
  border-radius: 10px;
  background: hsla(0, 0%, 100%, .05);
}

.progress-bar-fill {
  position: absolute;
  left: 0;
  height: 100%;
  background-color: #ff9370;
  border-radius: 10px;
}

@media (max-width: 768px) {
  .page-block {
    padding: 35px 20px;
  }

  .section-title {
    font-size: 27px;
  }

  .sub-title {
    font-size: 24px;
  }
}

</style>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  userVotes: {
    type: Number,
    required: true
  },
  maxVotes: {
    type: Number,
    default: 30
  }
});

const progressBarWidth = computed(() => {
  return Math.min((props.userVotes / props.maxVotes) * 100, 100);
});
</script>