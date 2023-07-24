import { checkSession } from "../../../../supabase";
import { retrieveProject } from "../../../../prisma/querys/project";

export default defineEventHandler(async (event) => {
  const { res } = event.node
  const { id }: any = event.context.params

  try {
    await checkSession(event)
    const project = await retrieveProject(id)
    return project
  } catch (err) {
    console.log(err)
    return res.end('Error Retrieving Project Data!')
  }
})
