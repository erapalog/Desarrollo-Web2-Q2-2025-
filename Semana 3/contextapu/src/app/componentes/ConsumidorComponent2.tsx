'use client'
import React from 'react'
import { useContador } from '../Proveedor/ProviderContext'

export default function ConsumidorComponent2() {

  const {sumarContador} = useContador();
  
  return (
    <div>
        <h2>Segundo consumidor</h2>
        <button onClick={sumarContador} style={{"background":'green'}}> Sumar Contador</button>
    </div>
  )
}
