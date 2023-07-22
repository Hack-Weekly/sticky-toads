// within this endpoint we will not only allow users to update the project name,
// instead we will allow users to update any relation under the project table for example
// lists and etc.
import { returnUserSession } from "../../../supabase"
import { createProjectList, updateProjectName, Card, createCard } from '../../../../prisma/querys/project'

export default defineEventHandler(async (event) => {
  const { id }: any = event.context.params
  const { res } = event.node
  const body = await readBody(event)
  const { project_name, list_title, card } = body
  const { user }: any = await returnUserSession()
  if (!user) await sendRedirect(event, '/', 401)
  try {
    // bionic will refactor later because bionic hates these if statements
    const cardData: Card = { title: card.title, description: card.description, listId: card.listId }
// needs testing, will do later since i need a query to return the listId from the project
    if (project_name) await updateProjectName(id, project_name)
    if (list_title)  await createProjectList(id, list_title)
    if (cardData) await createCard(cardData)

    res.end('Successfully Updated Project!')
  } catch (e) {
    console.log(`ERROR ON PROJECT UPDATE: ${e}`)
    res.end('Server Error On Project Update!')
  }
})
