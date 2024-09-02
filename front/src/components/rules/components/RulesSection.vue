<template>
  <div class="rules-section">
    <CategoryBlock v-for="(category, index) in ruleCategories" :key="index" :category="category" :index="index" @toggle-rules="toggleRules" />
  </div>
</template>

<script>
import CategoryBlock from './CategoryBlock.vue';

export default {
  name: 'RulesSection',
  components: {
    CategoryBlock
  },
  props: {
    ruleCategories: Array
  },
  methods: {
    toggleRules(categoryIndex, blockIndex) {
      this.$emit('toggle-rules', categoryIndex, blockIndex);
    }
  }
};
</script>

<style scoped>

.rules-section {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

</style>