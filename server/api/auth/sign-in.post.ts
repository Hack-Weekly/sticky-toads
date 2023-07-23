import { supabase } from "../../supabase";


export default defineEventHandler(async (event) => {
  const { res, req } = event.node
  const body = await readBody(event)
  const email = body.email
  const password = body.password

  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })
    if (error) throw error
    console.log(`User ${data.user.id} Signed In!`)
    await sendRedirect(event, '/client/mainContent', 301)
  } catch (err) {
      return res.end('Error On Sign In!')
  }
})
