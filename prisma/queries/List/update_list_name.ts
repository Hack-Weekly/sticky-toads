import { PrismaClient } from "@prisma/client";
import { supabase } from "server/supabase";

export async function updateListName(ListID: string, newName: string){

    const client = new PrismaClient();

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