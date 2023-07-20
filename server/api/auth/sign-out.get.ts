import { supabase } from "../../supabase";

export default defineEventHandler(async (event) => {
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
