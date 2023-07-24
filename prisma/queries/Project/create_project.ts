import { PrismaClient } from "@prisma/client";
import { supabase } from "server/supabase";




export async function  createProject(projectName: string){

    const client = new PrismaClient();
    
    try{

        const {data, error} = await supabase.auth.getSession();
        if(projectName == null || error) throw new Error();

        const createdProject = await client.project.create({
            data:{

                name: projectName

            }
        })
    
        await client.user_Project.create({

            data:{
                // @ts-ignore
                user_id: data.session.user.id.toString(), 
                project_id: createdProject.id,
                user_role: "admin"
            
            }

        })

    }catch(err){

        console.log("there was an error creating the project")

    }

}


    
  