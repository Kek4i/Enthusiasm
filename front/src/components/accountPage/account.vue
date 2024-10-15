<template>
  <main class="layout-container">
    <div class="profile">
      <div class="profile-columns">
        <div class="profile-column">
          <ProfileInfo :entcoins="user.entcoins" :coins="user.coins" />
          <ReferralSystem :referralLink="user.referralLink" :referrals="user.referrals" />
          <QuickLinks />
          <VoteBlock />
        </div>
        <div class="profile-column">
          <SkinChanger />
          <SecurityBlock />
          <PromoCode />
        </div>
      </div>
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

.profile {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.profile-columns {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 16px;
  gap: 16px;
}

.profile-column {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
}
</style>

<script setup>
import ProfileInfo from './components/ProfileInfo.vue';
import ReferralSystem from './components/ReferralSystem.vue';
import QuickLinks from './components/QuickLinks.vue';
import VoteBlock from './components/VoteBlock.vue';
import SkinChanger from './components/SkinChanger.vue';
import SecurityBlock from './components/SecurityBlock.vue';
import PromoCode from './components/PromoCode.vue';

const user = {
  entcoins: 0,
  coins: 0,
  referralLink: 'https://enthusiasm.world/r/Ooda',
  referrals: 0
};
</script>