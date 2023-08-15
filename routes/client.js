const express = require('express');
const ClientController = require('../controllers/client');
const router = express.Router();

router.get('/clients', (req, res) => {
    ClientController.getClients(req, res);
});

router.get('/clients/:id', (req, res) => {
    ClientController.getClient(req, res);
});

router.post('/clients', (req, res) => {
    ClientController.createClient(req, res);
});

router.put('/clients', (req, res) => {
    ClientController.updateClient(req, res);
});

router.delete('/clients', (req, res) => {
    ClientController.deleteClient(req, res);
});

module.exports = router;