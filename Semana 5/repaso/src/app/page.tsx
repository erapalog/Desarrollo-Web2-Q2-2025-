import Image from "next/image";
import ComponenteHijo from "./componentes/ComponenteHijo";
import ComponenteHijo3 from "./componentes/ComponenteHijo3";
import ProviderPersona from "./Provider/ProviderPersona";
import Consumidor1 from "./ComponentesConsumidores/Consumidor1";
import Consumidor2 from "./ComponentesConsumidores/Consumidor2";
import Consumidor3 from "./ComponentesConsumidores/Consumidor3";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h3>Uso de props</h3>
      

       <p>Componente Hijo 1</p>
       <ComponenteHijo nombre="ANa" apellido="Garcia"></ComponenteHijo>

       <p>Componente Hijo 2</p>
      <ComponenteHijo nombre="Juan" ></ComponenteHijo>

      <p>Componente Hijo 3</p>
      <ComponenteHijo3 nombre="Juan" apellido="Juarez" ></ComponenteHijo3>


      <ProviderPersona>

        <p>Consumidor 1</p>
          <Consumidor1></Consumidor1>

            <p>Consumidor 2</p>
          <Consumidor2></Consumidor2>

            <p>Consumidor 2</p>
          <Consumidor3></Consumidor3>
      </ProviderPersona>

      </main>
    </div>
  );
}
