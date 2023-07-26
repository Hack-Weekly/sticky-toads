import { supabase, isUserSession } from "../../../supabase"
import { client } from "../../../prisma/client"

export default defineEventHandler(async (event) => {
  const { res } = event.node
  const body = await readBody(event)

  const email = body.email
  const username = body.username
  const password = body.password
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password
    })

    const userData: any = data
    const userId: any = userData.user.id
    if (error) throw error

    const createUserIdentifier = await client.user_Identifier.create({
      data: {
        id: userId,
        username
      }
    })
    await sendRedirect(event, '/sign-in', 301)
  } catch (err) {
    return res.end('Error Creating User!')
  }
})

