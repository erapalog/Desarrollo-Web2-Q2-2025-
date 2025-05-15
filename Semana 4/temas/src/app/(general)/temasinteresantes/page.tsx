'use client'
import React, { useContext } from 'react'
import { usecontextTema } from '../../provider/ProviderTema'
import Link from 'next/link';

export default function page() {
  const { temasInteresantes, marcarTema } = usecontextTema();

  return (
    <>

      <div className='container'>
        <h3 className='text-center'>Lista de Temas Interesantes</h3>
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

              temasInteresantes.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td> {item.titulo}</td>
                  <td> <button type="button" onClick={() => marcarTema(item, 0)} className="btn btn-danger">
                    Desmarcar como Interesantes
                  </button></td>

                </tr>
              ))}

          </tbody>
        </table>
        <Link href="/todostemas" className="btn btn-warning">Volver</Link>

      </div>




    </>
  );
}
