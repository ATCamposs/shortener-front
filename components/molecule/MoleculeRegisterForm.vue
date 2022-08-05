<template>
  <form class="w-1/4">
    <AtomTitle
      class="text-center"
      tag="h2"
      content="Teste"
    />

    <AtomLabel name="username" description="Nome de usuário" /><br>
    <AtomInput class="mb-2" @changeInputValue="userRegisterInputs.username = $event" /><br>

    <AtomLabel name="email" description="Email" /><br>
    <AtomInput type="email" class="mb-2" @changeInputValue="userRegisterInputs.email = $event" /><br>

    <AtomLabel name="password" description="Senha" /><br>
    <AtomInput type="password" class="mb-2" @changeInputValue="userRegisterInputs.password = $event" /><br>

    <AtomLabel name="repeat-password" description="Repita a Senha" /><br>
    <AtomInput type="password" class="mb-2" @changeInputValue="userRegisterInputs.repeatPassword = $event" /><br>

    <AtomButton class="mt-5" url="#" name="Registrar" @click="registerUser" />
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
    registerUser () {
      console.log(this.userRegisterInputs)
    }
  }
}
</script>
