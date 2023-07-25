import { deleteProject } from "../../../../prisma/querys/project"
import { checkSession } from "../../../../supabase"

export default defineEventHandler(async (event) => {
  const { id }: any = event.context.params
  const { res } = event.node
  try {
    await checkSession(event)
    await deleteProject(id)
    res.end('Successfully Deleted Project!')
  } catch (e) {
    console.log(`ERROR ON PROJECT DELETION: ${e}`)
    res.end(`${e}`)
  }
})
