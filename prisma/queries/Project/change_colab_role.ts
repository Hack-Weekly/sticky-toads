
import { PrismaClient } from "@prisma/client";
import { supabase } from "server/supabase";

export async function changeColabRole(colabProjectID: string, role: string){

    const client = new PrismaClient();
    try{

        const {error} = await supabase.auth.getSession()
        if(colabProjectID == null || role == null || error) throw new Error();

        await client.user_Project.update({
            
            where: { id: colabProjectID },
            data: { user_role: role }
        });

    }catch(error){

        console.log("There was an error adding the user to the project");

    }

}


