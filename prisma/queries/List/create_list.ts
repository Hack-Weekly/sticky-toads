import { PrismaClient } from "@prisma/client";
import { supabase } from "server/supabase";
export async function createList(ProjID: string, Title: string){

    const client = new PrismaClient();

    try{

        const {data, error} = await supabase.auth.getSession();
        if(ProjID == null || Title == null || error) throw Error;



        const newList = await client.list.create({
            data: {
                title: Title,
                project_id: ProjID
            }
        })

    }catch(err){

        console.log("There was an error creating the list");

    }

}