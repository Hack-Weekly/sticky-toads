import { supabase, checkSession, updateUserInfo } from "../../../supabase";
import { updateUserIdentityUsername } from "../../../prisma/querys/user";
import {object} from "yup";

// will be properly tested once ui guys can build me a form since supabase adds the token to localstorage

export default defineEventHandler(async (event) => {
  const { res } = event.node
  const body = await readBody(event)
  console.log(body)
  const { username, email, password } = body
  console.log(username, email, password)
  const checkEmailMessage: string = `Verification email has been sent to new email of ${email}`
  try {
      const { user }: any = await checkSession(event)
      // some sub funcions can probably be refactored but this is readable enough for now i think...
      const actions = {
        emailAndPassword: async () => {
          await updateUserInfo({ email, password })
          return checkEmailMessage
        },
        emailAndUsername: async () => {
          await updateUserInfo({ email })
          await updateUserIdentityUsername(user.id, username)
        },
        email: async () => {
          await updateUserInfo({ email })
          return checkEmailMessage
        },
        password: async () => {
          await updateUserInfo({ password })
        },
        username: async () => {
          await updateUserIdentityUsername(user.id, username)
        },
        all: async () => {
          await updateUserInfo({ email, password })
          await updateUserIdentityUsername(user.id, username)
          return checkEmailMessage
        }
      }

      if (email && password) {
        actions.emailAndPassword()
      } else if (email && password && username) {
        actions.all()
      } else if (email && username) {
        actions.emailAndUsername()
      } else if (email) {
        actions.email()
      } else if (username) {
        actions.username()
      } else if (password) {
        actions.password()
      }

  } catch (err) {
    return res.end('Error Updating User!') 
  }
})
