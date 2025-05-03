
import './App.css'
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import TarjetaPresentacion from './Componentes/TarjetaPresentacion'
import { Tarjeta } from './Modelos/Tarjeta'
import NavBar from './Componentes/NavBar';

function App() {

  let generacionTarjeta: Tarjeta[]=[{
    nombre:"Ana",
    ocupacion:"Desarrollador",
    pais:'HN'
  },
  {
    nombre:"Pedro",
    ocupacion:"Desarrollador",
    pais:'CR'
  },
  {
    nombre:"Juan",
    ocupacion:"Desarrollador",
    pais:'ES'
  }]

  return (
    <>
     <h1>Tarjetas de presentacion</h1>

     <NavBar></NavBar>
     <TarjetaPresentacion tarjetas={generacionTarjeta}></TarjetaPresentacion>
    </>
  )
}

export default App
