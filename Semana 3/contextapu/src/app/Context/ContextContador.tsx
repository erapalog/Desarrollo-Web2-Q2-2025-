import { createContext } from "react";

export const  ContexContador = createContext({
    contador: 0,
    sumarContador: () =>{},
    restarContador: () => {}
})