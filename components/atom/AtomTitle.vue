<template>
  <component :is="tag" class="text-3xl font-serif pb-2">
    <slot />
  </component>
</template>

<script setup lang="ts">
interface TitleProps {
  tag?: string
}

withDefaults(defineProps<TitleProps>(), {
  tag: 'h1'
})
</script>
