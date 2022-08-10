import { User } from '@/models/User'
import { UserAlreadyExistsByEmailException } from '@/requests/errors/AuthErrors'
import { UserRegisterRequest } from '@/types/Register'

export async function register (userParams: UserRegisterRequest) : Promise<User> {
  try {
    const res = await useCustomFetch('auth/sign_up', 'POST', userParams)
    const user = Object.assign(new User(), res._data)
    return user
  } catch (err) {
    if (err.response._data.message === 'Email is already taken!') {
      throw new UserAlreadyExistsByEmailException('emailAlreadyInUse')
    }
  }
}
