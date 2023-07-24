import { PrismaClient } from "@prisma/client";
import { supabase } from "server/supabase";

export async function attachLabel(cardID: string, labelID: string){

    try{

        const { error } = await supabase.auth.getSession();

        if(labelID == null || cardID == null || error) throw new Error();

        const client = new PrismaClient();

        await client.card_Label.create({
            data:{
                label_id: labelID,
                card_id: cardID
            }
        });


    }catch(err){

        console.log("There was an error updating the name of the label");

    }



}