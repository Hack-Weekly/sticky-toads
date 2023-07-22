import { deleteProject } from "../../../../prisma/querys/project"
import { returnUserSession } from "../../../supabase"

export default defineEventHandler(async (event) => {
  const { id }: any = event.context.params
  const { res } = event.node
  const { user }: any = await returnUserSession()
  if (!user) await sendRedirect(event, '/', 40)
  try {
    await deleteProject(id, user.id)
    res.end('Successfully Deleted Project!')
  } catch (e) {
    console.log(`ERROR ON PROJECT DELETION: ${e}`)
    res.end('Project Does Not Exist!')
  }
})
