import { createProjectList, deleteProjectList, updateProjectList } from "../../prisma/querys/project"
import { assignUserToCard, createCard, removeCard } from "../../prisma/querys/card"
import { createLabel, attachCardAndLabel, updateLabelColor, updateLabelTitle, removeLabel } from "../../prisma/querys/label"
import { ListActions, CardActions, LabelActions } from "../../types/interfaces/actions"

export const listActionsMap: { [operation: string]: Function } = {
  'create': async ({ list_title, project_id, message }: ListActions) => {
    if (list_title) {
      console.log(project_id, list_title, message)
      await createProjectList(project_id, list_title)
    } else throw new Error(message)
  },
  'update': async ({ list_title, list_id, project_id, message }: ListActions) => {
      if (list_title) {
        await updateProjectList(project_id, list_id, list_title)
      } else throw new Error(message)
  },
  'delete': async ({ list_id, project_id }: ListActions) => await deleteProjectList(project_id, list_id)
}

export const cardActionsMap: { [operation: string]: Function } = {
  'create': async ({ card, list_id }: CardActions) => {
     await createCard(card, list_id)
  },
  'update': async ({  }) => {

  },
  'delete': async ({ card }: CardActions) => {
    await removeCard(card)
  },
  'adduser': async ({ card }: CardActions) => {
    await assignUserToCard(card)
  }
}
// this can be refactored on the query side overall shits pretty clean
export const labelActionsMap: { [operation: string]: Function } = {
  'create': async ({ label }: LabelActions) => {
     await createLabel(label)
  },
  'update': async ({ label }: LabelActions) => {
    if (label.title) {
      await updateLabelTitle(label)
    }

    if (label.color) {
      await updateLabelColor(label)
    }
  },
  'delete': async ({ label }: LabelActions) => {
     await removeLabel(label)
  },
  'attach': async ({ label, card_id }: LabelActions) => {
    if (card_id && label.id) {
      await attachCardAndLabel(card_id, label.id)
    } else throw Error('Missing "id" for Card and Label...')
  }
}
