const transactionModel = require('../models/Transaction');
const clientModel = require('../models/Client');
const productModel = require('../models/Product');

const getTransactions = (req, res) => {
    transactionModel.find()
    .then(data => {
        res.send(data);
    })
}

const getTransaction = (req, res) => {
    transactionModel.findOne()({_id: req.params.id}
        .then(data => { res.send(data);
        }))
}

const createTransaction = (req, res) => {
        const newTransaction = new transactionModel({
                customerId: clientModel._id,
                firstName: clientModel.firstName,
                lastName: clientModel.lastName,
                itemId: productModel._id,
                itemType: productModel.itemType,
                quantity: productModel.quantity,
                price: productModel.price,
                total: req.body.total,
            });
            newTransaction.save((err, savedTransaction) => {
                if (err) {
                  console.error('Error creating transaction:', err);
                } else {
                  console.log('Transaction saved:', savedTransaction);
                }}).then(() => {
                transactionModel.find().then(data => res.send(data))
            })
        }

const deleteTransaction = (req, res) => {
    transactionModel.findByIdAndDelete(req.body.id).then(() => {
        transactionModel.find().then(data => res.send(data))
    })
}

module.exports = {
    getTransactions,
    getTransaction,
    createTransaction,
    deleteTransaction,
}