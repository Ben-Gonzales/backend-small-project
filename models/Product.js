const mongoose = require('mongoose');

const productSchema = new mongoose.model({
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