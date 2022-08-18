<template>
  <div>
    <div v-if="isSubmitting == false">
      <form @submit.prevent="sendFormLoginRequest">
        <AtomTitle class="text-center" tag="h2">
          {{ $t('login') }}
        </AtomTitle>
        <AtomError class="mb-5" :errors="validationErros.afterRequest" @closeRegisterErrorAlerts="closeErrorAlerts()" />

        <div class="mb-2">
          <AtomLabel name="email" :description="$t('form.fields.email')" />
          <AtomInput type="email" :value="userLoginParams.email" :input-error="validationErros.email.length > 0" @changeInputValue="userLoginParams.email = $event" />
          <AtomFormError :messages="validationErros.email" />
        </div>

        <div class="mb-2">
          <AtomLabel name="password" :description="$t('form.fields.password')" />
          <AtomInput
            :value="userLoginParams.password"
            :input-error="validationErros.password.length > 0"
            type="password"
            @changeInputValue="userLoginParams.password = $event"
          />
          <AtomFormError :messages="validationErros.password" />
        </div>

        <AtomButton class="mt-5" url="#" :name="$t('login')" />
      </form>
      <AtomButton class="mt-5" url="#" name="Login google" @click="sendGoogleLoginRequest" />
    </div>
    <MoleculeLoading v-else :phases="loadingPhases" />
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { sendFormLoginUserRequest, sendGoogleLoginUserRequest } from '~~/requests/AuthRequests'
const { t } = useI18n()
const isSubmitting = useIsSubmittingLogin()

const userLoginParams = useUserLoginRequest()
const validationErros = useUserLoginValidationErrorsParams()

const loadingPhases = [
  t('form.progressBar.verifyingEmail'),
  t('form.progressBar.validatingPassword'),
  t('form.progressBar.verifyingUserExists'),
  t('form.progressBar.awaitingServerConnection')
]
// LOGIN WITH EMAIL AND PASSWORD
const sendFormLoginRequest = () => {
  isSubmitting.value = true
  sendFormLoginUserRequest(userLoginParams.value).then(() => { isSubmitting.value = false }).catch(err => console.error(err))
}
const sendGoogleLoginRequest = () => {
  isSubmitting.value = true
  sendGoogleLoginUserRequest().then(() => { isSubmitting.value = false }).catch(err => console.error(err))
}
</script>
