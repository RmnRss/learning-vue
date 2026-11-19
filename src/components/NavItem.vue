<script setup lang="ts">
import { computed, toRef } from 'vue'
import { useLink, useRoute, type RouteLocationRaw } from 'vue-router'

const props = defineProps<{
  label: string
  // RouteLocationRaw accepts a path ('/navbar'), a named route ({ name: 'home' })
  // or a hash on the current page ({ hash: '#home' })
  to: RouteLocationRaw
}>()

const route = useRoute()
const link = useLink({ to: toRef(props, 'to') })

// RouterLink ignores the hash when it marks a link active, so every
// { hash } link on the same page would be active: compare the hash too.
const active = computed(() => {
  const hash = link.route.value.hash
  return link.isActive.value && (!hash || hash === route.hash)
})
</script>

<template>
  <a
    :href="link.href.value"
    class="highlighted"
    :class="{ 'active-nav': active }"
    :aria-current="active ? 'page' : undefined"
    @click="link.navigate"
    >{{ label }}</a
  >
</template>

<style scoped>
a {
  /* always padded, so the item keeps its size when it becomes active */
  padding: 0 12px;
  border-radius: 9999px;
}
</style>
