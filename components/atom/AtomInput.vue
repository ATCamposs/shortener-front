<template>
  <input
    v-model="inputValue"
    class="
    appearance-none
    block
    w-full
    bg-gray-200
    text-gray-700
    border
    border-gray-200
    rounded
    py-2
    leading-tight
    focus:outline-none
    focus:bg-white
    focus:border-gray-500
    "
    :type="type"
    :placeholder="placeholder"
    @input="emitValueChange()"
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
    emitValueChange () {
      this.$emit('changeInputValue', this.inputValue)
    }
  }
}
</script>
