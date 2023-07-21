import { supabase, returnUserSession, updateUserInfo } from "../../supabase";
import { updateUserIdentityUsername } from "../../../prisma/querys/user";

// will be properly tested once ui guys can build me a form since supabase adds the token to localstorage
1
export default defineEventHandler(async (event) => {
  const { res } = event.node
  const body = await readBody(event)
  const email = body.email
  const password = body.password
  const username = body.username
  const { user } = await returnUserSession()
  try {
    if (user) {
      if (email && password) {
        await updateUserInfo({ email, password })
      } else if (email) {
        await updateUserInfo({ email })
      } else if (password) {
        await updateUserInfo({ password })
      } else if (email && username && password) {
        const { user } = await updateUserInfo({ email, password })
        await updateUserIdentityUsername(user.id, username)
      }
    } else return await sendRedirect(event, '/client/sign-up', 301)
  } catch (err) {
    return res.end('Error Updating User!') 
  }
})
