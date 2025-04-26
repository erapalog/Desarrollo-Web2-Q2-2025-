import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let saludo ='Hola'
 
  alert(saludo)
  function sumaNumeros(a,b){
    saludo =7
    
   // console.log(a+b)
    alert( parseInt(a) +parseInt(b) + parseInt(saludo))
   return a+b
  }
  return (
    <>
      <div>
       <h1>Primera aplicacion en React</h1>
       <h2>La suma de los numeros es {sumaNumeros(2,'hola')}</h2>
      </div>
    
  
    </>
  )
}

export default App
