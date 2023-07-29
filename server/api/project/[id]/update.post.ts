import { checkSession } from "../../../../supabase"
import { updateProjectName, addUserToProject } from '../../../../prisma/querys/project'
import { Card, Label } from '../../../../types/interfaces/project'
import { listActionsMap, cardActionsMap, labelActionsMap } from "../../actions"

export default defineEventHandler(async (event) => {
  const { id }: any = event.context.params
  const { res } = event.node
  const body = await readBody(event)
  // list operation can be any crud operation that isnt read
  const {
      project_name,
      list_title,
      list_id,
      card_operation,
      list_operation,
      label_operation,
      label,
      card,
      add_user
  } = body

  try {
    await checkSession(event)
    if (project_name) await updateProjectName(id, project_name)

    if (add_user) {
      // user id is the id of the user we want to add...
      const addUser = { user_id: add_user.user_id }
      await addUserToProject(id, addUser.user_id)
      console.log('User Added To Project!')
    }

    if (list_operation) {
      const listAction: any = listActionsMap[list_operation]
      const requiredTitleErrMssg = 'A List Title Is Required!'
      await listAction({ project_id: id, list_id, list_title, message: requiredTitleErrMssg })
    }

    if (label) {
      const labelData: Label = { id: label.id, title: label.title, color: label.color }
      const labelActions = labelActionsMap[label_operation]
      await labelActions({ list_id, label: labelData })
    }

    if (card) {
      const cardData: Card = { id: card.id, title: card.title, description: card.description, assigned_id: card.assigned_id }
      const cardActions = cardActionsMap[card_operation]
      await cardActions({ list_id, card: cardData })
    }

    res.end('Successfully Updated Project!')
  } catch (e) {
    console.log(`ERROR ON PROJECT UPDATE: ${e}`)
    res.end(`${e}`)
  }
})
