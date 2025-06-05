const express = require('express')
const sequelize = require('./conexion/database')

const Empleado = require('./Modelo/Empleado')

const app = express()

app.use(express.json())

var puerto = 5000;

app.get('/suma-salario-departamento', async (req, resp) => {

    try {

        //select SUM(Salary) as 'Salario Total' ,department_id from employees group by department_id;

        const resultado = await Empleado.findAll({
            attributes: [
                'DEPARTMENT_ID',
                [sequelize.fn('SUM', sequelize.col('SALARY')), 'Salario_total']
            ],
            group: ['DEPARTMENT_ID']
        });

        if (resultado.length == 0) {
            resp.status(400).send({ "mensaje": 'No existen registro' })
        }
        else {
            resp.status(200).send(resultado)
        }


    } catch (error) {
        resp.status(500).send({ error: 'Ocurrio un error' + error })
    }
})

app.get('/cantidad-empleado-puesto', async (req, resp) => {

    try {

        //select COUNT(*) ,department_id,job_id from employees group by department_id,job_id;

        const resultado = await Empleado.findAll({
            attributes: [
                'DEPARTMENT_ID',
                'JOB_ID',
                [sequelize.fn('COUNT', sequelize.col('*')), 'total_empleados']
            ],
            group: ['DEPARTMENT_ID','JOB_ID']
        });

        if (resultado.length == 0) {
            resp.status(400).send({ "mensaje": 'No existen registro' })
        }
        else {
            resp.status(200).send(resultado)
        }


    } catch (error) {
        resp.status(500).send({ error: 'Ocurrio un error' + error })
    }
})

app.listen(puerto, () => {
    console.log('Aplicacion ejecutando en el puertp' + puerto)
})