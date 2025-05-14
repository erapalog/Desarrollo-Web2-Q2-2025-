'use client'
import React from 'react'
import { usecontextTema } from '../../provider/ProviderTema';
import { Line } from 'react-chartjs-2';
import Link from 'next/link';

export default function page() {
      const { temas, marcarTema } = usecontextTema();


  return (
      <>
      {temas.map((item) => (
        <div key={item.id}>
          {item.titulo}
          <button type="button" onClick={() => marcarTema(item)}  className="btn btn-info">
            Marcar Interesantes
          </button>
        </div>
      ))}

      <Link href="/temasinteresantes" className="btn btn-warning">ir a temas interesante</Link>

    </>
  )
}
