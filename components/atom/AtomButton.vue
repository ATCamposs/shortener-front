<template>
  <a
    :href="url"
    class="block text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
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
