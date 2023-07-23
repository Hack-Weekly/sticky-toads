import { supabase } from "../../supabase"
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

    // creating user Identifier might be necessary if not tho ill just remove it
    // i say this because supabase only has email field not a username one so i think this should
    // be ok

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

