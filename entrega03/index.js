import Contenedor from './Contenedor.js';
const contenedor = new Contenedor();

import express from 'express';
/* const { default: Contenedor } = require('./Contenedor.js'); */

const app = express(); //Inicializa express
const PORT = 8080; //Define el puerto a usar

//Inicializa el servidor
const server = app.listen(PORT, ()=> {
    console.log(`Server on port ${PORT}`);
});

//Configura el manejo de errores
server.on('error', error=> {
    console.log(`Server error: ${error}`);
});

app.get('/productos', async (req, res) => {
    const productos = await contenedor.getAll()
    res.send(productos);
});

const getRandom = async () => {
    const productos = await contenedor.getAll();
    return Math.floor(Math.random() * (productos.length - 1) + 1); 
}

app.get('/productoRandom', async (req, res) => {
    const random = await getRandom();
    const producto = await contenedor.getById(random);
    res.send(producto);
});

