'use client'
import React, { useContext, useState } from 'react'
import { RenderComsumer } from '../Modelos/RenderConsumer'
import { TemaContext } from '../Contextos/TemaContext';



export default function TemaProvider({children}: RenderComsumer) {

  const [tema, setTema] = useState<string>('light');

  function cambiarTema(){
    setTema((temaPrevio)=> (temaPrevio =='light'? 'dark': 'light'))
  } 
  return (

    <TemaContext.Provider value={{tema,cambiarTema}}>
            {children}
    </TemaContext.Provider>
  )
}

export const useTema= ()=>{
    return useContext(TemaContext)
}