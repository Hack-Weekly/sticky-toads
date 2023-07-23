import { returnUserSession } from "../../supabase"
import { createProject } from "../../../prisma/querys/project"

export default defineEventHandler(async (event) => {
  const { res } = event.node
  const body = await readBody(event)
  const projectName = body.project_name
  const { user } = await returnUserSession()
  if (!user) return new Error('Session Not Found!')
  try {
    await createProject(user.id, projectName)
    console.log(`USER ${user.id} SUCCESSFULLY CREATED PROJECT ${projectName}`)
    res.end(`Successfully created project ${projectName}`)
  } catch (e) {
    console.log(e)
    return res.end(`${e}`)
  }
})
