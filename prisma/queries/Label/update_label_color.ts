import { PrismaClient } from "@prisma/client";
import { supabase } from "supabase";

export async function updateLabelColor(labelID: string, newColor: string){

    try{

        const { error } = await supabase.auth.getSession();

        if(labelID == null || newColor == null || error) throw new Error();

        const client = new PrismaClient();

        await client.label.update({
            where: { id: labelID},
            data: { color: newColor }
        });


    }catch(err){

        console.log("There was an error updating the color of the label");

    }



}