import { supabase, isUserSession } from "../../../supabase"
import { client } from "../../../prisma/client"

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const email = body.email
  const username = body.username
  const password = body.password
  const { data, error } = await supabase.auth.signUp({
    email,
    password
  })

  if(error?.message) {
    return { message: error?.message, statusCode: 409}
  }

  if(data?.user) {

    const userData: any = data
    const userId: any = userData.user.id

    const createUserIdentifier = await client.user_Identifier.create({
      data: {
        id: userId,
        username,
        email
      }
    })

    if(createUserIdentifier) {
      return { message: `redirecting to sing-in...`, statusCode: 200}
    } else {
      return { message: `something went wrong!`, statusCode: 500}
    }

  }

  // await sendRedirect(event, '/sign-in', 301)
})

