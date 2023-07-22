import { PrismaClient } from "@prisma/client";

export async function updateProjectName(ProjID: string, newName: string){

    const client = new PrismaClient();
    try{

        if(newName == null || ProjID == null) throw Error;

        await client.project.update({

            where: { id: ProjID },
            data: { name: newName }
        
        })

    }catch(error){

        console.log("There was an error doing the update");

    }

}


