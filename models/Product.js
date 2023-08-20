const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    itemType:{
        type: String
    },
    quantity:{
        type: Number
    },
    price:{
        type: Number
    },
})

module.exports = mongoose.model('product', productSchema);