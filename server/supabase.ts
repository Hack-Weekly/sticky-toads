import { createClient } from "@supabase/supabase-js";

const config = useRuntimeConfig()
const url: any = config.public.SUPABASE_URL
const anon_key: any = config.public.SUPABASE_ANON_KEY
const service_role_key: any = config.SERVICE_ROLE_KEY

export const supabase = createClient(url, service_role_key, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
    detectSessionInUrl: false
  }
})

export async function returnUserSession() {
  const { data: { user } } = await supabase.auth.getUser()
  return { user }
}

export async function updateUserInfo(attributesObj: any) {
  const { data, error } = await supabase.auth.updateUser(attributesObj)
  if (error) throw error
  console.log(`Updated User ${data.user.id}`)
  const user = data.user

  return { user }
}
