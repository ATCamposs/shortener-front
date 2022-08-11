import { User } from '@/models/User'
import { UserAlreadyExistsByEmailException } from '@/requests/errors/AuthErrors'
import { UserRegisterRequest } from '@/types/Register'
import { UserLoginRequest } from '@/types/Login'

export async function sendRegisterUserRequest (userParams: UserRegisterRequest) : Promise<User> {
  try {
    const res = await useCustomFetch('auth/sign_up', 'POST', userParams)
    return Object.assign(new User(), res._data)
  } catch (err) {
    if (err.response._data.message === 'Email is already taken!') {
      throw new UserAlreadyExistsByEmailException('emailAlreadyInUse')
    }
  }
}

export async function sendLoginUserRequest (userParams: UserLoginRequest) : Promise<User> {
  try {
    const res = await useCustomFetch('auth/sign_in', 'POST', userParams)
    return Object.assign(new User(), res._data)
  } catch (err) {
    return null
  }
}
