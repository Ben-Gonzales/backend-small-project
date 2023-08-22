const express = require('express');
const ProductController = require('../controllers/product');
const router = express.Router();

router.get('/products', (req, res) => {
    ProductController.getProducts(req, res);
});

router.get('/products/:id', (req, res) => {
    ProductController.getProduct(req, res);
});

router.post('/products', (req, res) => {
    ProductController.createProduct(req, res);
});

router.put('/products', (req, res) => {
    ProductController.updateProduct(req, res);
});

router.delete('/products', (req, res) => {
    ProductController.deleteProduct(req, res);
});

module.exports = router;