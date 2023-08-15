const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
    firstName:{
        type: String
    },
    firstName:{
        type: String
    },
    birthDate:{
        type: Date
    },
    clientType:{
        type: String
    },
    userName:{
        type: String
    },
    passWord:{
        type: String
    },
})

module.exports = mongoose.model('client', clientSchema);