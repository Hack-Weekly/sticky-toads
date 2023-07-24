import { PrismaClient } from "@prisma/client";
import { supabase } from "server/supabase";

export async function deleteCard(cardID: string){

    try{

        const { error } = await supabase.auth.getSession();
        if(cardID == null || error) throw new Error();

        const client = new PrismaClient();

        await client.card.delete({

            where:{ id: cardID }

        });


    }catch(err){

        console.log("There was an error deleting the card");

    }

}