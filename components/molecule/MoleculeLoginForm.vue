<template>
  <form v-if="isSubmitting == false" @submit.prevent="onSubmit">
    <AtomTitle class="text-center" tag="h2">
      {{ $t('login') }}
    </AtomTitle>
    <AtomError class="mb-5" :errors="validationErros.afterRequest" @closeRegisterErrorAlerts="closeErrorAlerts()" />

    <div class="mb-2">
      <AtomLabel name="email" :description="$t('form.fields.email')" />
      <AtomInput :value="user.email" :input-error="validationErros.email.length > 0" @changeInputValue="user.email = $event" />
      <AtomFormError :messages="validationErros.email" />
    </div>

    <div class="mb-2">
      <AtomLabel name="password" :description="$t('form.fields.password')" />
      <AtomInput
        :value="user.password"
        :input-error="validationErros.password.length > 0"
        type="password"
        @changeInputValue="user.password = $event"
      />
      <AtomFormError :messages="validationErros.password" />
    </div>

    <AtomButton class="mt-5" url="#" :name="$t('login')" />
  </form>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { sendLoginUserRequest } from '@/requests/AuthRequests'
import { isInvalidEmail, isInvalidPassword } from '@/utils/Validations'
const { t } = useI18n()
const isSubmitting = useIsSubmittingLogin()

const user = useUserLoginRequest()
const validationErros = useUserLoginValidationErrorsParams()

const onSubmit = () => {
  validateInputs()
  if (checkIsValid()) {
    isSubmitting.value = true
    sendLoginUserRequest(user.value)
      .then((user) => {
        setUserOnStorage(user)
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
  if (isInvalidEmail(user.value.email)) {
    validationErros.value.email.push(t('form.errors.mustBeAValidEmail'))
  }
  if (isInvalidPassword(user.value.password)) {
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
const closeErrorAlerts = () => {
  validationErros.value.afterRequest = []
}
const clearInputErrors = () => {
  validationErros.value.email = []
  validationErros.value.password = []
}
</script>
