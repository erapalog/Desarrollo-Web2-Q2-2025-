import React from 'react'

export default function PersonaComponent(props:any) {
  return (
    <div>
        <h4>Nombre: {props.nombre}
            Apellido: {props.apellido}
            Telefono: {props.telefono}
        </h4>
    </div>
  )
}
