import { supabase, checkSession, getSignedUrl } from "../../../supabase"
import { getAllUserData } from "../../../prisma/querys/user"

export default defineEventHandler(async (event) => {
  try {
    const { user }: any =  await checkSession(event)
    const userData = await getAllUserData(user.id)
    const picture = await getSignedUrl(user.id)

    return { user: userData, picture: picture }
  } catch (err) {
    console.log(err)
    throw Error('Failed to Retrieve User!')
  }
})
