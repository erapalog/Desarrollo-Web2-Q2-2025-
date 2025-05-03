import React, { useEffect, useState } from 'react'

export default function ContadorPalabras() {

 const [text, setTexto] =useState<string | null>(null);
 const [contadorLetras, setContadorLetras] = useState <number> (0)

  

 //detectando el cambio en un estado
 //
 useEffect(()=>{

    let contador: number = text?.length;
    setContadorLetras(contador);

 },[text])

 function manejarTexto(e: any){
    //kkkkkkkkkkkkkkkkk
    setTexto(e.target.value)
 }

  return (
    <div>
        <textarea name="" id="" rows={15} cols={30} onChange={manejarTexto}>

        </textarea>


        <h2>La cantidad de letras es : {contadorLetras}</h2>

    </div>
  )
}
