import { checkSession } from "../../../supabase"
import { createProject } from "../../../prisma/querys/project"

export default defineEventHandler(async (event) => {
  const { res } = event.node
  const body = await readBody(event)
  const projectName = body.project_name
  console.log(projectName)
  try {
    const { user }: any = await checkSession(event)
    await createProject(user.id, projectName)
    console.log(`USER ${user.id} SUCCESSFULLY CREATED PROJECT ${projectName}`)
    res.end(`Successfully created project ${projectName}`)
  } catch (e) {
    console.log(e)
    return res.end(`${e}`)
  }
})
