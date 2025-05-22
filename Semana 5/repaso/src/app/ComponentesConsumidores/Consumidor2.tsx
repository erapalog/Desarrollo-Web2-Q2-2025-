'use client'
import React from 'react'
import { usePersona } from '../Provider/ProviderPersona'

export default function Consumidor2() {

  const {persona}=usePersona()
  return (
    <div>
        <p>Nombre: {persona.nombre}</p>
    </div>
  )
}
