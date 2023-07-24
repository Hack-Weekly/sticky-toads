import { PrismaClient } from "@prisma/client";
import { supabase } from "supabase";

const client = new PrismaClient();

export async function createLabel(Title: string, Color: string){

    try{

        const { error } = await supabase.auth.getSession();

        if(Title == null || Color == null || error) throw new Error();

        await client.label.create({

            data:{
                title: Title,
                color: Color
            }
        })

    }catch(err){

        console.log("There was an error creating the label");

    }

}

export async function updateLabelName(labelID: string, newTitle: string){

    try{

        const { error } = await supabase.auth.getSession();

        if(labelID == null || newTitle == null || error) throw new Error();

        await client.label.update({
            where: { id: labelID},
            data: { title: newTitle }
        });


    }catch(err){

        console.log("There was an error updating the name of the label");

    }

}

export async function updateLabelColor(labelID: string, newColor: string){

    try{

        const { error } = await supabase.auth.getSession();

        if(labelID == null || newColor == null || error) throw new Error();

        await client.label.update({
            where: { id: labelID},
            data: { color: newColor }
        });


    }catch(err){

        console.log("There was an error updating the color of the label");

    }

}

export async function deleteLabel(labelID: string){

    try{

        const { error } = await supabase.auth.getSession();

        if(labelID == null || error) throw new Error();

        await client.label.delete({
            where: { id: labelID}
        });

    }catch(err){

        console.log("There was an error deleting the label");

    }

}