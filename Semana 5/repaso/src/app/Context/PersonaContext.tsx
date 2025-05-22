import { createContext } from "react";
import { Persona } from "../Modelos/Persona";


export const personaContext= createContext({
    persona: {} as Persona,
    valorPersona: (personas:Persona)=>{}
})