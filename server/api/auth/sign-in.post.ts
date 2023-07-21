import { supabase, returnUserSession } from "../../supabase";


export default defineEventHandler(async (event) => {
  const { res } = event.node
  const body = await readBody(event)
  const email = body.email
  const password = body.password
  const { user } = await returnUserSession()
  if (user) return await sendRedirect(event, '/client/mainContent', 301)
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })
    // @ts-ignore
    console.log(`User ${data.user.id} Signed In!`)
    if (error) throw error
    await sendRedirect(event, '/', 301)
  } catch (err) {
      return res.end('Error On Sign In!')
  }
})
