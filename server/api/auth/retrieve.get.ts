import { supabase, checkSession } from "../../../supabase"
import { getAllUserData } from "../../../prisma/querys/user"

export default defineEventHandler(async (event) => {
  try {
    const { user }: any =  await checkSession(event)
    const userData = await getAllUserData(user.id)
    console.log(`User ${user.id} Retrieved!`)

    return { user: userData }
  } catch (err) {
    console.log(err)
    throw Error('Failed to Retrieve User!')
  }
})
