'use client'

import { useEffect, useState } from "react"

export default function GetColors() {
  const type = 'v1'
  
  useEffect(() => {
    async function Settle() {
      const data = await fetch('/api/colors')
      const res = await data.json()
      console.log(res)
      const root = document.querySelector(':root') as any

      root?.style.setProperty('--primaryColorBg', res.data[type].primaryColorBg)
      root?.style.setProperty('--primaryColorBgHover', res.data[type].primaryColorBgHover)
      root?.style.setProperty('--primaryColor', res.data[type].primaryColor)
      root?.style.setProperty('--primaryColorHover', res.data[type].primaryColorHover)
    }
    Settle()
  }, [])
  return ''
}
