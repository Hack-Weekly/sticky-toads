import { supabase } from "server/supabase";
import {PrismaClient} from "@prisma/client";

//tried my damn best to figure prisma, but nothing worked
//so I made the queries using supabase c:
//oh also if this doesn't work, we'll need triggers
//cause other wise it won't be possible to insert the data into user_project

//also the body.name is something I completely made up cause I am not sure how to know
//how the data is sent in the body(or atleast how to know how it is named)

export default defineEventHandler(async (event) => {
    
    const body = await readBody(event)
    const projectName = body.name;
    

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
  })