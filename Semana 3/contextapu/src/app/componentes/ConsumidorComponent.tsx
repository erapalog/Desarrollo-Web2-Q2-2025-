'use client'
import React from 'react'
import { useContador } from '../Proveedor/ProviderContext'

export default function ConsumidorComponent() {

  const {contador,sumarContador, restarContador } = useContador()

  return (
    <div>
        <h3>Valor del nuevo contador {contador}</h3>
        <button onClick={sumarContador} style={{'background':'red'}}> Sumar Contador</button>
        <button onClick={restarContador} style={{'background':'yellow'}}> Restar Contador</button>
    </div>
  )
}
