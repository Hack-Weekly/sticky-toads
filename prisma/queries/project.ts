import { PrismaClient } from "@prisma/client";
import { supabase } from "supabase";


const client = new PrismaClient();

export async function  createProject(projectName: string){

    try{

        const {data, error} = await supabase.auth.getSession();

        if(projectName == null || error) throw new Error();

        const createdProject = await client.project.create({
            data:{

                name: projectName

            }
        });
    
        await client.user_Project.create({

            data:{
                // @ts-ignore
                user_id: data.session.user.id.toString(), 
                project_id: createdProject.id,
                user_role: "admin"
            
            }

        });

    }catch(err){

        console.log("there was an error creating the project")

    }

}

export async function updateProjectName(ProjID: string, newName: string){

    try{

        const {error} = await supabase.auth.getSession();

        if(newName == null || ProjID == null || error) throw new Error();

        await client.project.update({

            where: { id: ProjID },
            data: { name: newName }
        
        });

    }catch(error){

        console.log("There was an error doing the update");

    }

}
    
export async function addColab(userID: string, projectID: string, role: string){

    try{

        const {error} = await supabase.auth.getSession();

        if(userID == null || projectID == null || error) throw new Error();

        await client.user_Project.create({
            data: {
                user_id: userID,
                project_id: projectID,
                user_role: role
            }
        });

    }catch(error){

        console.log("There was an error adding the user to the project");

    }

}

export async function changeColabRole(colabProjectID: string, role: string){

    try{

        const {error} = await supabase.auth.getSession();

        if(colabProjectID == null || role == null || error) throw new Error();

        await client.user_Project.update({
            
            where: { id: colabProjectID },
            data: { user_role: role }
        });

    }catch(error){

        console.log("There was an error adding the user to the project");

    }

}

export async function removeColab(colabProjectID: string){

    try{

        const {error} = await supabase.auth.getSession();

        if(colabProjectID == null || error) throw new Error();

        await client.user_Project.delete({
            
            where: { id: colabProjectID }

        });

    }catch(error){

        console.log("There was an error adding the user to the project");

    }

}

export async function deleteProject(UserProjID: string){

    try{

        const {error} = await supabase.auth.getSession();
        
        if(UserProjID == null || error) throw new Error();

        await client.user_Project.delete({

            where: { id: UserProjID }

        });

    }catch(error){

        console.log("There was an error deleting the porject");

    }

}