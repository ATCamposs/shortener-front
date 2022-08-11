import { UserRegisterRequest, UserRegisterValidationErrors } from '@/types/Register'
import { UserLoginRequest, UserLoginValidationErrors } from '@/types/Login'

export const useUserRegisterRequestParams = () => useState<UserRegisterRequest>('userRegisterRequestParams', () => ref<UserRegisterRequest>({
  username: '',
  email: '',
  password: '',
  repeatPassword: ''
}))

export const useUserRegisterValidationErrorsParams = () => useState<UserRegisterValidationErrors>('userRegisterValidationErrorsParams', () => ref<UserRegisterValidationErrors>({
  username: [],
  email: [],
  password: [],
  repeatPassword: [],
  afterRequest: []
}))

export const useUserLoginRequest = () => useState<UserLoginRequest>('userLoginRequestParams', () => ref<UserLoginRequest>({
  email: '',
  password: ''
}))

export const useUserLoginValidationErrorsParams = () => useState<UserLoginValidationErrors>('userLoginValidationErrorsParams', () => ref<UserLoginValidationErrors>({
  email: [],
  password: [],
  afterRequest: []
}))

export const useIsSubmittingRegister = () => useState<boolean>('isSubmittingRegister', () => false)
export const useIsSubmittingLogin = () => useState<boolean>('isSubmittingLogin', () => false)
