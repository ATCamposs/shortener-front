<template>
  <form v-if="isSubmitting == false" @submit.prevent="sendFormLoginRequest">
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
  <div v-else>
    <MoleculeLoading :phases="loadingPhases" />
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { sendFormLoginUserRequest } from '~~/requests/AuthRequests'
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
  // eslint-disable-next-line no-console
  sendFormLoginUserRequest(userLoginParams.value).then(user => setUserOnCookie(user)).catch(err => console.error(err))
}

/* LOGIN WITH GOOGLE
const provider = new GoogleAuthProvider()
auth.useDeviceLanguage()
const sendFormLoginRequest = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result)
      console.log(credential)
      const token = credential.accessToken
      console.log(token)
      // The signed-in user info.
      const user = result.user
      console.log(user)
    // ...
    }).catch((error) => {
    // Handle Errors here.
      const errorCode = error.code
      console.log(errorCode)
      const errorMessage = error.message
      console.log(errorMessage)
      // The email of the user's account used.
      const email = error.customData.email
      console.log(email)
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error)
      console.log(credential)
    // ...
    })
} */
</script>
