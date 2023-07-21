import { returnUserSession } from "../../supabase"
import { createProject } from "../../../prisma/querys/create"

export default defineEventHandler(async (event) => {
  const { res } = event.node
  const body = await readBody(event)
  const projectName = body.project_name
  const { session } = await returnUserSession()
  if (!session) return new Error('Session Not Found!')
  try {
    await createProject(session.user.id, projectName)
  } catch (err) {
    console.log(err)
    return res.end(err)
  }
})
