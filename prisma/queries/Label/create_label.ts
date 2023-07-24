import { PrismaClient } from "@prisma/client";
import { supabase } from "supabase";

export async function createLabel(Title: string, Color: string){

    try{

        const { error } = await supabase.auth.getSession();
        if(Title == null || Color == null || error) throw new Error();

        const client = new PrismaClient();

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