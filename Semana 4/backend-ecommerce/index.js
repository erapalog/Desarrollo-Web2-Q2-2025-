const express = require('express')
const { json } = require('sequelize')
const Producto = require('./Modelos/Producto')


const app= express()


app.use(express.json())

//request, response
//get, post,put,deletem patch


app.get('/producto',async(req,resp)=>{

    try {

        //select *from productos
        const producto= await Producto.findAll();
        resp.status(200).json(producto)
        
    } catch (error) {
         resp.status(500).json({'mensahe':'ocurrio un error'})
    }

    
})


app.listen(5000,()=>{
    console.log('APlicacino corriendo en puerto 5000')
})