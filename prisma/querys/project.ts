import { client } from "../client"
// projects

export async function createProject (userId: string, projectName: string) {
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
}

export async function deleteProject (projectId: string, userId: string) {
  await client.project.delete({
    where: {
      id: projectId,
    },
  })
}

async function updateProject (condition: any, data: Object) {
  await client.project.update({
    where: condition,
    data
  })
}

export async function updateProjectName (projectId: string, newProjectName: string) {
  await updateProject({ id: projectId }, { name: newProjectName})
}

export async function createProjectList(projectId: string, listTitle: string) {
  await updateProject({
    id: projectId
  },
  {
    list: {
      create: {
        title: listTitle,
      }
    }
  })
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

