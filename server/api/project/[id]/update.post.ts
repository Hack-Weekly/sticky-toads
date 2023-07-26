import { checkSession } from "../../../../supabase"
import { createProjectList, updateProjectName, updateProjectList, deleteProjectList } from '../../../../prisma/querys/project'
import { createCard, removeCard } from "../../../../prisma/querys/card"
import { attachCardAndLabel, createLabel, removeLabel, updateLabelColor, updateLabelTitle } from "../../../../prisma/querys/label"
import { Card, Label } from '../../../../types/interfaces/project'

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
      card
  } = body

  try {
    await checkSession(event)

    if (project_name) await updateProjectName(id, project_name)

    const requiredTitleErr = new Error('A List Title Is Required!')
// switch cases shall be refactored later, because bionic writes code tests, then refactors
    switch (list_operation) {
      case 'create':
        if (list_title) {
          await createProjectList(id, list_title)
        } else throw requiredTitleErr
      break
      case 'update':
        if (list_title) {
          await updateProjectList(id, list_id, list_title)
        } else throw requiredTitleErr
      break
      case 'delete':
        await deleteProjectList(id, list_id)
      break
    }

    if (label) {
      const labelData: Label = { id: label.id, title: label.title, color: label.color}
      switch (label_operation) {
        case 'create':
          await createLabel(labelData)
        break
        case 'attach':
          if (card.id && label.id) {
            await attachCardAndLabel(card.id, label.id)
          } else throw Error('Missing "id" for Card and Label...')
        break
        case 'update':
          if (labelData.title) {
            await updateLabelTitle(labelData)
          }

          if (labelData.color) {
            await updateLabelColor(labelData)
          }
        break
        case 'delete':
          await removeLabel(labelData)
        break
      }
    }

   if (card) {
     const cardData: Card = { id: card.id, title: card.title, description: card.description }
     switch (card_operation) {
      case 'create':
        await createCard(cardData, list_id)
      break
      case 'update':
     
      break
      case 'delete':
        await removeCard(cardData)
      break
     }
   }
    
    res.end('Successfully Updated Project!')
  } catch (e) {
    console.log(`ERROR ON PROJECT UPDATE: ${e}`)
    res.end(`${e}`)
  }
})
