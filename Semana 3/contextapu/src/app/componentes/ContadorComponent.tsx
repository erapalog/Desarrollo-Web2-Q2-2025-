'use client'
import React, { useState } from 'react'
import { Contador } from '../modelos/Contador'

export default function ContadorComponent(props:Contador) {

  const [contador, setContador] =useState(props.contador);

  function sumarContador(){
    setContador(contador+1)
  }

  function restaContador(){
    setContador(contador-1)
  }

  return (
    <div>
        Valor del contador {contador}

        <button onClick={sumarContador} type={'button'}> Sumar Contador</button> <br />
        <button onClick={restaContador} type={'button'}> Restar Contador</button> <br />
    </div>
  )
}
