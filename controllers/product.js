const ProductModel = require('../models/Product');

const getProducts = (req, res) => {
    ProductModel.find()
    .then(data => {
        res.send(data);
    })
}

const getProduct = (req, res) => {
    ProductModel.findOne()({_id: req.params.id}
        .then(data => { res.send(data);
        }))
}

const createProduct = (req, res) => {
        const newProduct = new ProductModel({
                itemType: req.body.itemType,
                quantity: req.body.quantity,
                price: req.body.price,
            });
            newProduct.save().then(() => {
                ProductModel.find().then(data => res.send(data))
            })
        }

const updateProduct = (req, res) => {
    const filter = { _id: req.body._id}
    const updateProductValues = {
        itemType: req.body.itemType,
        quantity: req.body.quantity,
        price: req.body.price,
    }
    ProductModel.findOneAndUpdate(filter, updateProductValues)
    .then(() =>  res.sendStatus(201))
}

const deleteProduct = (req, res) => {
    ProductModel.findByIdAndDelete(req.body.id).then(() => {
        ProductModel.find().then(data => res.send(data))
    })
}

module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
}