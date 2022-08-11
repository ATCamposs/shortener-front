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
const progress = ref(0)
const progressTexts = ref('Inicializando')
onMounted(() => {
  setInterval(() => {
    if (progress.value < 100) {
      if (progress.value >= 20 && progress.value < 40) {
        progressTexts.value = 'Verificando nome de usuário'
      } else if (progress.value >= 40 && progress.value < 60) {
        progressTexts.value = 'Verificando Email'
      } else if (progress.value >= 60 && progress.value < 80) {
        progressTexts.value = 'Validando senhas'
      } else if (progress.value >= 80) {
        progressTexts.value = 'Aguardando conexão com o servidor'
      }
      progress.value++
    }
  }, 100)
})
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for <2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
