import { checkSession  } from "../supabase"

export default defineNuxtRouteMiddleware (async (to, from) => {
  const { user } = await checkSession()
  console.log(to, from)
  console.log(user)
})
