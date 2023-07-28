// we will look for the jwt in the session storage, if it does not exist then we will allow the user to
// go back to the sign-in page

export default defineNuxtRouteMiddleware (async (to, from) => {
  if (process.client) {
    const authToken = sessionStorage.getItem('auth_token')
    // console.log(authToken)
    if (!authToken) {
      await fetch('/api/auth/sign-out')
      // console.log('FETCHED ENDPOINT')
      if (to.path !== '/auth/sign-in') {
        return navigateTo('/auth/sign-in')
      }
    } else {
        if (to.path === '/auth/sign-in' || to.path === '/auth/sign-up') {
          return navigateTo('/projects')
        }
    }
  }
})
