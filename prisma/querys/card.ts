import { client } from "../client"
import { Card } from "../../types/interfaces/project"
import { queryHandler } from "./handler"

export async function createCard (cardData: Card, listId: string) {
  const { error } = await queryHandler('Failed To Create Card!', async () => {
    const { title, description } = cardData
    console.log(listId)
    await client.card.create({
      data: {
        list: {
          connect: { id: listId }
        },
        title,
        description,
      }
    })
  })

  if (error) throw error
}
export async function removeCard(cardData: Card) {
  const { id } = cardData
  const { error } = await queryHandler('Failed To Remove Card!', async () => {
    await client.card.delete({
      where: { id }
    });
  })

  if (error) throw error
}

// work in progress

export async function assignUserToCard ({ id }: Card) {
  const { error } = await queryHandler('Failed To Assign User To Card!', async () => {
    await client.card.update({
      where: {
        id
      },
    })
  })

  if (error) throw error
}
