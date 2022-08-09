<template>
  <button class="block text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
    {{ name }}
  </button>
</template>

<script setup lang="ts">
interface ButtonProps {
  url: string,
  name: string
}

withDefaults(defineProps<ButtonProps>(), {
  url: '#',
  name: 'buttonName'
})
</script>
