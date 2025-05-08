import Image from "next/image";
import ContadorComponent from "./componentes/ContadorComponent";
import ContadorComponent2 from "./componentes/ContadorComponent2";
import ProviderContext from "./Proveedor/ProviderContext";
import ConsumidorComponent from "./componentes/ConsumidorComponent";
import ConsumidorComponent2 from "./componentes/ConsumidorComponent2";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
       
        <div className="flex gap-4 items-center flex-col sm:flex-row">
         

         {/*<ContadorComponent contador={4}></ContadorComponent> <br />
         <ContadorComponent2 contador={3}></ContadorComponent2>*/}

         <ProviderContext>

            <ConsumidorComponent></ConsumidorComponent>
            <ConsumidorComponent2></ConsumidorComponent2>

         </ProviderContext>


        </div>
      </main>
   
    </div>
  );
}
