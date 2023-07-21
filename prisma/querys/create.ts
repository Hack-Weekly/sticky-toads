import { client } from "../client"
// projects


export async function createProject(userId: string, projectName: string) {
  await client.user_Project.create({
    data: {
      user_id: userId,
      project: {
        create: {
          name: projectName,
        },
      },
    },
  })
}
