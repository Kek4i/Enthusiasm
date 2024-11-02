<template>
  <div class="page-block">
    <div class="header">
      <h2 class="section-title">{{ title }}</h2>
      <div class="divider"></div>
    </div>
    <div class="table-wrapper">
      <table class="vote-table">
        <thead>
        <tr>
          <th>№</th>
          <th>Никнейм</th>
          <th>Голоса</th>
          <th>Время</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(vote, index) in votes" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ vote.nickname }}</td>
          <td>{{ vote.votes }}</td>
          <td>{{ vote.time }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>

h2 {
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

.table-wrapper {
  width: 100%;
  border-radius: 10px;
  overflow-x: auto;
  overflow-y: hidden;
}

.vote-table {
  width: 100%;
  border-collapse: collapse;
  color: #fff;
}

.vote-table thead {
  background: hsla(0, 0%, 100%, .05);
}
.vote-table thead th {
  padding: 10px 20px;
  text-align: center;
  color: #fff;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
}

.vote-table tbody td {
  padding: 10px 20px;
  text-align: center;
}

.vote-table tbody tr:nth-child(2n) {
  background: hsla(0, 0%, 100%, .05);
}

@media (max-width: 768px) {
  .page-block {
    padding: 35px 20px;
  }

  .section-title {
    font-size: 27px;
  }
}

</style>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  votes: {
    type: Array,
    required: true
  }
});
</script>