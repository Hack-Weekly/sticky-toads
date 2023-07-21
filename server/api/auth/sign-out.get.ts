import { supabase, returnUserSession } from "../../supabase"

export default defineEventHandler(async (event) => {
  const { user } = await returnUserSession()
  if (!user) return sendRedirect(event, '/', 403)
  try {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
    console.log('User Signed Out')
  } catch (err) {
    console.log(err)
  } finally {
    return await sendRedirect(event, '/client/auth/sign-up', 403)
  }
})
