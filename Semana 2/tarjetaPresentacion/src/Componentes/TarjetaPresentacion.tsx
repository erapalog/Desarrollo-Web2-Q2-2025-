import React from 'react';

import { ListaTarjeta } from '../Modelos/ListaTarjetas'
import NavBar from './NavBar';

export default function TarjetaPresentacion(props: ListaTarjeta) {
  
  return (
    <div className="container mt-3">

      <NavBar></NavBar>
      {
        props.tarjetas.map((tarjeta, index) => (
          <div key={index} className='card mb-3'>
            <div className='row'>
              <div className='col-md-4'>
                <img
                  src="https://st.depositphotos.com/1779253/5140/v/450/depositphotos_51405259-stock-illustration-male-avatar-profile-picture-use.jpg"
                  alt="avatar"
                  className="img-fluid rounded-start"
                />
              </div>
              <div className='col-md-8'>
                <div className="card-body">
                  <h5 className="card-title">{tarjeta.nombre}</h5>
                  <p className="card-text">{tarjeta.ocupacion}</p>
                  <p className="card-text"><small className="text-muted">{tarjeta.pais}</small></p>
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  );
}
