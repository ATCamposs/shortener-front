import { User } from '@/models/User'
import { UserRegisterRequest } from '@/interfaces/UserRegisterRequest'

export async function register (userParams: UserRegisterRequest) : Promise<User> {
  const res = await useCustomFetch('auth/sign_up', 'POST', userParams)
  const user = Object.assign(new User(), res._data)
  return user
}
