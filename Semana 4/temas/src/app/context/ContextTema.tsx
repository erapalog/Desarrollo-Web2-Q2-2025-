
import { createContext } from "react";
import { Temas } from "../Modelos/Temas";

export const contextTema = createContext({
    temas: [] as Temas[],
    temasInteresantes: [] as Temas[],
    marcarTema: (tema:Temas, opcion:number) =>{},
})