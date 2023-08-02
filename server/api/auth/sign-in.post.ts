import { supabase, isUserSession } from "../../../supabase";


export default defineEventHandler(async (event) => {
  const { res } = event.node
  const body = await readBody(event)
  const email = body.email
  const password = body.password
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })
    if (error) throw error
    // @ts-ignore
    const authToken = data.session.access_token
    return { auth_token: authToken }
  } catch (err) {
      console.log(err)
      return res.end('Error On Sign In!')
  }
})
