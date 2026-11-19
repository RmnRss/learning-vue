<script setup lang="ts">
defineProps<{
  name: string
  ghLink: string
}>()
</script>

<template>
  <section>
    <div class="container">
      <h1>{{ name }}</h1>
      <a :href="ghLink" class="button-link highlighted">
        <span class="material-icons" aria-hidden="true">code</span>
        Code
      </a>
    </div>
    <slot></slot>
  </section>
</template>

<style scoped>
/* the page's layout: header, then the component and its demo below */
section {
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
}

.container {
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  gap: 16px;
  padding: 4px 16px;
}

.button-link {
  display: flex;
  align-items: center;

  gap: 8px;

  padding: 8px 12px;
  border-radius: 8px;
  background: var(--color-muted);

  /* lighter on hover: the global translucent highlight would darken it */
  &:hover {
    background-color: color-mix(in srgb, var(--color-muted), white 8%);
  }
}

.material-icons {
  font-size: 18px;
}
</style>
