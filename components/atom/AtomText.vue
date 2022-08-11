<template>
  <p class="text-center block tracking-wide text-gray-700 text-xs font-bold mb-2" :for="name">
    <slot />
  </p>
</template>
<script setup lang="ts">
interface LabelText {
  name?: string
  description?: string
}

withDefaults(defineProps<LabelText>(), {
  name: null,
  description: null
})
</script>
