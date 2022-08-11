<template>
  <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-400">
    <p class="bg-blue-600 h-2.5 rounded-full" :style="'width: '+ progress + '%'" />
  </div>
</template>
<script setup lang="ts">
interface ProgressBarProps {
  progress: number
}
withDefaults(defineProps<ProgressBarProps>(), {
  progress: 0
})
</script>
