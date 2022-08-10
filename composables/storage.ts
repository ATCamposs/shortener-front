import { User } from '@/models/User'

export const setUser = (user: User) => localStorage.setItem('user', JSON.stringify(user))
