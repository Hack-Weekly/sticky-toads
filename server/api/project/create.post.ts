import { returnUserSession } from "../../supabase"
import { createProject } from "../../../prisma/querys/create"

export default defineEventHandler(async (event) => {
  const { res } = event.node
  const body = await readBody(event)
  const projectName = body.project_name
  const { user } = await returnUserSession()
  if (!user) return new Error('Session Not Found!')
  try {
    await createProject(user.id, projectName)
  } catch (err) {
    console.log(err)
    return res.end(err)
  }
})
