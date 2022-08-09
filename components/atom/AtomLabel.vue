<template>
  <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" :for="name">
    {{ description }}
  </label>
</template>
<script setup lang="ts">
interface LabelProps {
  name?: string
  description?: string
}

withDefaults(defineProps<LabelProps>(), {
  name: null,
  description: null
})
</script>
