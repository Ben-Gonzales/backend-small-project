const productModel = require('../models/Product');

const getProducts = (req, res) => {
    productModel.find()
    .then(data => {
        res.send(data);
    })
}

const getProduct = (req, res) => {
    productModel.findOne()({_id: req.params.id}
        .then(data => { res.send(data);
        }))
}

const createProduct = (req, res) => {
        const newProduct = new productModel({
                itemType: req.body.itemType,
                quantity: req.body.quantity,
                price: req.body.price,
            });
            newProduct.save().then(() => {
                productModel.find().then(data => res.send(data))
            })
        }

const updateProduct = (req, res) => {
    const filter = { _id: req.body._id}
    const updateProductValues = {
        itemType: req.body.itemType,
        quantity: req.body.quantity,
        price: req.body.price,
    }
    productModel.findOneAndUpdate(filter, updateProductValues)
    .then(() =>  res.sendStatus(201))
}

const deleteProduct = (req, res) => {
    productModel.findByIdAndDelete(req.body.id).then(() => {
        productModel.find().then(data => res.send(data))
    })
}

module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
}