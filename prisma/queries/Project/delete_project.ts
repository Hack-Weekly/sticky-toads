import { PrismaClient } from "@prisma/client";
import { supabase } from "supabase";

export async function deleteProject(UserProjID: string){

    const client = new PrismaClient();

    try{

        const {error} = await supabase.auth.getSession();
        if(UserProjID == null || error) throw new Error();

        await client.user_Project.delete({

            where: { id: UserProjID }

        })

    }catch(error){

        console.log("There was an error deleting the porject");

    }


}