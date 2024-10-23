'use server'

export async function GetMannequinTimePlaceholder() {
  await new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 3000)
  })

  return 'success mannequin time placeholder'
}
