<template>
  <ul v-if="messages.length > 0" class="text-red-500 text-xs italic">
    <li v-for="(message, index) in messages" :key="index">
      * {{ message }}
    </li>
  </ul>
</template>
<script>
export default {
  name: 'AtomFormError',
  props: {
    messages: {
      type: Array,
      default: () => []
    }
  }
}
</script>
