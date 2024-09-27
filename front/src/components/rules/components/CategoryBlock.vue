<template>
  <div class="category-block">
    <div class="title-wrapper">
      <h2 class="page-title">{{ category.title }}</h2>
      <div class="title-divider"></div>
    </div>
    <div class="rule-block-wrapper" v-for="(block, blockIndex) in category.blocks" :key="blockIndex">
      <div class="rule-category-wrapper">
        <div class="rule-category" @click="toggleRules(blockIndex)">
          <div class="rule-id">{{ block.id }}</div>
          <div class="rule-title-container">
            <div class="rule-title">{{ block.title }}</div>
            <div>
              <img src="../../../assets/icons/chevron-down.svg" :class="{ 'rotated-icon': block.open }" class="toggle-icon">
            </div>
          </div>
        </div>
        <transition name="transition-slide-active" mode="out-in">
          <article v-if="block.open" class="rules-list">
            <div v-for="(rule, ruleIndex) in block.rules" :key="ruleIndex">
              <div class="rule-item">
                <span class="rule-id-number">{{ rule.id }} </span>
                <p v-html="rule.text"></p>
                <ul v-if="rule.subRules">
                  <li v-for="(subRule, subRuleIndex) in rule.subRules" :key="subRuleIndex">
                    <span v-html="subRule.text"></span>
                  </li>
                </ul>
                <div v-if="rule.note" class="rule-note">
                  <p v-html="rule.note"></p>
                </div>
              </div>
              <br v-if="ruleIndex < block.rules.length - 1">
            </div>
          </article>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategoryBlock',
  props: {
    category: Object,
    index: Number
  },
  methods: {
    toggleRules(blockIndex) {
      this.$emit('toggle-rules', this.index, blockIndex);
    }
  }
};
</script>

<style scoped>

a {
  text-decoration: none;
}

p {
  display: inline;
}

ul {
  margin: 0;
}

.category-block {
  display: flex;
  padding: 64px 96px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 32px;
  border-radius: 10px;
  background: hsla(0, 0%, 100%, .05);
  backdrop-filter: blur(2px);
}

.title-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
}

.page-title {
  color: #fff;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0;
}

.title-divider {
  width: 64px;
  height: 8px;
  border-radius: 4px;
  background: linear-gradient(132deg, #ff5f6d, #ffc371);
}

.rule-block-wrapper {
  display: flex;
  align-items: flex-start;
  gap: 24px;
  width: 100%;
}

.rule-category-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  gap: 32px;
  padding: 16px 20px;
  border-radius: 8px;
  background: hsla(0, 0%, 100%, .05);
}

.rule-category {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
}

.rule-id {
  display: flex;
  width: 39px;
  height: 39px;
  padding: 6px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 8px;
  background: linear-gradient(90deg, #ff626d, #ffc171);
  color: #fff;
  font-size: 32px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
}

.rule-title-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.rule-title {
  color: #fff;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.rules-list {
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.rule-item {
  color: #fff;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.rule-id-number {
  font-weight: 600;
}

.rule-note {
  background: linear-gradient(132deg, #ff5f6d, #ffc371);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  width: fit-content;
}

.transition-slide-active-enter-active, .transition-slide-active-leave-active {
  transition: max-height 0.15s ease-in-out, opacity 0.15s ease-in-out;
}
.transition-slide-active-enter-from, .transition-slide-active-leave-to {
  max-height: 0;
  opacity: 0;
}
.transition-slide-active-enter-to, .transition-slide-active-leave-from {
  max-height: 1000px;
  opacity: 1;
}

.toggle-icon {
  transform: rotate(-180deg);
  transition: transform 0.25s cubic-bezier(0.68, -0.55, 0.27, 1.55);
}
.rotated-icon {
  transform: rotate(-360deg) scale(1.1);
}

@media (max-width: 768px) {
  .category-block {
    padding: 35px 20px;
  }

  .page-title {
    font-size: 27px;
  }
}

</style>
