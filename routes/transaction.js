const express = require('express');
const TransactionController = require('../controllers/transaction');
const router = express.Router();

router.get('/transactions', (req, res) => {
    TransactionController.getTransactions(req, res);
});

router.get('/transactions/:id', (req, res) => {
    TransactionController.getTransaction(req, res);
});

router.post('/transactions', (req, res) => {
    TransactionController.createTransaction(req, res);
});

router.delete('/transactions', (req, res) => {
    TransactionController.deleteTransaction(req, res);
});

module.exports = router;