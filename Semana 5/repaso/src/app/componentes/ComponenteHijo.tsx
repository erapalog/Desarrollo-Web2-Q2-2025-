'use client'
import React from 'react'
import { Persona } from '../Modelos/Persona'

export default function ComponenteHijo(props: Persona) {
  return (
    <div>
        Nombre: {props.nombre}
        Apellido: {props.apellido}
    </div>
  )
}
