import { UserRegisterRequest, ValidationErrors } from '~~/types/Register'

export const useUserRegisterRequestParams = () => useState<UserRegisterRequest>('userRegisterRequestParams', () => ref<UserRegisterRequest>({
  username: '',
  email: '',
  password: '',
  repeatPassword: ''
}))

export const useUserRegisterValidationErrorsParams = () => useState<ValidationErrors>('userRegisterValidationErrorsParams', () => ref<ValidationErrors>({
  username: [],
  email: [],
  password: [],
  repeatPassword: [],
  afterRequest: []
}))

export const useIsSubmitting = () => useState<boolean>('isSubmittingRegister', () => false)
