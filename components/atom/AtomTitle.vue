<template>
  <component :is="tag" class="text-3xl font-serif pb-2">
    {{ content }}
  </component>
</template>

<script setup lang="ts">
interface TitleProps {
  tag?: string
  content?: string
}

withDefaults(defineProps<TitleProps>(), {
  tag: 'h1',
  content: null
})
</script>
