import { PrismaClient } from "@prisma/client";
import { supabase } from "server/supabase";

export async function createCard(listID: string, Title: string) {
    const client = new PrismaClient()
    const { error } = await supabase.auth.getSession();

    try{

        if(listID == null || error) throw new Error();

        await client.card.create({

            //not sure if assigning an empty string to the card_label_id works properly
            data:{

                list_id: listID,
                card_label_id: ""
                
                
            }

        })


    }catch(err){

        console.log("There was an error creating the card");

    }
    
}