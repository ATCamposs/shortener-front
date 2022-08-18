export default defineNuxtPlugin(() => {
  addRouteMiddleware('checkUserLoggedIn', () => {
    const user = getUserFromCookie()
    console.log(user)
    if (!user) {
      return navigateTo('/')
    }
  }, { global: true })
})
