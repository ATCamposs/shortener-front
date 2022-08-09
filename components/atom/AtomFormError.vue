<template>
  <ul v-if="messages.length > 0" class="text-red-500 text-xs italic">
    <li v-for="(message, index) in messages" :key="index">
      * {{ message }}
    </li>
  </ul>
</template>
<script setup lang="ts">
interface FormErrorProps {
  messages: Array<string>
}

withDefaults(defineProps<FormErrorProps>(), {
  messages: () => []
})
</script>
