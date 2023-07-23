import { PrismaClient } from "@prisma/client";
import { supabase } from "server/supabase";

export async function deleteList(ListID: string){

    const client = new PrismaClient();

    try{

        const {data, error} = await supabase.auth.getSession();
        if(ListID == null || error) throw Error;

        await client.list.delete({

            where: { id: ListID },

        })


    }catch(err){

        console.log("There is an error deleting the list")

    }

}