'use client'
import React, { useContext, useState } from 'react'
import { PlantillaReact } from '../Modelos/PlantillaReact'
import { contextTema } from '../context/ContextTema'
import { Temas } from '../Modelos/Temas'

export default function ProviderTema({children}:PlantillaReact) {

  const [temas, setTemas]= useState<Temas[]>([
    {
        id:1,
        titulo: "Fultbool",
        interesante:false
    },
    {
        id:2,
        titulo: "Clasicos",
        interesante:false
    }
  ])

  const [temasInteresantes, setTemasInteresantes]=useState<Temas[]>([])

  function marcarTema(tema:Temas,opcion:number){

    //1 para agregar
    //0 para eliminar

    if(opcion==1){
      tema.interesante=true;
      setTemasInteresantes([...temasInteresantes,tema]);
      alert('Agregado exitosamente')
    }
    else{
       tema.interesante=false;
      const nuevosTemas = temasInteresantes.filter(t => t.id !== tema.id);
        setTemasInteresantes(nuevosTemas);

    }
         

  }
  return (
    <contextTema.Provider value={{temas,temasInteresantes,marcarTema}}>
        {children}
    </contextTema.Provider>
  )
}

export function usecontextTema(){
    return useContext(contextTema)
}