import { PrismaClient } from "@prisma/client";




export async function  createProject(projectName: string){

    const client = new PrismaClient();
    


    const createdProject = await client.project.create({
        data:{

            name: projectName

        }
    })
    
    let rowCount = await client.project.count({});
    
    await client.user_Project.create({

        data:{

            user_id: "123", //placeholder
            project_id: createdProject.id,
            user_role: "admin"
            
        }

    })

}


    
  