import { PrismaClient } from "@prisma/client";
import { supabase } from "supabase";

export async function deleteLabel(cardLabelID: string){

    try{

        const { error } = await supabase.auth.getSession();

        if(cardLabelID == null || error) throw new Error();

        const client = new PrismaClient();

        await client.card_Label.delete({
            
            where: { id: cardLabelID }

        });


    }catch(err){

        console.log("There was an error updating the name of the label");

    }



}