import express from "express";
import { Router } from "express";
import metodos from './metodos.js'
import * as url from 'url';

const app = express();
const PORT = 8080;

const server = app.listen(PORT, ()=> {
    console.log(`Server on port ${PORT}`);
});

//Para que interprete los jsons
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Archivos estaticos

/* const __filename = url.fileURLToPath(import.meta.url); */
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
app.use(express.static(__dirname + '/public'));

//Configura el manejo de errores
server.on('error', error=> {
    console.log(`Server error: ${error}`);
});

/* ROUTER */
const router = Router();
app.use('/api/productos', router);

router.get('/', metodos.getProducts);
router.get('/:id', metodos.getProduct);
router.post('/', metodos.createProduct);
router.put('/:id', metodos.updateProduct);
router.delete('/:id', metodos.deleteProduct);