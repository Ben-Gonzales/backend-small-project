const mongoose = require('mongoose');

const transactionSchema = new mongoose.model({
    customer:{
        type: String
    },
    item:{
        type: [String]
    },
    quantity:{
        type: Number
    },
    price:{
        type: Number
    },
})

module.exports = mongoose.model('transaction', transactionSchema);