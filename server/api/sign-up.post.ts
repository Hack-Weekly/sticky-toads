import { supabase } from "../supabase"

export default defineEventHandler(async (event) => {
  const { res } = event.node
  const body = await readBody(event)
  try {
    const email = body.email
    const password = body.password

    console.log(email, password)
    const { data, error } = await supabase.auth.signUp({
      email,
      password
    })

    if (error) throw error

    console.log(data)
  } catch (err) {
    console.log(err)
    res.end('Error Creating User!')
  }
})

