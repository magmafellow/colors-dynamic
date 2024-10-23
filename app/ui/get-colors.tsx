'use client'

import { useEffect, useState } from "react"

export default function GetColors() {
  useEffect(() => {
    async function Settle() {
      const data = await fetch('/api/colors')
      const res = await data.json()
      console.log(res)
      const root = document.querySelector(':root') as any

      root?.style.setProperty('--primaryColorBg', res.data.primaryColorBg)
      root?.style.setProperty('--primaryColorBgHover', res.data.primaryColorBgHover)
      root?.style.setProperty('--primaryColor', res.data.primaryColor)
      root?.style.setProperty('--primaryColorHover', res.data.primaryColorHover)
    }
    Settle()
  }, [])
  return ''
}
