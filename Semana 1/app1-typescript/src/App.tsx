
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  type operacion= 'multiplicar' | 'suma' | 'resta' ;


  function sumaNumeros(a : number,b:number,ope:operacion ){

    if(ope=='multiplicar')
      return a*b 
    else if (ope=='suma')
      return a+b
    else if(ope=='resta')
      return a-b
    
  }

  return (
    <>
      <h1>Primera aplicacion typescript</h1>
      <h2>Suma es : {sumaNumeros(2,2,'multiplicar')}</h2>
    </>
  )
}

export default App
