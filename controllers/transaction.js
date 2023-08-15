const transactionModel = require('../models/Transaction');s

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
                customer: req.body.customer,
                item: req.body.itemType,
                quantity: req.body.quantity,
                price: req.body.price,
            });
            newTransaction.save().then(() => {
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