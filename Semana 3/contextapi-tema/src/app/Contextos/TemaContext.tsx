'use client'

import { createContext } from "react"

export const TemaContext = createContext({
    tema:'ligth',
    cambiarTema: ()=>{}
})