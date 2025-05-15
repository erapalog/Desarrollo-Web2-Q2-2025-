'use client'
import React, { useContext, useEffect, useState } from 'react'
import { PlantillaReact } from '../Modelos/PlantillaReact'
import { contextCarrito } from '../Contexto/ContextCarrito'
import { Producto } from '../Modelos/Producto'

//children (renderizamos los componente /consumidores)
//dar funcionalidad a la definicion del contexto
//exportar contexto

export default function ProviderCarrito({children}:PlantillaReact) {

 const [producto, setProducto]= useState<Producto[]>([
    {
        idProducto:1,
        nombreProducto:'Arroz',
        precioProducto:10,
        isvProducto:10.5,
        imgProducto:''
    },
    {
        idProducto:2,
        nombreProducto:'papas',
        precioProducto:10,
        isvProducto:10.5,
        imgProducto:''
    },
    {
        idProducto:3,
        nombreProducto:'zanahorias',
        precioProducto:10,
        isvProducto:10.5,
        imgProducto:''
    },
    {
        idProducto:4,
        nombreProducto:'pescado',
        precioProducto:10,
        isvProducto:10.5,
        imgProducto:''
    }
 ]);
 const [productoCarrito, setProductoCarrito]= useState<Producto[]>([]);
 
 function agregarCarrito(producto:Producto){
        alert('prodcuto agregado al carrito')
        setProductoCarrito([...productoCarrito,producto])
 }

 useEffect(()=>{
        console.log(productoCarrito)
 },[productoCarrito])

  return (
    <contextCarrito.Provider value={{producto,productoCarrito,setProductoCarrito,agregarCarrito}}>
        {children}
    </contextCarrito.Provider>
   
  )
}


export function useContextCarrito(){
    //hook
    return useContext(contextCarrito)
}