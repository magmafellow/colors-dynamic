'use server'

import { unstable_noStore } from "next/cache"

export async function GetMannequinTimePlaceholder() {
  unstable_noStore()
  await new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 3000)
  })

  return 'success mannequin time placeholder'
}
