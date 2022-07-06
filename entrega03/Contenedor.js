import fs from 'fs';


class Contenedor {
    constructor(){
        this.products = []    
    }

    async save(title, price, thumbnail){


        try{
            let productId = 0;
            if(this.products.length === 0){
                productId = 1;
            } else {
                productId = this.products.length + 1;
            }
            const newProduct = {
                title,
                price,
                thumbnail,
                productId
            }
            this.products.push(newProduct);
            await fs.promises.writeFile('productos.txt', JSON.stringify(this.products));
            console.log(productId);
        } catch(err) {
            console.log(err);
        }
        
    }

    async getById(productId){
        try {
            const allProducts = await fs.promises.readFile('productos.txt', 'utf-8');
            this.products = JSON.parse(allProducts);
            const productSearched = this.products.find(product => product.productId === productId);
            if(productSearched) {
                return productSearched;
            } else {
                console.log(null);
            }

        } catch (error) {
            console.log(error);
        } 
    }

    async getAll(){
        try {
            const allProducts = await fs.promises.readFile('productos.txt', 'utf-8');
            this.products = JSON.parse(allProducts);
            return this.products;
        } catch (error) {
            console.log(error);
        } 
    }

    async deleteById(productId){
        try {
            const allProductos = await fs.promises.readFile('productos.txt', 'utf-8');
            this.products = JSON.parse(allProductos);
            const productsSelected = this.products.filter(product => product.productId !== productId);
            if(productsSelected) {
                this.products = productsSelected;
                await fs.promises.writeFile('productos.txt', JSON.stringify(this.products));
                console.log('Producto eliminado correctamente');
            } else {
                console.log('El producto seleccionado no existe');
            }

        } catch (error) {
            console.log(error);
        } 
    }

    async deleteAll(){
        try {
            this.products = [];
            await fs.promises.writeFile('productos.txt', JSON.stringify(this.products));
            console.log('Todos los productos han sido eliminados')
        } catch (error) {
            console.log(error);
        } 
    }
}

const newProduct = new Contenedor();


/* newProduct.save("remera", 13, "123456");
newProduct.save("remera2", 15, "12344563");
newProduct.save("remera3", 15, "12344563");
newProduct.save("remera4", 15, "12344563");
newProduct.save("remera8", 15, "12344563"); */


/* newProduct.getAll(); */

/* newProduct.getById(1); */

/* newProduct.deleteById(2); */

/* newProduct.deleteAll(); */

export default Contenedor;