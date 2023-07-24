import { createClient } from "@supabase/supabase-js";

const config = useRuntimeConfig()
const url: any = config.SUPABASE_URL
//const anon_key: any = config.SUPABASE_ANON_KEY
const service_role_key: any = config.SERVICE_ROLE_KEY

export const supabase = createClient(url, service_role_key, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
    detectSessionInUrl: false
  }
})

async function returnUserSession() {
  const { data: { user } } = await supabase.auth.getUser()
  return { user }
}

export async function checkSession(event?: any) {
  const { user } = await returnUserSession()
  if (!user) {
    // dont know if its scuffed but with this we can run on the client and server
    if (process.client) {
      navigateTo('/test/sign-up')
    } else if (process.server) {
      await sendRedirect(event, '/test/sign-up', 401)
    }
  }
  return { user }
}

export async function isUserSession(method: any) {
  const { user } = await returnUserSession()

  if (user) {
    method
    return { user }
  }
}

export async function updateUserInfo(attributesObj: any) {
  const { data, error } = await supabase.auth.updateUser(attributesObj)
  if (error) throw error
  console.log(`Updated User ${data.user.id}`)
  const user = data.user

  return { user }
}
