import { PrismaClient } from "@prisma/client";

export async function deleteList(ListID: string){

    const client = new PrismaClient();

    try{

        if(ListID == null) throw Error;

        await client.list.delete({

            where: { id: ListID },

        })


    }catch(error){

        console.log("There is an error deleting the list")

    }

}