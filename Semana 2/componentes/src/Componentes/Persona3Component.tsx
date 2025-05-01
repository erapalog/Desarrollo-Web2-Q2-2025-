import React from 'react'
import { Persona } from '../Modelos/Persona'

export default function Persona3Component({ nombre, apellido }: Persona) {
    return (
        <div>
            <h5>Nombre: {nombre}
                Apellido: {apellido}
            </h5>
        </div>
    )
}
