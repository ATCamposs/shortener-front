import { User } from '@/models/User'

export const setUserOnStorage = (user: User) => localStorage.setItem('user', JSON.stringify(user))
export const getUserOnStorage = (): User => {
  const user = localStorage.getItem('user')
  if (user != null) {
    return Object.assign(new User(), JSON.parse(user)) as User
  }
  return null
}
