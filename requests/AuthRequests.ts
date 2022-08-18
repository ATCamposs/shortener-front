import { User } from '@/models/User'
import { UserAlreadyExistsByEmailException } from '@/requests/errors/AuthErrors'
import { UserRegisterRequest } from '@/types/Register'
import { UserLoginRequest } from '@/types/Login'

export const sendFormRegisterUserRequest = async (userParams: UserRegisterRequest) : Promise<User> => {
  try {
    const credentials = await createUser(
      userParams.email,
      userParams.password
    )
    const tokenResult = await credentials.user.getIdTokenResult().then(tokenResult => tokenResult)
    const actualUser: User = {
      email: credentials.user.email,
      roles: tokenResult.claims.custom_claims as Array<string>,
      expiresAt: tokenResult.claims.exp,
      token: tokenResult.token,
      refreshToken: credentials.user.refreshToken
    }
    setUserOnCookie(actualUser)
    return actualUser
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err.code)
    if (err.code === 'auth/email-already-in-use') {
      throw new UserAlreadyExistsByEmailException('emailAlreadyInUse')
    }
  }
}

export const sendFormLoginUserRequest = async (userParams: UserLoginRequest) : Promise<User> => {
  try {
    const credentials = await signInUser(
      userParams.email,
      userParams.password
    )
    const tokenResult = await credentials.user.getIdTokenResult().then(tokenResult => tokenResult)
    const actualUser: User = {
      email: credentials.user.email,
      roles: tokenResult.claims.custom_claims as Array<string>,
      expiresAt: tokenResult.claims.exp,
      token: tokenResult.token,
      refreshToken: credentials.user.refreshToken
    }
    setUserOnCookie(actualUser)
    return actualUser
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err.code)
    return null
  }
}

export const sendGoogleLoginUserRequest = async () : Promise<User> => {
  try {
    const credentials = await signInUserWithGoogle()
    const tokenResult = await credentials.user.getIdTokenResult().then(tokenResult => tokenResult)
    const actualUser: User = {
      email: credentials.user.email,
      roles: tokenResult.claims.custom_claims as Array<string>,
      expiresAt: tokenResult.claims.exp,
      token: tokenResult.token,
      refreshToken: credentials.user.refreshToken
    }
    setUserOnCookie(actualUser)
    return actualUser
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err.code)
    return null
  }
}
