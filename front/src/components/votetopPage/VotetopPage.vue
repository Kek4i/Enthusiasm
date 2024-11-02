<template>
  <main class="layout-container">
    <div class="vote-section">
      <Bonuses />
      <CoinUsage />
      <VotesSection :userVotes="userVotes" :maxVotes="maxVotes" />
      <VotesTable title="Рейтинг голосующих" :votes="votes" />
      <VotesTable title="Рейтинг прошлого месяца" :votes="lastMonthVotes" />
    </div>
  </main>
</template>

<style scoped>

.layout-container {
  max-width: 1320px;
  position: relative;
  margin-top: 64px;
  margin-inline: auto;
  padding: 0 15px;
}

.vote-section {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 32px;
  font-size: 18px;
}

@media (max-width: 1024px) {
  .layout-container {
    margin-top: 32px;
  }
}

</style>

<script setup>
import { ref, onMounted } from 'vue';
import Bonuses from './components/Bonuses.vue';
import CoinUsage from './components/CoinUsage.vue';
import VotesSection from './components/VotesSection.vue';
import VotesTable from './components/VotesTable.vue';

const userVotes = ref(0);
const votes = ref([]);
const lastMonthVotes = ref([]);

const maxVotes = 30;

onMounted(() => {
  userVotes.value = 13;
});

const MOCK_VOTES = [
  { nickname: 'TheDremor', votes: 4, time: '02.11.2024 02:25' },
  { nickname: 'TvoyPapasha', votes: 4, time: '02.11.2024 02:42' },
  { nickname: 'Gels', votes: 4, time: '02.11.2024 04:16' },
  { nickname: 'kekke', votes: 4, time: '02.11.2024 04:16' },
  { nickname: 'Shandal', votes: 4, time: '02.11.2024 04:29' },
  { nickname: 'UltImatiA', votes: 4, time: '02.11.2024 04:34' },
  { nickname: 'larry_our', votes: 4, time: '02.11.2024 04:38' },
  { nickname: 'xoma653', votes: 4, time: '02.11.2024 04:42' },
  { nickname: 'KIIOFY22', votes: 4, time: '02.11.2024 04:45' },
  { nickname: 'Chezzoff', votes: 4, time: '02.11.2024 04:45' }
];

const LAST_MONTH_VOTES = [
  { nickname: 'Yefim_Dolin', votes: 62, time: '31.10.2024 06:48' },
  { nickname: 'husgg', votes: 62, time: '31.10.2024 10:04' },
  { nickname: '663ger', votes: 62, time: '31.10.2024 12:54' },
  { nickname: 'Coatlicence', votes: 62, time: '31.10.2024 13:05' },
  { nickname: 'German1st', votes: 62, time: '31.10.2024 18:20' },
  { nickname: 'IcySam', votes: 61, time: '31.10.2024 04:02' },
  { nickname: 'Groupfrogg', votes: 60, time: '31.10.2024 05:04' },
  { nickname: 'IceBoxSpaceToo', votes: 60, time: '31.10.2024 11:55' },
  { nickname: 'rom41', votes: 59, time: '31.10.2024 19:09' },
  { nickname: 'Ancalagon', votes: 57, time: '31.10.2024 17:55' }
];

function getVotes() {
  return {
    currentVotes: MOCK_VOTES,
    lastMonthVotes: LAST_MONTH_VOTES
  };
}

onMounted(() => {
  const data = getVotes();
  votes.value = data.currentVotes;
  lastMonthVotes.value = data.lastMonthVotes;
});
</script>