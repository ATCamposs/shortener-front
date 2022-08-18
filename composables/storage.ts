import { User } from '@/models/User'

export const setUserOnCookie = (user: User) => {
  const userFromCookie = useCookie('user')
  userFromCookie.value = JSON.stringify(user)
}

export const getUserFromCookie = (): User => {
  const userFromCookie = useCookie('user')
  if (userFromCookie != null) {
    return Object.assign(new User(), userFromCookie.value) as User
  }
  return null
}
