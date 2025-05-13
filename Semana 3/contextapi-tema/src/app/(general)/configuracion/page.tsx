'use client'
import NavBar from '@/app/Components/NavBar'
import { useTema } from '@/app/Provider/TemaProvider'
import React from 'react'

export default function page() {

  const {tema, cambiarTema}= useTema()
  return (
    <div>
        <NavBar ></NavBar>
        <button className='btn btn-success' onClick={cambiarTema}>Cambiar tema de aplicacion</button>
    </div>
  )
}
