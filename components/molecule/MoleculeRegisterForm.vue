<template>
  <form class="w-1/4" @submit.prevent="onSubmit">
    <AtomTitle
      class="text-center"
      tag="h2"
      content="Teste"
    />

    <div class="mb-2">
      <AtomLabel name="username" :description="$t('form.fields.username')" />
      <AtomInput
        :input-error="validationErros.username.length > 0"
        @changeInputValue="user.username = $event"
      />
      <AtomFormError :messages="validationErros.username" />
    </div>

    <div class="mb-2">
      <AtomLabel name="email" :description="$t('form.fields.email')" />
      <AtomInput
        :input-error="validationErros.email.length > 0"
        @changeInputValue="user.email = $event"
      />
      <AtomFormError :messages="validationErros.email" />
    </div>

    <div class="mb-2">
      <AtomLabel name="password" :description="$t('form.fields.password')" />
      <AtomInput
        :input-error="validationErros.password.length > 0"
        @changeInputValue="user.password = $event"
      />
      <AtomFormError :messages="validationErros.password" />
    </div>

    <div class="mb-2">
      <AtomLabel name="repeat-password" :description="$t('form.fields.repeatPassword')" />
      <AtomInput
        :input-error="validationErros.repeatPassword.length > 0"
        @changeInputValue="user.repeatPassword = $event"
      />
      <AtomFormError :messages="validationErros.repeatPassword" />
    </div>

    <AtomButton class="mt-5" url="#" name="Registrar" />
  </form>
</template>
<script>
export default {
  name: 'MoleculeFieldWithLabel',
  props: {
    name: {
      type: String,
      default: 'defaultName'
    },
    description: {
      type: String,
      default: 'defaultDescription'
    },
    breakLine: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      user: {
        username: null,
        email: null,
        password: null,
        repeatPassword: null
      },
      validationErros: {
        username: [],
        email: [],
        password: [],
        repeatPassword: []
      }
    }
  },
  methods: {
    onSubmit () {
      this.validateInputs()
    },
    validateInputs () {
      this.clearInputErrors()
      if (this.user.username == null || !/[a-zA-Z0-9]{4,8}/g.test(this.user.username)) {
        this.validationErros.username.push('Somente letras e números')
        this.validationErros.username.push('Somente letras e números[a-Z|0-9]')
      }
      if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.user.email)) {
        this.validationErros.email.push('Deve ser um endereço de email válido')
      }
      if (!/(?=[#$-/:-?{-~!"^_`[\]a-zA-Z]*([0-9#$-/:-?{-~!"^_`[\]]))(?=[#$-/:-?{-~!"^_`[\]a-zA-Z0-9]*[a-zA-Z])[#$-/:-?{-~!"^_`[\]a-zA-Z0-9]{6,20}/g.test(this.validationErros.password)) {
        this.validationErros.password.push('Deve conter no mínimo uma letra e um número')
        this.validationErros.password.push('Somente letras e números[a-Z|0-9]')
        this.validationErros.password.push('Entre 6 a 20 caracteres')
      }
      if (this.user.password !== this.user.repeatPassword) {
        this.validationErros.repeatPassword.push('Deve se igual a senha')
      }
    },
    clearInputErrors () {
      this.validationErros.username = []
      this.validationErros.email = []
      this.validationErros.password = []
      this.validationErros.repeatPassword = []
    }
  }
}
</script>
