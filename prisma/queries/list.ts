import { PrismaClient } from "@prisma/client";
import { supabase } from "supabase";

const client = new PrismaClient();

export async function createList(ProjID: string, Title: string){

    try{

        const {error} = await supabase.auth.getSession();

        if(ProjID == null || Title == null || error) throw new Error();

        const newList = await client.list.create({
            data: {
                title: Title,
                project_id: ProjID
            }
        })

    }catch(err){

        console.log("There was an error creating the list");

    }

}

export async function updateListProject(ListID: string, newProjID: string){

    try{
        const {error} = await supabase.auth.getSession();
        if(ListID == null || newProjID == null || error) throw new Error();

        await client.list.update({

            where: { id: ListID },
            data: { project_id: newProjID }

        })

    }catch(err){

        console.log("There was an error updating the project")

    }

}

export async function updateListName(ListID: string, newName: string){

    try{

        const {error} = await supabase.auth.getSession();

        if(ListID == null || newName == null || error) throw new Error();

        await client.list.update({

            where: { id: ListID},
            data: { title: newName }

        })

    } catch(err){

        console.log("There was an error updating the name of the list");

    }

}


export async function deleteList(ListID: string){

    try{

        const {error} = await supabase.auth.getSession();

        if(ListID == null || error) throw new Error();

        await client.list.delete({

            where: { id: ListID },

        })

    }catch(err){

        console.log("There is an error deleting the list")

    }

}