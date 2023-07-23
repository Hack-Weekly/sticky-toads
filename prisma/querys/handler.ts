export async function queryHandler (message: string, func: any) {
  const error = new Error(message)
  try {
    func
  } catch (e) {
    console.log(`Query Handler Error: ${e}`)
    return { error }
  }
  return { error: null }
}
