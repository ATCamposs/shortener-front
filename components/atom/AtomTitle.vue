<template>
  <component :is="tag" class="text-3xl font-serif pb-2">
    {{ content }}
  </component>
</template>

<script>
export default {
  name: 'AtomTitle',
  props: {
    tag: {
      type: String,
      default: 'h1'
    },
    content: {
      type: String,
      default: 'defaultTitle'
    }
  }
}
</script>
