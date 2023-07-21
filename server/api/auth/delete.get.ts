import { supabase, returnUserSession } from "../../supabase";
import { client } from "../../../prisma/client";

// prisma querys will eventually be migrated to the prisma directory within a
// querys/ directory where we will divide the querys accordingly as organized as we can this is temporary.

export default defineEventHandler(async (event) => {
  const { user } = await returnUserSession()
  console.log(user?.email)
  if (!user) return await sendRedirect(event, '/auth/sign-up', 401)
  try {
      const { data, error } = await supabase.auth.admin.deleteUser(user.id)
      if (error) throw error
      console.log(data)
      await client.user_Identifier.delete({
        where: {
          id: user.id
        }
      })
      console.log('Account Removed!')
  } catch (err) {
    console.log('ERROOOOOOOOOR!', err)
  } finally {
    return await sendRedirect(event, '/', 301)
  }
})
