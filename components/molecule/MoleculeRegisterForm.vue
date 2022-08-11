<template>
  <form v-if="isSubmitting == false" @submit.prevent="onSubmit">
    <AtomTitle class="text-center" tag="h2">
      {{ $t('register') }}
    </AtomTitle>
    <AtomError class="mb-5" :errors="validationErros.afterRequest" @closeRegisterErrorAlerts="closeErrorAlerts()" />

    <div class="mb-2">
      <AtomLabel name="username" :description="$t('form.fields.username')" />
      <AtomInput :value="user.username" :input-error="validationErros.username.length > 0" @changeInputValue="user.username = $event" />
      <AtomFormError :messages="validationErros.username" />
    </div>

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

    <div class="mb-2">
      <AtomLabel name="repeat-password" :description="$t('form.fields.repeatPassword')" />
      <AtomInput
        :value="user.repeatPassword"
        :input-error="validationErros.repeatPassword.length > 0"
        type="password"
        @changeInputValue="user.repeatPassword = $event"
      />
      <AtomFormError :messages="validationErros.repeatPassword" />
    </div>

    <AtomButton class="mt-5" url="#" :name="$t('register')" />
  </form>
  <div v-else>
    <MoleculeLoading :phases="loadingPhases" />
  </div>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { sendRegisterUserRequest } from '@/requests/AuthRequests'
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

const user = useUserRegisterRequestParams()
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
    sendRegisterUserRequest(user.value)
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
  if (user.value.username == null || !/^[a-zA-Z0-9]{4,12}$/ig.test(user.value.username)) {
    validationErros.value.username.push(t('form.errors.onlyAlphanumeric'))
    validationErros.value.username.push(t('form.errors.onlyCharactersRange', { min: '4', max: '12' }))
  }
  if (isInvalidEmail(user.value.email)) {
    validationErros.value.email.push(t('form.errors.mustBeAValidEmail'))
  }
  if (isInvalidPassword(user.value.password)) {
    validationErros.value.password.push(t('form.errors.onlyAlphanumeric'))
    validationErros.value.password.push(t('form.errors.onlyCharactersRange', { min: '8', max: '20' }))
  }
  if (user.value.password !== user.value.repeatPassword) {
    validationErros.value.repeatPassword.push(t('form.errors.mustBeLikePassword'))
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
