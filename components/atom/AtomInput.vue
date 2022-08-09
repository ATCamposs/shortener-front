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
    :class="inputError ? 'border-red-500 focus:border-red-500' : ''"
    :type="type"
    :placeholder="placeholder"
    @input="$emit('changeInputValue', inputValue)"
  >
</template>

<script setup lang="ts">
const inputValue = ref('')
interface InputProps {
  type?: string
  placeholder?: string
  inputError?: boolean
}

withDefaults(defineProps<InputProps>(), {
  type: 'text',
  placeholder: null,
  inputError: false
})

defineEmits<{(e: 'changeInputValue', value: string): void}>()
</script>
