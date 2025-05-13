'use client'
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import { RenderComsumer } from "./Modelos/RenderConsumer";
import TemaProvider, { useTema } from "./Provider/TemaProvider";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <TemaProvider>
        <MainLayout>
          {children}
        </MainLayout>
      </TemaProvider>
    
  );
}


function MainLayout(props:RenderComsumer ){

  const {tema} = useTema()

  return (
    <main>
      <html lang="en">
      <body
       className={tema}
      >

        {props.children}
      </body>
    </html>
    </main>
  )
}