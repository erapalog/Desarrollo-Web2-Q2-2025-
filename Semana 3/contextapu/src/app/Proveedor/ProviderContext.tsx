'use client'
import React, { ReactNode, useContext, useState } from 'react'
import { ContexContador } from '../Context/ContextContador'
import { ViewReact } from '../modelos/ViewReact'



export default function ProviderContext(props: ViewReact) {

  const [contador, setContador]= useState(0)

  function sumarContador (){
    setContador(contador+1)
  }

  function restarContador (){
    setContador(contador-1)
  }

  return (
    <>
        <ContexContador.Provider value={{contador, sumarContador, restarContador}}>
            {props.children}
        </ContexContador.Provider>
    </>
  )
}

export const useContador = () =>{
    return useContext(ContexContador)
}
