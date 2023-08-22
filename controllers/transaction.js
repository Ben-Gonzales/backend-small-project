const TransactionModel = require('../models/Transaction');
const ClientModel = require('../models/Client');
const ProductModel = require('../models/Product');

const getTransactions = (req, res) => {
    TransactionModel.find()
    .then(data => {
        res.send(data);
    })
}

const getTransaction = (req, res) => {
    TransactionModel.findOne()({_id: req.params.id}
        .then(data => { res.send(data);
        }))
}

const createTransaction = (req, res) => {
        const newTransaction = new TransactionModel({
                customerId: ClientModel._id,
                firstName: ClientModel.firstName,
                lastName: ClientModel.lastName,
                itemId: ProductModel._id,
                itemType: ProductModel.itemType,
                quantity: ProductModel.quantity,
                price: ProductModel.price,
                total: req.body.total,
            });
            newTransaction.save((err, savedTransaction) => {
                if (err) console.error('Error creating transaction:', err);
                 else console.log('Transaction saved:', savedTransaction);
                }).then(() => TransactionModel.find().then(data => res.send(data)))
        }

const deleteTransaction = (req, res) => {
    TransactionModel.findByIdAndDelete(req.body.id).then(() => {
        TransactionModel.find().then(data => res.send(data))
    })
}

module.exports = {
    getTransactions,
    getTransaction,
    createTransaction,
    deleteTransaction,
}