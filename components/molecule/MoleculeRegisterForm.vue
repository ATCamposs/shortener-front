<template>
  <form v-if="isSubmitting == false" @submit.prevent="onSubmit">
    <AtomTitle class="text-center" tag="h2">
      {{ $t('register') }}
    </AtomTitle>
    <AtomError class="mb-5" :errors="validationErros.afterRequest" @closeRegisterErrorAlerts="closeErrorAlerts()" />

    <div class="mb-2">
      <AtomLabel name="email" :description="$t('form.fields.email')" />
      <AtomInput :value="userRegisterParams.email" :input-error="validationErros.email.length > 0" @changeInputValue="userRegisterParams.email = $event" />
      <AtomFormError :messages="validationErros.email" />
    </div>

    <div class="mb-2">
      <AtomLabel name="password" :description="$t('form.fields.password')" />
      <AtomInput
        :value="userRegisterParams.password"
        :input-error="validationErros.password.length > 0"
        type="password"
        @changeInputValue="userRegisterParams.password = $event"
      />
      <AtomFormError :messages="validationErros.password" />
    </div>

    <AtomButton class="mt-5" url="#" :name="$t('register')" />
  </form>
  <div v-else>
    <MoleculeLoading :phases="loadingPhases" />
  </div>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { sendFormRegisterUserRequest } from '@/requests/AuthRequests'
import { isInvalidEmail, isInvalidPassword } from '@/utils/Validations'
const { t } = useI18n()

interface MoleculeRegisterFormProps {
  name?: string
  description?: string
}

withDefaults(defineProps<MoleculeRegisterFormProps>(), {
  name: 'defaultName',
  description: 'defaultDescription'
})

const userRegisterParams = useUserRegisterRequestParams()
const validationErros = useUserRegisterValidationErrorsParams()
const isSubmitting = useIsSubmittingRegister()

const loadingPhases = [
  t('form.progressBar.verifyingUsername'),
  t('form.progressBar.verifyingEmail'),
  t('form.progressBar.validatingPassword'),
  t('form.progressBar.awaitingServerConnection')
]

const closeErrorAlerts = () => {
  validationErros.value.afterRequest = []
}
const onSubmit = () => {
  validateInputs()
  if (checkIsValid()) {
    isSubmitting.value = true
    sendFormRegisterUserRequest(userRegisterParams.value)
      .then((user) => {
        setUserOnCookie(user)
        isSubmitting.value = false
      })
      .catch((err) => {
        validationErros.value.afterRequest.push(t('form.errors.' + err.message))
        isSubmitting.value = false
      })
  }
}
const validateInputs = () => {
  clearInputErrors()
  if (isInvalidEmail(userRegisterParams.value.email)) {
    validationErros.value.email.push(t('form.errors.mustBeAValidEmail'))
  }
  if (isInvalidPassword(userRegisterParams.value.password)) {
    validationErros.value.password.push(t('form.errors.onlyAlphanumeric'))
    validationErros.value.password.push(t('form.errors.onlyCharactersRange', { min: '8', max: '20' }))
  }
}
const checkIsValid = () => {
  let isValid = true
  Object.entries(validationErros.value).forEach((element) => {
    if (Object.keys(element[1]).length > 0) {
      isValid = false
    }
  })
  return isValid
}
const clearInputErrors = () => {
  validationErros.value.username = []
  validationErros.value.email = []
  validationErros.value.password = []
  validationErros.value.repeatPassword = []
}
</script>
