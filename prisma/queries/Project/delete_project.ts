import { PrismaClient } from "@prisma/client";

export async function deleteProject(UserProjID: string){

    const client = new PrismaClient();

    try{

        if(UserProjID == null) throw Error;

        await client.user_Project.delete({

            where: { id: UserProjID }

        })

    }catch(error){

        console.log("There was an error deleting the porject");

    }


}