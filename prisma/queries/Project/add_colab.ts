import { PrismaClient } from "@prisma/client";
import { supabase } from "server/supabase";

export async function addColab(userID: string, projectID: string, role: string){

    const client = new PrismaClient();
    try{

        const {error} = await supabase.auth.getSession()
        if(userID == null || projectID == null || error) throw new Error();

        await client.user_Project.create({
            data: {
                user_id: userID,
                project_id: projectID,
                user_role: role
            }
        });

    }catch(error){

        console.log("There was an error adding the user to the project");

    }

}


