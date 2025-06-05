import axios from 'axios';
import axion from 'axios'

const URL_API="http://localhost:5000";

export const sumaSalarioDepartamento= async ()=>{

    const response= await axios.get(`${URL_API}/suma-salario-departamento`);

    return response.data;
}


export const conteoPuestoDeptos= async ()=>{

    const response= await axios.get(`${URL_API}/cantidad-empleado-puesto`);

    return response.data;
}
