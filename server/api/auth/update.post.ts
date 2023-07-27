import { supabase, checkSession, updateUserInfo } from "../../../supabase";
import { updateUserIdentityUsername } from "../../../prisma/querys/user";

// will be properly tested once ui guys can build me a form since supabase adds the token to localstorage

export default defineEventHandler(async (event) => {
  const { res } = event.node
  const body = await readBody(event)
  console.log(body)
  const { username, email, password } = body
  
  try {
      await checkSession(event)
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
  } catch (err) {
    return res.end('Error Updating User!') 
  }
})
