import { PrismaClient } from "@prisma/client";
import { supabase } from "supabase";

export async function updateListProject(ListID: string, newProjID: string){

    const client = new PrismaClient();

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