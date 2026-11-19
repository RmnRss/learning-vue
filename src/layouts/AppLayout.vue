<script setup lang="ts">
import NavPanel from '@/components/NavPanel.vue'
</script>

<template>
  <div class="layout">
    <NavPanel class="nav" />
    <main>
      <slot></slot>
    </main>
  </div>
</template>

<style scoped>
/* NavPanel on the left, full height; the page content on the right */
.layout {
  display: grid;
  grid-template-columns: 220px 1fr;
  min-height: 100vh;
}

.nav {
  position: sticky;
  top: 0;
  height: 100vh;
}

main {
  min-width: 0;
  padding: 2rem;
}
</style>
