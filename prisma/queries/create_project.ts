import { supabase } from "server/supabase";

//sorry I give up on Prisma 

export async function  createProject(projectName: string){

    try{
        const {error: projectErr} = await supabase
            .from('project')
            .insert({name: projectName});
        
        const { data, error: selectErr } = await supabase
            .from('project')
            .select('id')
            .eq('name', projectName);
        
        const {error: userProjErr} = await supabase
            .from('user_project')
            .insert({user_id: supabase.auth.getUser(), project_id: data})
        
        if(userProjErr || projectErr || selectErr) throw userProjErr;
    }catch(error){

        console.log("There was an error making the project");

    }

}
    
    
  