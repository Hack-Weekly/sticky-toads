import { PrismaClient } from "@prisma/client";
import { supabase } from "supabase";

const client = new PrismaClient();




export async function createCard(listID: string, Title: string) {
    
    const { error } = await supabase.auth.getSession();

    try{

        if(listID == null || error) throw new Error();

        await client.card.create({

            //not sure if assigning an empty string to the card_label_id works properly
            data:{

                list_id: listID,
                card_label_id: ""
                
                
            }

        });

    }catch(err){

        console.log("There was an error creating the card");

    }
    
}

export async function deleteCard(cardID: string){

    try{

        const { error } = await supabase.auth.getSession();
        if(cardID == null || error) throw new Error();

        await client.card.delete({

            where:{ id: cardID }

        });

    }catch(err){

        console.log("There was an error deleting the card");

    }

}

export async function attachLabel(cardID: string, labelID: string){

    try{
        const { error } = await supabase.auth.getSession();

        if(labelID == null || cardID == null || error) throw new Error();

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

export async function deleteLabel(cardLabelID: string){

    try{

        const { error } = await supabase.auth.getSession();

        if(cardLabelID == null || error) throw new Error();

        await client.card_Label.delete({
            
            where: { id: cardLabelID }

        });


    }catch(err){

        console.log("There was an error updating the name of the label");

    }

}