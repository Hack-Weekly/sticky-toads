import { PrismaClient } from "@prisma/client";

export async function updateListProject(ListID: string, newProjID: string){

    const client = new PrismaClient();

    try{

        if(ListID == null || newProjID == null) throw Error;

        await client.list.update({

            where: { id: ListID },
            data: { project_id: newProjID }

        })

    }catch(error){

        console.log("There was an error updating the project")

    }

}