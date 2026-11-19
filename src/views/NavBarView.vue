<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import ComponentShowcase from '@/components/ComponentShowcase.vue'
import ComponentFrame from '@/components/ComponentFrame.vue'

// Hash links stay on this page: the demo shows the navbar without navigating away.
const items = [
  { label: 'Home', to: { hash: '#home' } },
  { label: 'Navbar', to: { hash: '#navbar' } },
  { label: 'Segmented control', to: { hash: '#segmented-control' } },
]
</script>

<template>
  <ComponentShowcase
    name="Navbar"
    ghLink="https://github.com/RmnRss/learning-vue/blob/main/src/components/NavBar.vue"
  >
    <ComponentFrame>
      <NavBar :items />
    </ComponentFrame>
  </ComponentShowcase>
</template>
