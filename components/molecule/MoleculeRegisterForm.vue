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
    async onSubmit () {
      this.validateInputs()
      if (this.checkIsValid()) {
        await $fetch.raw('http://localhost:8080/api/auth/sign_up', { method: 'POST', body: JSON.stringify(this.user) })
      }
    },
    validateInputs () {
      this.clearInputErrors()
      if (this.user.username == null || !/^[a-zA-Z0-9]{4,12}$/ig.test(this.user.username)) {
        this.validationErros.username.push(this.$t('form.errors.onlyAlphanumeric'))
        this.validationErros.username.push(this.$t('form.errors.onlyCharactersRange', { min: '4', max: '12' }))
      }
      if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.user.email)) {
        this.validationErros.email.push(this.$t('form.errors.mustBeAValidEmail'))
      }
      if (!/^[a-zA-Z0-9\-_]{8,20}$/g.test(this.user.password)) {
        this.validationErros.password.push(this.$t('form.errors.onlyAlphanumeric'))
        this.validationErros.password.push(this.$t('form.errors.onlyCharactersRange', { min: '8', max: '20' }))
      }
      if (this.user.password !== this.user.repeatPassword) {
        this.validationErros.repeatPassword.push(this.$t('form.errors.mustBeLikePassword'))
      }
    },
    checkIsValid () {
      let isValid = true
      Object.entries(this.validationErros).forEach((element) => {
        if (Object.keys(element[1]).length > 0) {
          isValid = false
        }
      })
      return isValid
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
