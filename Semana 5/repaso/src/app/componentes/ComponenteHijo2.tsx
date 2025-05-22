import React from 'react'
import { Persona } from '../Modelos/Persona'

export default function ComponenteHijo2(props:Persona) {
  return (
    <div>
        Nombre {props.nombre}
    </div>
  )
}
