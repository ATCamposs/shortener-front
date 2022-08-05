<template>
  <form class="w-1/4" @submit.prevent="onSubmit">
    <AtomTitle
      class="text-center"
      tag="h2"
      content="Teste"
    />

    <div class="mb-2">
      <AtomLabel name="username" description="Nome de usuário" />
      <AtomInput
        :input-error="userRegisterInputs.usernameError == true"
        @changeInputValue="userRegisterInputs.username = $event"
      />
      <AtomFormError :active="userRegisterInputs.usernameError == true" />
    </div>

    <div class="mb-2">
      <AtomLabel name="email" description="Email" />
      <AtomInput
        :input-error="userRegisterInputs.emailError == true"
        @changeInputValue="userRegisterInputs.email = $event"
      />
      <AtomFormError :active="userRegisterInputs.emailError == true" />
    </div>

    <div class="mb-2">
      <AtomLabel name="password" description="Senha" />
      <AtomInput
        :input-error="userRegisterInputs.passwordError == true"
        @changeInputValue="userRegisterInputs.password = $event"
      />
      <AtomFormError :active="userRegisterInputs.passwordError == true" />
    </div>

    <div class="mb-2">
      <AtomLabel name="repeat-password" description="Repita a Senha" />
      <AtomInput
        :input-error="userRegisterInputs.repeatPasswordError == true"
        @changeInputValue="userRegisterInputs.repeatPassword = $event"
      />
      <AtomFormError :active="userRegisterInputs.repeatPasswordError == true" />
    </div>

    <AtomButton class="mt-5" url="#" name="Registrar" @click="onSubmit" />
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
      userRegisterInputs: {
        username: {
          type: String,
          default: null
        },
        usernameError: {
          type: Boolean,
          default: false
        },
        email: {
          type: String,
          default: null
        },
        password: {
          type: String,
          default: null
        },
        repeatPassword: {
          type: String,
          default: null
        }
      }
    }
  },
  methods: {
    onSubmit () {
      this.userRegisterInputs.usernameError = true
      console.log(this.userRegisterInputs)
    }
  }
}
</script>
