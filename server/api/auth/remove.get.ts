import { supabase } from "../../supabase";
import { client } from "../../../prisma/client";


// prisma querys will eventually be migrated to the prisma directory within a
// querys/ directory where we will divide the querys accordingly as organized as we can this is temporary.


// this will not work in postman because supabase stores the jwt session token within local storage
// in order to actually remove an account u need access to the local storage because thats what the method
// needs.

export default defineEventHandler(async (event) => {
  try {
    const { data, error } = await supabase.auth.getSession()

    if (error) throw error

    const { session, user }: any = data
    console.log(session, user)
    await supabase.auth.admin.deleteUser(user.id)
    await client.user_Identifier.delete({
      where: {
        id: user.id
      }
    })

    console.log('Account Removed!')
  } catch (err) {
    console.log(err)
  } finally {
    return await sendRedirect(event, '/client/auth/sign-up', 301)
  }
})
