import { client } from "prisma/client";

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
