<template>
  <p v-if="active" class="text-red-500 text-xs italic">
    Please fill out this field.
  </p>
</template>
<script>
export default {
  name: 'AtomFormError',
  props: {
    active: {
      type: Boolean,
      default: false
    }
  }
}
</script>
