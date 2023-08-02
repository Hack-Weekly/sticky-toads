import { createClient } from "@supabase/supabase-js";
const config = useRuntimeConfig()
const url: any = config.SUPABASE_URL
//const anon_key: any = config.SUPABASE_ANON_KEY
const service_role_key: any = config.SERVICE_ROLE_KEY

export const supabase = createClient(url, service_role_key, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
    detectSessionInUrl: false
  }
})

async function returnUserSession() {
  const { data: { user } } = await supabase.auth.getUser()
  return { user }
}

export async function checkSession(event?: any) {
  const { user } = await returnUserSession()
  if (!user) {
    // dont know if its scuffed but with this we can run on the client and server
    if (process.server) {
      return { user: 'No User Was Found Try Again!' }
    }
  }
  return { user }
}

export async function isUserSession(method: any) {
  const { user } = await returnUserSession()

  if (user) {
    method()
    console.log('there is an active user session')
    return { user }
  }
  console.log('there was no active users')
}

export async function updateUserInfo(attributesObj: any) {
  const { data, error } = await supabase.auth.updateUser(attributesObj)
  if (error) throw error
  console.log(`Updated User ${data.user.id}`)
  const user = data.user

  return { user }
}

export async function updatePicture(fileName: string, picture: any, type: any) {
  console.log(fileName, picture)
  console.log(type)
  const { data, error } = await supabase.storage.from('profile').upload(`public/${fileName}`, picture, {
    cacheControl: '3600',
    upsert: true,
    contentType: type
  })
  await signPictureUrl(fileName)
  if (error) throw error
  console.log(`Uploaded ${fileName}`)
}

export async function signPictureUrl(fileName: string) {
  const oneYear = 60 * 60 * 24 * 365;

  const { data, error } = await supabase.storage.from('profile').createSignedUrl(`public/${fileName}`, oneYear)

  if (error) throw error
  console.log(`Signed Url ${data.signedUrl}`)
  return data
}

export async function getSignedUrl(userId: string) {
  let picture;
  const { data, error } = await supabase.storage.from("profile").list("public");

  if (error) {
      console.error("Error retrieving files:", error.message);
  } else {
      // `data` contains an array of file objects
      // You can use this array to find the file with the desired user ID and extension
      const file = data.find((file) => {
          const [name, ext] = file.name.split(".");
          return name === userId && ["png", "svg", "jpg", "gif"].includes(ext);
      });
      if (file) {
          // `file` contains the file object for the desired file
          // You can use `file.name` to get the name of the file
          const { data } = supabase.storage.from("profile").getPublicUrl(`public/${file.name}`);
          picture = data.publicUrl;
      } else {
          console.error("File not found");
      }
  }

  return picture
}
