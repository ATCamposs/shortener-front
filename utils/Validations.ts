export const isInvalidEmail = (email: string): boolean => !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)
export const isInvalidPassword = (password: string): boolean => !/^[a-zA-Z0-9\-_]{8,20}$/g.test(password)
