import { client } from "../client";
import { queryHandler } from "./handler";
import { Label } from "../../types/interfaces/project";

// still missing assigned users because this is a work in progress
export async function createLabel (labelData: Label) {
  const { title, color }: any = labelData
  const { error } = await queryHandler('Failed To Create Label!', async () => {
    await client.label.create({
      data: {
        title,
        color
      }
    })
  })

  if (error) throw error
}

async function updateLabel (id: string, message: string, data: Object) {
  const { error } = await queryHandler(message, async () => {
    await client.label.update({
      where: { id },
      data
    })
  })

  if (error) throw error
}

export async function updateLabelTitle (labelData: Label) {
  const { id, title } = labelData
  return await updateLabel(id, 'Failed To Update Label Title!', { title })
}

export async function updateLabelColor (labelData: Label) {
  const { id, color } = labelData
  return await updateLabel(id, 'Failed To Update Label Color!', { color })
}

export async function removeLabel (labelData: Label) {
  const { id } = labelData

  console.log(id)
  const { error } = await queryHandler('Failed To Remove Label!', async () => client.label.delete({
    where: { id }
  }))

  if (error) return error
  console.log(`Successfully removed label ${id}`)
}

export async function attachCardAndLabel (cardId: string, labelId: string) {
  const { error } = await queryHandler('Failed To Attach Card And Label', async () => await client.card_Label.create({
    data: {
      card: {
        connect: { id: cardId }
      },
      label: {
        connect: { id: labelId }
      },
    }
  }))

  if (error) throw error
}
