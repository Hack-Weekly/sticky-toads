import { createClient } from "@supabase/supabase-js";
const config = useRuntimeConfig()
const url: any = config.public.SUPABASE_URL
const anon_key: any = config.public.SUPABASE_ANON_KEY


export const supabase = createClient(url, anon_key)

export async function returnUserSession() {
  const { data, error } = await supabase.auth.getSession()
  if (error) throw error
  const { session } = data
  return { session }
}

export async function updateUserInfo(attributesObj: any) {
  const { data, error } = await supabase.auth.updateUser(attributesObj)
  if (error) throw error
  console.log(`Updated User ${data.user.id}`)
  const user = data.user

  return { user }
}
