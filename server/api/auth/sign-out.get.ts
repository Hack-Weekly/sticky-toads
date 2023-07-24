import { supabase, checkSession } from "../../../supabase"

export default defineEventHandler(async (event) => {
  try {
    await checkSession(event)
    const { error } = await supabase.auth.signOut()
    if (error) throw error
    console.log('User Signed Out')
  } catch (err) {
    console.log(err)
  } finally {
      return await sendRedirect(event, '/test/sign-in', 301)
  }
})
