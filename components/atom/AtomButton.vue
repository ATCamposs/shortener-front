<template>
  <a
    :href="url"
    class="block text-center py-1 px-4 bg-blue-100 text-blue-500 font-semibold rounded"
  >{{ name }}</a>
</template>
<script>
export default {
  name: 'AtomButton',
  props: {
    url: {
      type: String,
      default: 'defaultUrl'
    },
    name: {
      type: String,
      default: 'defaultName'
    }
  }
}
</script>
