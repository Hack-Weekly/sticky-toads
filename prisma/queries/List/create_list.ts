import { PrismaClient } from "@prisma/client";

export async function createList(ProjID: string, Title: string){

    const client = new PrismaClient();

    try{

        if(ProjID == null || Title == null) throw Error;

        const newList = await client.list.create({
            data: {
                title: Title,
                project_id: ProjID
            }
        })

    }catch(error){

        console.log("There was an error creating the list");

    }

}