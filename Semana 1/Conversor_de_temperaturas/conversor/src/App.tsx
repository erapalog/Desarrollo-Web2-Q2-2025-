
import './App.css'

function App() {
 
  const temperaturaGrados:number = 10;
  let conversiones : number[] = [];

  function celciusFahrenheit(grados:number){
      let resultado = (grados * (9/5) )+32

      conversiones.push(resultado)
  }

  const  celciusKelvin = (grados:number ) : void=>{
    let resultado = grados + 273.15
    conversiones.push(resultado)
  }

  const kelvinCelius  = function(grados: number): void {
    let resultado = grados - 273.15;
    conversiones.push(resultado);
  };

  celciusFahrenheit(temperaturaGrados);
  celciusKelvin(temperaturaGrados);
  kelvinCelius(temperaturaGrados);


  return (
    <>
    <div>
      <ul>
         {conversiones}
      </ul>
      <ul>
          {
            conversiones.map((item,index)=>(
              <li key={index}>{item} </li>
            ))
           
          }
          
      </ul>

       
    </div>
    </>
  )
}

export default App
