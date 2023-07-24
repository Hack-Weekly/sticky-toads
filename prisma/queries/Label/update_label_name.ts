import { PrismaClient } from "@prisma/client";
import { supabase } from "supabase";

export async function updateLabelName(labelID: string, newTitle: string){

    try{

        const { error } = await supabase.auth.getSession();

        if(labelID == null || newTitle == null || error) throw new Error();

        const client = new PrismaClient();

        await client.label.update({
            where: { id: labelID},
            data: { title: newTitle }
        });


    }catch(err){

        console.log("There was an error updating the name of the label");

    }



}