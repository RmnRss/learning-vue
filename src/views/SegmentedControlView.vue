<script setup lang="ts">
import { ref } from 'vue'
import SegmentedControl from '@/components/SegmentedControl.vue'
import ComponentShowcase from '@/components/ComponentShowcase.vue'
import ComponentFrame from '@/components/ComponentFrame.vue'

const options = [
  { value: 'day', label: 'Day' },
  { value: 'week', label: 'Week' },
  { value: 'month', label: 'Month' },
]
const selected = ref('week')
</script>

<template>
  <ComponentShowcase
    name="Segmented control"
    ghLink="https://github.com/RmnRss/learning-vue/blob/main/src/components/SegmentedControl.vue"
  >
    <ComponentFrame>
      <SegmentedControl :options v-model:value="selected" />
    </ComponentFrame>
    <p>Selected: {{ selected }}</p>
  </ComponentShowcase>
</template>

<style scoped></style>
