const clientModel = require('../models/Client');
const bcrypt = require('bcrypt');

const getClients = (req, res) => {
    clientModel.find()
    .then(data => {
        res.send(data);
    })
}

const getClient = (req, res) => {
    clientModel.findOne()({_id: req.params.id}
        .then(data => { res.send(data);
        }))
}

const createClient = (req, res) => {
    clientModel.find({ userName: req.body.userName}).then(existingUser => {
        if (existingUser.length > 0) {
            res.status(409).send({ error: true, message: 'Username already used'})
        } else {
            const hash = bcrypt.hashSync(req.body.passWord, 10);
            const newClient = new clientModel({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                birthDate: req.body.birthDate,
                clientType: req.body.clientType,
                userName: req.body.userName,
                passWord: hash,
            });
            newClient.save().then(() => {
                clientModel.find().then(data => res.send(data))
            })
        }
    })
}

const updateClient = (req, res) => {
    const filter = { _id: req.body._id}
    const updateClientValues = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        birthDate: req.body.birthDate,
        clientType: req.body.clientType,
        userName: req.body.userName,
        passWord: req.body.passWord,
    }
    clientModel.findOneAndUpdate(filter, updateClientValues)
    .then(() =>  res.sendStatus(201))
}

const deleteClient = (req, res) => {
    clientModel.findByIdAndDelete(req.body.id).then(() => {
        clientModel.find().then(data => res.send(data))
    })
}

module.exports = {
    getClients,
    getClient,
    createClient,
    updateClient,
    deleteClient,
}