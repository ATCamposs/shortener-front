<template>
  <input
    v-model="inputValue"
    class="
    bg-gray-200
    appearance-none
    border-2
    border-gray-200
    rounded
    w-full
    py-2
    px-4
    text-gray-700
    leading-tight
    focus:outline-none
    focus:bg-white
    focus:border-gray-500
    mt-1"
    :type="type"
    :placeholder="placeholder"
    @input="emitEventChanged()"
  >
</template>
<script>
export default {
  name: 'AtomInput',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      inputValue: null
    }
  },
  methods: {
    emitEventChanged () {
      this.$emit('changeInputValue', this.inputValue)
    }
  }
}
</script>
