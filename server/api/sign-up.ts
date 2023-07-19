import { supabase } from "../supabase"

export default defineEventHandler((event) => {
  console.log("hello world")
  console.log(supabase)
})

