import { PrismaClient } from "@prisma/client";
import { supabase } from "server/supabase";

export async function deleteLabel(labelID: string){

    try{

        const { error } = await supabase.auth.getSession();

        if(labelID == null || error) throw new Error();

        const client = new PrismaClient();

        await client.label.delete({
            where: { id: labelID}
        });


    }catch(err){

        console.log("There was an error deleting the label");

    }



}