
class Api {
    constructor(){
        this.products = []    
    }

    async create(title, price, thumbnail){
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
            console.log(`product added with id: ${productId}`);
            return newProduct;
        } catch(err) {
            return err;
        }
        
    }

    async getById(productId){
        try {
            const productSearched = this.products.find(product => product.productId === productId);
            if(productSearched) {
                return productSearched;
            } else {
                return { error : 'producto no encontrado' };
            }
        } catch (error) {
            return error;
        } 
    }

    async getAll(){
        try {
            return this.products;
        } catch (error) {
            return error;
        } 
    }

    async deleteById(productId){
        try {
            const productsSelected = this.products.filter(product => product.productId !== productId);
            if(productsSelected) {
                this.products = productsSelected;
            } else {
                return { error : 'producto no encontrado' };
            }
        } catch (error) {
            return error;
        } 
    }

    async update(productId, title, price, thumbnail){

        try {
            const productSearched = this.products.find(product => product.productId === productId);
            const index = this.products.indexOf(productSearched);
            if(productSearched) {
                const updatedProduct = {
                    title,
                    price,
                    thumbnail,
                    productId
                }
                this.products.splice(index, 1, updatedProduct)
                return this.products;
            } else {
                return { error : 'producto no encontrado' };
            }
        } catch (error) {
            return error;
        }         
    }
}

export default Api;