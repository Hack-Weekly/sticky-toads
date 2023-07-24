import { PrismaClient } from "@prisma/client";
import { supabase } from "supabase";
export async function updateProjectName(ProjID: string, newName: string){

    const client = new PrismaClient();
    try{

        const {error} = await supabase.auth.getSession()
        if(newName == null || ProjID == null || error) throw new Error();

        await client.project.update({

            where: { id: ProjID },
            data: { name: newName }
        
        })

    }catch(error){

        console.log("There was an error doing the update");

    }

}


