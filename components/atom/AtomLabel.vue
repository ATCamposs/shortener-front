<template>
  <label class="text-gray-500 font-bold" for="inline-full-name">
    {{ description }}:
  </label>
</template>
<script>
export default {
  name: 'AtomLabel',
  props: {
    name: {
      type: String,
      default: 'defaultName'
    },
    description: {
      type: String,
      default: 'defaultDescription'
    }
  }
}
</script>
