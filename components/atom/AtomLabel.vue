<template>
  <label :for="name">{{ description }}:</label>
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
