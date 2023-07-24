import { PrismaClient } from "@prisma/client";
import { supabase } from "supabase";

export async function removeColab(colabProjectID: string){

    const client = new PrismaClient();
    try{

        const {error} = await supabase.auth.getSession()
        if(colabProjectID == null || error) throw new Error();

        await client.user_Project.delete({
            
            where: { id: colabProjectID }

        });

    }catch(error){

        console.log("There was an error adding the user to the project");

    }

}


