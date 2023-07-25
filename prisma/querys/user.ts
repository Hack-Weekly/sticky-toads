import { client } from "../client";

async function updateUserIdentity (whereObj: any, dataObj: any) {
  await client.user_Identifier.update({
    where: whereObj,
    data: dataObj
  })
}

export async function updateUserIdentityUsername(userId: string, username: string) {
  if (!userId || !username) throw new Error('Id or Username is falsy, please try again!')
  await updateUserIdentity({ id: userId }, { username })
}

export async function getAllUserData(userId: string) {
  await client.user_Identifier.findUnique({
    where: {
      id: userId
    },
    include: {
      user_project: {
        include: {
          project: true,
        },
      },
    },
  })
}
