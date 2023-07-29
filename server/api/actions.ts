import { createProjectList, deleteProjectList, updateProjectList } from "../../prisma/querys/project"
import { assignUserToCard, createCard, removeCard, unassignUserFromCard } from "../../prisma/querys/card"
import { createLabel, attachCardAndLabel, updateLabelColor, updateLabelTitle, removeLabel, detachCardAndLabel } from "../../prisma/querys/label"
import { ListActions, CardActions, LabelActions } from "../../types/interfaces/actions"

// here in this actions, return the errors from the functions in a object if there is an error
// then throw it above so that the update function can catch them, its kinda aids but it will be worth it
// or idk maybe i get a better idea in the future.


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
    if (!list_id) throw new Error('List id is required to perform this operation!')
    await createCard(card, list_id)
  },
  'update': async ({  }) => {

  },
  'delete': async ({ card }: CardActions) => {
    await removeCard(card)
  },
  'add_user': async ({ card }: CardActions) => {
    await assignUserToCard(card)
  },
  'remove_user': async ({ card }: CardActions) => {
    await unassignUserFromCard(card)
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
  },
  'detach': async ({ label, card_id }: LabelActions) => {
    if (card_id && label.id) {
      await detachCardAndLabel(card_id, label.id)
    } else throw Error('Missing "id" for Card and Label...')
  }
}
