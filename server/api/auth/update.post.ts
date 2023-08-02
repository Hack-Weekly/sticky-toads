import { supabase, checkSession, updateUserInfo, updatePicture } from "../../../supabase";
import { updateUserIdentityEmail, updateUserIdentityUsername } from "../../../prisma/querys/user";

// will be properly tested once ui guys can build me a form since supabase adds the token to localstorage

// OK Bionic, I am almost done

export default defineEventHandler(async (event) => {
  const { res } = event.node
  const body = await readBody(event)
  const { username, email, password } = body.values
  const { file, information } = body.picture

  const checkEmailMessage: string = `Verification email has been sent to new email of ${email}`
  try {
      const { user }: any = await checkSession(event)
      // some sub funcions can probably be refactored but this is readable enough for now i think...
      const actions = {
        emailAndPassword: async () => {
          await updateUserInfo({ email, password })
          await updateUserIdentityEmail(user.id, email)
          return checkEmailMessage
        },
        emailAndUsername: async () => {
          await updateUserInfo({ email })
          await updateUserIdentityEmail(user.id, email)
          await updateUserIdentityUsername(user.id, username)
        },
        email: async () => {
          await updateUserInfo({ email })
          await updateUserIdentityEmail(user.id, email)
          return checkEmailMessage
        },
        password: async () => {
          await updateUserInfo({ password })
        },
        username: async () => {
          await updateUserIdentityUsername(user.id, username)
        },
        picture: async () => {
          const base64Data = (file as string).replace(/^data:image\/[A-Za-z0-9]+;base64,/, '')
          const buffer = Buffer.from(base64Data, 'base64');
          const fileExtension = information.name.substr(information.name.lastIndexOf('.'));
          const newFileName = user.id + fileExtension;
          const contentType = information.type;
          await updatePicture(newFileName, buffer, contentType)
        },
        all: async () => {
          await updateUserInfo({ email, password })
          await updateUserIdentityEmail(user.id, email)
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
      } else if (body.picture) {
        actions.picture()
      }

  } catch (err) {
    return res.end('Error Updating User!') 
  }

  return res.end('User Updated!')
})
