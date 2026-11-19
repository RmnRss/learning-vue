<!-- generic: T is the type of the option values, inferred from what the page passes
     (pass numbers and you get numbers back, not number | string) -->
<script setup lang="ts" generic="T extends number | string">
import { computed } from 'vue'

const props = defineProps<{
  options: { value: T; label: string }[]
  value: T
}>()

const index = computed(() => props.options.findIndex((o) => o.value === props.value))
const emit = defineEmits<{ 'update:value': [value: T] }>()
</script>

<template>
  <div class="container">
    <div
      class="active-background"
      :style="{
        width: `calc(100% / ${props.options.length})`,
        transform: `translateX(${index * 100}%)`,
      }"
    ></div>
    <!-- only the other options highlight on hover: the selected one already has the background -->
    <button
      v-for="option in props.options"
      :key="option.value"
      @click="emit('update:value', option.value)"
      class="segmented-option"
      :class="{ highlighted: option.value !== props.value }"
      :aria-pressed="option.value === props.value"
    >
      <span>{{ option.label }}</span>
    </button>
  </div>
</template>

<style scoped>
.container {
  position: relative;
  /* one equal column per option, as wide as the longest label, so the sliding
     background (100% / options) always lines up with the selected option */
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  border-radius: 8px;
  border: 1px solid var(--color-border);
  overflow: hidden;
}

.active-background {
  position: absolute;
  left: 0;
  top: 0;
  background-color: var(--color-highlight);
  border-radius: 4px;
  height: 100%;
  transition: transform 0.2s ease-in-out;
}

.segmented-option {
  all: unset;
  position: relative;
  z-index: 1;
  padding: 8px 20px;
  display: flex;
  justify-content: center;
  text-align: center;
  white-space: nowrap;
  border-radius: 8px;
}

.segmented-option:hover {
  cursor: pointer;
}
</style>
