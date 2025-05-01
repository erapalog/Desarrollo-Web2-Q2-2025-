
import './App.css'
import Persona2Component from './Componentes/Persona2Component';
import Persona3Component from './Componentes/Persona3Component';
import PersonaComponent from './Componentes/PersonaComponent';
import { Persona } from './Modelos/Persona';



function App() {


  const detallePersona : Persona ={
    nombre: 'Ana',
    apellido:'Flores',
    telefono:'08980809'
  };


  let listaPersonas : Persona[] =[];

  listaPersonas.push(detallePersona);

  listaPersonas.push({
    nombre:'Juan',
    apellido:'Valle'  
  },
  {
    nombre:'Juan',
    apellido:'Valle'  
  })

  for(let x of listaPersonas) 
    console.log(x)


  return (
    <>
      

      <PersonaComponent nombre={detallePersona.nombre} apellido={detallePersona.apellido} telefono={detallePersona.telefono}></PersonaComponent>
      <PersonaComponent nombre={listaPersonas[1].nombre} apellido={listaPersonas[1].apellido} telefono={listaPersonas[1].telefono}></PersonaComponent>

      <Persona2Component nombre={detallePersona.nombre} apellido={detallePersona.apellido} telefono={detallePersona.telefono}></Persona2Component>

      <Persona3Component  nombre={detallePersona.nombre} apellido={detallePersona.apellido}></Persona3Component>
    
      {
        listaPersonas.map((item,index) =>(

          <Persona2Component  key={index} nombre={item.nombre}  apellido={item.apellido} telefono={item.telefono} ></Persona2Component>
        ))
      
      
      }
      

    </>
  )
}

export default App
