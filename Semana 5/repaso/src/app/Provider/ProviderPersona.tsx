'use client'
import React, { useContext, useState } from 'react'
import { Plantilla } from '../Modelos/Plantilla'
import { Persona } from '../Modelos/Persona'
import { personaContext } from "../Context/PersonaContext"

export default function ProviderPersona({children}:Plantilla) {

   const [persona, setPersona]=useState<Persona>({
      nombre:'Ana',
      apellido:'Garcia'
   })


   function valorPersona(persona:Persona){
    setPersona({
        nombre:persona.nombre,
        apellido:persona.apellido
    })
   }
  return (
    <div>

        <personaContext.Provider value={{persona,valorPersona}}>
                 {children}
        </personaContext.Provider>

       
    </div>
  )
}

export function usePersona(){
    return useContext(personaContext)
}