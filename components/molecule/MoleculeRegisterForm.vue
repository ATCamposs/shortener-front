<template>
  <div class="w-1/4">
    <form v-if="isSubmitting == false" @submit.prevent="onSubmit">
      <AtomTitle class="text-center" tag="h2" content="Registrar" />
      <AtomError class="mb-5" :errors="validationErros.afterRequest" @closeRegisterErrorAlerts="closeErrorAlerts()" />

      <div class="mb-2">
        <AtomLabel name="username" :description="$t('form.fields.username')" />
        <AtomInput :input-error="validationErros.username.length > 0" @changeInputValue="user.username = $event" />
        <AtomFormError :messages="validationErros.username" />
      </div>

      <div class="mb-2">
        <AtomLabel name="email" :description="$t('form.fields.email')" />
        <AtomInput :input-error="validationErros.email.length > 0" @changeInputValue="user.email = $event" />
        <AtomFormError :messages="validationErros.email" />
      </div>

      <div class="mb-2">
        <AtomLabel name="password" :description="$t('form.fields.password')" />
        <AtomInput
          :input-error="validationErros.password.length > 0"
          type="password"
          @changeInputValue="user.password = $event"
        />
        <AtomFormError :messages="validationErros.password" />
      </div>

      <div class="mb-2">
        <AtomLabel name="repeat-password" :description="$t('form.fields.repeatPassword')" />
        <AtomInput
          :input-error="validationErros.repeatPassword.length > 0"
          type="password"
          @changeInputValue="user.repeatPassword = $event"
        />
        <AtomFormError :messages="validationErros.repeatPassword" />
      </div>

      <AtomButton class="mt-5" url="#" :name="$t('register')" />
    </form>
    <div v-else>
      <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div class="bg-blue-600 h-2.5 rounded-full" style="width: 45%" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { register } from '@/requests/AuthRequests'
import { UserRegisterRequest } from '@/interfaces/UserRegisterRequest'
const { t } = useI18n()

interface MoleculeRegisterFormProps {
  name?: string
  description?: string
}

withDefaults(defineProps<MoleculeRegisterFormProps>(), {
  name: 'defaultName',
  description: 'defaultDescription'
})

interface ValidationErrors {
  username: Array<string>
  email: Array<string>
  password: Array<string>
  repeatPassword: Array<string>
  afterRequest: Array<string>
}
const user = ref<UserRegisterRequest>({
  username: '',
  email: '',
  password: '',
  repeatPassword: ''
})
const validationErros = ref<ValidationErrors>({
  username: [],
  email: [],
  password: [],
  repeatPassword: [],
  afterRequest: []
})

const isSubmitting = useState('isSubmittingRegister', () => false)

const closeErrorAlerts = () => {
  validationErros.value.afterRequest = []
}
const onSubmit = () => {
  console.log(isSubmitting.value)
  validateInputs()
  if (checkIsValid()) {
    isSubmitting.value = true
    register(user.value)
      .then((user) => {
        console.log(user)
        console.log(isSubmitting.value)
        localStorage.setItem('user', JSON.stringify(user))
        isSubmitting.value = false
      })
      .catch((err) => {
        validationErros.value.afterRequest.push(t('form.errors.' + err.message))
        console.log(isSubmitting)
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
  if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(user.value.email)) {
    validationErros.value.email.push(t('form.errors.mustBeAValidEmail'))
  }
  if (!/^[a-zA-Z0-9\-_]{8,20}$/g.test(user.value.password)) {
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
