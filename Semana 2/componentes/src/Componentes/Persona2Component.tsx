import React from 'react'
import { Persona } from '../Modelos/Persona'

export default function Persona2Component(props: Persona) {
  return (
    <div>
          <h5>Nombre: {props.nombre}
            Apellido: {props.apellido}
            Telefono: {props.telefono}
        </h5>
    </div>
  )
}
