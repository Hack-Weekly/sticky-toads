import { supabase, checkSession } from "../../../supabase"

export default defineEventHandler(async (event) => {
  try {
    await checkSession(event)
    const { error } = await supabase.auth.signOut()
    if (error) throw error
    console.log('User Signed Out')
  } catch (err) {
    console.log(err)
    throw Error('Error On User Sign Out!')
  }
})
