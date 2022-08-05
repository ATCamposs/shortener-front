<template>
  <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="inline-full-name">
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
