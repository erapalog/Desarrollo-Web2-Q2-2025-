'use client'
import React, { useState } from 'react'
import { Persona } from '../Modelos/Persona'

export default function ComponenteHijo3(props:Persona) {

   const [nombre, setNombre]=useState('Pedro')
  return (
    <div>
        <p>Nombre: {nombre}</p>
        <p>Apelldio {props.apellido}</p>
    </div>
  )
}
