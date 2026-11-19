<!-- Stub: the app's navigation, a panel on the left listing every component page. -->
<script setup lang="ts">
const pages = [
  { label: 'Home', name: 'home' },
  { label: 'Navbar', name: 'navbar' },
  { label: 'Segmented control', name: 'segmented-control' },
]
</script>

<template>
  <nav class="nav-panel">
    <RouterLink :to="{ name: 'home' }" class="title">Learning Vue</RouterLink>
    <ul>
      <li v-for="page in pages" :key="page.name">
        <RouterLink :to="{ name: page.name }" class="highlighted" active-class="active-nav">
          {{ page.label }}
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.nav-panel {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem 1rem;
  background: var(--color-surface);
  border-right: 1px solid var(--color-border);
}

.title {
  padding: 0 8px;
  font-weight: 600;
}

ul {
  list-style: none;
  padding: 0;
}

li a {
  display: block;
  padding: 4px 8px;
  border-radius: 8px;
  margin-bottom: 8px;
}
</style>
