'use client'
import React from 'react'
import { usePersona } from '../Provider/ProviderPersona'

export default function Consumidor1() {

  const {persona}=usePersona()
  return (
    <div>
        <p>Nombre Persona {persona.nombre}</p>
        <p>Apellido Persona {persona.apellido}</p>
    </div>
  )
}
