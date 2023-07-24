import { PrismaClient } from "@prisma/client";
import { supabase } from "supabase";

export async function deleteList(ListID: string){

    const client = new PrismaClient();

    try{

        const {error} = await supabase.auth.getSession();
        if(ListID == null || error) throw new Error();

        await client.list.delete({

            where: { id: ListID },

        })


    }catch(err){

        console.log("There is an error deleting the list")

    }

}