'use client'
import React from 'react'
import { usecontextTema } from '../../provider/ProviderTema';
import { Line } from 'react-chartjs-2';
import Link from 'next/link';

export default function page() {
  const { temas, marcarTema } = usecontextTema();


  return (
    <>


      <div className='container'>
        <h3 className='text-center'>Lista de Temas</h3>
        <table className='table table-bordear'>
          <thead>
            <tr>
              <th>Id</th>
              <th>Titulo</th>
              <th>Marcar</th>
            </tr>
          </thead>
          <tbody>


            {

              temas.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td> {item.titulo}</td>
                  <td> <button type="button" onClick={() => marcarTema(item, 1)} className="btn btn-info">
                    Marcar Interesantes
                  </button></td>

                </tr>
              ))}

          </tbody>
        </table>
        <Link href="/temasinteresantes" className="btn btn-warning text-center">ir a temas interesante</Link>

      </div>




    </>
  )
}
