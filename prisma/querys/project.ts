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
              name: projectName,
              list: {
                create: {
                  title: 'My List',
                }
              }
            }
          }
        },
      })
    })
    if (error) throw error
}

export async function deleteProject (projectId: string) {
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

export async function updateProjectList (projectId: string, listId: string, listTitle: string) {
  const { error } = await queryHandler('Failed To Update Project List!', async () => await client.list.update({
    where: {
     id: listId,
     project_id: projectId
    },
    data: {
      title: listTitle
    },
  }))

  if (error) throw error
}

export async function deleteProjectList (projectId: string, listId: string) {
  const { error } = await queryHandler('Failed To Delete Project List!', async () => await client.list.delete({
    where: {
     id: listId,
     project_id: projectId
    }
  }))
  if (error) throw error
}

export async function retrieveProject (projectId: string) {
  const { error, returned } = await queryHandler('Failed To Retrieve Project!', async () => {
    const project = await client.project.findUnique({
      where: {
        id: projectId
      },
      include: {
        list: {
          include: {
            card: {
              include: {
                assigned_users: true
              }
            }
          }
        },
        user_project: {
          select: {
            user: true,
          }
        }
      }
    })

    return project
  })

  if (error) throw error

  return returned
}

export async function addUserToProject (projectId: string, userId: string) {
  const { error, returned } = await queryHandler('Failed To Add User To Project!', async () => updateProject({
    id: projectId
  },
  {
    user_project: {
      create: {
        user_id: userId
      }
    }
  }))

  if (error) throw error

  return returned
}
