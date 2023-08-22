const mongoose = require('mongoose');
const ClientModel = require('./Client');
const ProductModel = require('./Product');

const transactionSchema = new mongoose.Schema({
    customerId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: ClientModel,
    },
    firstName:{
        type: mongoose.Schema.Types.String,
        ref: ClientModel,
    },
    lastName:{
        type: mongoose.Schema.Types.String,
        ref: ClientModel,
    },
    item:{
        type: [mongoose.Schema.Types.String],
        ref: ProductModel,
    },
    quantity:{
        type: [mongoose.Schema.Types.Number],
        ref: ProductModel,
    },
    price:{
        type: [mongoose.Schema.Types.Number],
        ref: ProductModel,
    },
    total:{
        type: Number,
    },
})

module.exports = mongoose.model('transaction', transactionSchema);