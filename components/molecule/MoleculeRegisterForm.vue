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
        :class="userRegisterInputs.usernameError == true ? 'border border-red-500 focus:border-red-500' : ''"
        @changeInputValue="userRegisterInputs.username = $event"
      />
      <p v-if="userRegisterInputs.usernameError == true" class="text-red-500 text-xs italic">
        Please fill out this field.
      </p>
    </div>

    <div class="mb-2">
      <AtomLabel name="email" description="Email" />
      <AtomInput
        :class="userRegisterInputs.emailError == true ? 'border border-red-500 focus:border-red-500' : ''"
        @changeInputValue="userRegisterInputs.email = $event"
      />
      <p v-if="userRegisterInputs.emailError == true" class="text-red-500 text-xs italic">
        Please fill out this field.
      </p>
    </div>

    <div class="mb-2">
      <AtomLabel name="password" description="Senha" />
      <AtomInput
        :class="userRegisterInputs.passwordError == true ? 'border border-red-500 focus:border-red-500' : ''"
        @changeInputValue="userRegisterInputs.password = $event"
      />
      <p v-if="userRegisterInputs.emailError == true" class="text-red-500 text-xs italic">
        Please fill out this field.
      </p>
    </div>

    <div class="mb-2">
      <AtomLabel name="repeat-password" description="Repita a Senha" />
      <AtomInput
        :class="userRegisterInputs.repeatPasswordError == true ? 'border border-red-500 focus:border-red-500' : ''"
        @changeInputValue="userRegisterInputs.repeatPassword = $event"
      />
      <p v-if="userRegisterInputs.repeatPasswordError == true" class="text-red-500 text-xs italic">
        Please fill out this field.
      </p>
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
