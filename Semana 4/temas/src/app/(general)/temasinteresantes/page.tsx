'use client'
import React, { useContext } from 'react'
import { usecontextTema } from '../../provider/ProviderTema'
import Link from 'next/link';

export default function page() {
  const { temasInteresantes } = usecontextTema();

  return (
    <>
      {temasInteresantes.map((item) => (
        <div key={item.id}>
          {item.titulo}
        </div>
      ))}

            <Link href="/todostemas" className="btn btn-warning">Volver</Link>

    </>
  );
}
