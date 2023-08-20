const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    customerId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client',
    },
    firstName:{
        type: mongoose.Schema.Types.firstName,
        ref: 'Client',
    },
    lastName:{
        type: mongoose.Schema.Types.lastName,
        ref: 'Client',
    },
    itemId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Product',
    },
    item:{
        type: mongoose.Schema.Types.itemType,
        ref:'Product',
    },
    quantity:{
        type: mongoose.Schema.Types.quantity,
        ref: 'Product',
    },
    price:{
        type: mongoose.Schema.Types.price,
        ref: 'Product',
    },
    total:{
        type: Number,
    },
})

module.exports = mongoose.model('transaction', transactionSchema);