import Api from "./Api.js";
const api = new Api();

const getProducts = async (req, res) => {
    const productos = await api.getAll()
    res.json(productos);
};

const getProduct = async (req, res) => {
    const productId = parseInt(req.params.id);
    const product = await api.getById(productId);
    res.json(product);
}

const createProduct = async (req, res) => {
    const data = req.body;
    const newProduct = await api.create(data.title, data.price, data.thumbnail);
    res.json(newProduct);
}

const updateProduct = async (req, res) => {
    const data = req.body;
    const update = await api.update(parseInt(req.params.id), data.title, parseInt(data.price), data.thumbnail);
    res.json(update);
}

const deleteProduct = async (req, res) => {
    const productId = parseInt(req.params.id);
    const productDeleted = await api.deleteById(productId);
    res.json({msg: "product deleted"})
}



export default {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}