import { client } from "../client"
import { queryHandler } from "./handler"
// projects

export async function createProject (userId: string, projectName: string) {
    if (!projectName) throw new Error('Server Unable To Process Project Name Please Try Again!')
    const { error }: any = await queryHandler('Failed To Create Project!', async () => { 
      await client.user_Project.create({
        data: {
          user: {
            connect: { id: userId }
          },
          project: {
            create: {
              name: projectName
            }
          }
        },
      })
    })

    if (error) throw error
}

export async function deleteProject (projectId: string, userId: string) {
  const { error }: any = await queryHandler(`Failed To Delete Projecit ${projectId}`, async () => await client.project.delete({
    where: {
      id: projectId,
    },
  }))

  if (error) throw error
}

async function updateProject (condition: any, data: Object) {
  await client.project.update({
    where: condition,
    data
  })
}

export async function updateProjectName (projectId: string, newProjectName: string) {
  const { error }: any = await queryHandler('Failed To Update Project Name!', async () => await updateProject({ id: projectId }, { name: newProjectName}))

  if (error) throw error
}

export async function createProjectList(projectId: string, listTitle: string) {
  const { error } = await queryHandler('Failed To Create Project List!', async () => await updateProject({
    id: projectId
   },
   {
    list: {
      create: {
        title: listTitle,
          }
        }
   }))

  if (error) throw error
}

// instead of object create an interface that can take a set of predefined types or something
// this way we can make sure that the correct data is inserted within the argument


// still needs a assigned_users field but this will work for now
// maybe move to a types dir or something idk
export interface Card {
  title: string
  description: string
  listId: string
}

export async function createCard (cardData: Card) {
  const { title, description, listId } = cardData
  await client.card.create({
    data: {
      list: {
        connect: { id: listId }
      },
      title,
      description
    }
  })

}
