<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'
import NavItem from './NavItem.vue'

defineProps<{
  items: { label: string; to: RouteLocationRaw }[]
}>()
</script>

<template>
  <nav class="nav-container">
    <NavItem v-for="item in items" :key="item.label" :label="item.label" :to="item.to" />
  </nav>
</template>

<style scoped>
.nav-container {
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  gap: 16px;
  padding: 4px 16px;
  border-radius: 9999px;

  height: 48px;

  background: var(--color-surface);
  border: 1px solid var(--color-border);
}
</style>
