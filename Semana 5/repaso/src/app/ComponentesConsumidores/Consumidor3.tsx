'use client'
import React from 'react'
import { usePersona } from '../Provider/ProviderPersona'
import { Persona } from '../Modelos/Persona';

export default function Consumidor3() {

    const {persona, valorPersona} = usePersona();

    function callPersona(){

        let persona:Persona={
            nombre:'Juan',
            apellido:'Funez'
        }

        valorPersona(persona)
    }
  
    return (
    <div>
        Nombre : {persona.nombre}
        Apellido : {persona.apellido}

        <button onClick={callPersona}>Cambiar nombre y apellido global</button>


    </div>
  )
}
