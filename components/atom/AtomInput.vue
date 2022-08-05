<template>
  <input :type="type" :name="name">
</template>
<script>
export default {
  name: 'AtomInput',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      default: 'defaultName'
    }
  }
}
</script>
