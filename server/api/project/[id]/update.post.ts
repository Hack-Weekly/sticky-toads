import { checkSession } from "../../../../supabase"
import { createProjectList, updateProjectName, createCard, updateProjectList, deleteProjectList } from '../../../../prisma/querys/project'
import { Card } from '../../../../interfaces'

export default defineEventHandler(async (event) => {
  const { id }: any = event.context.params
  const { res } = event.node
  const body = await readBody(event)
  // list operation can be any crud operation that isnt read
  const { project_name, list_title, list_id, list_operation, card} = body
  if (!list_operation) throw Error('List Operation Field Must Not Be Empty!')
  try {
    await checkSession(event)

    if (project_name) await updateProjectName(id, project_name)

    const requiredTitleErr = new Error('A List Title Is Required!')

    switch (list_operation) {
      case 'create':
        if (list_title) {
          return await createProjectList(id, list_title)
        } else throw requiredTitleErr
        case 'update':
        if (list_title) {
          await updateProjectList(id, list_id, list_title)
        } else throw requiredTitleErr
        case 'delete':
          await deleteProjectList(id, list_id)
        break
    }
    
    // just need to implement card CRUD and we are vibing, literally almost done with all of the apps CRUD
    // last thing we need to do really is merge branches, revise the data model of the card assigned users
    // and carry out the implementation, Good Job Guys!

    if (card) {
      const cardData: Card = { title: card.title, description: card.description}
      console.log(cardData)
      await createCard(cardData, list_id)
    }

    res.end('Successfully Updated Project!')
  } catch (e) {
    console.log(`ERROR ON PROJECT UPDATE: ${e}`)
    res.end(`${e}`)
  }
})
