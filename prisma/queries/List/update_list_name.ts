import { PrismaClient } from "@prisma/client";

export async function updateListName(ListID: string, newName: string){

    const client = new PrismaClient();

    try{

        if(ListID == null || newName == null) throw Error;

        await client.list.update({

            where: { id: ListID},
            data: { title: newName }

        })

    } catch(error){

        console.log("There was an error updating the name of the list");

    }

}