<script setup lang="ts"></script>

<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<style scoped>
.container {
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding: 32px;

  min-height: 196px;

  border-radius: 16px;
  background: var(--color-muted);
  border: 1px solid var(--color-border);
}
</style>
