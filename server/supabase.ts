import { createClient } from "@supabase/supabase-js";
const config = useRuntimeConfig()
const url: any = config.public.SUPABASE_URL
const anon_key: any = config.public.SUPABASE_ANON_KEY


export const supabase = createClient(url, anon_key)
