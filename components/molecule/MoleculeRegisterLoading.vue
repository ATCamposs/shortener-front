<template>
  <div>
    <Transition name="slide-fade" mode="out-in">
      <AtomText v-if="progressTexts" :key="progressTexts">
        {{ progressTexts }}
      </AtomText>
    </Transition>
    <AtomProgressBar :progress="progress" />
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const progress = ref(0)
const progressTexts = ref('Inicializando')
const { t } = useI18n()

onMounted(() => {
  setInterval(() => {
    if (progress.value < 100) {
      if (progress.value >= 20 && progress.value < 40) {
        progressTexts.value = t('form.progressBar.verifyingUsername')
      } else if (progress.value >= 40 && progress.value < 60) {
        progressTexts.value = t('form.progressBar.verifyingEmail')
      } else if (progress.value >= 60 && progress.value < 80) {
        progressTexts.value = t('form.progressBar.validatingPassword')
      } else if (progress.value >= 80) {
        progressTexts.value = t('form.progressBar.awaitingServerConnection')
      }
      progress.value++
    }
  }, 50)
})
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all .1s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for <2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
