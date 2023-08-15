const express = require('express');
const cors = require('cors');
const mongoose = ('mongoose');
const uri = 'mongodb+srv://bengonzales:password123456789@cluster0.nodeklw.mongodb.net/?retryWrites=true&w=majority';

//Routes
const clientRoutes = require('./routes/client');
const productRoutes = require('./routes/product');
const transactionRoutes = require('./routes/transaction');

const app =  epress();

//Middlewares
app.use(express.json());
app.use(cors());

mongoose.connection.once('open', () => {
    console.log('Now connected to MongoDB Atlas')
})

mongoose.connect(uri, {
    dbName: 'Cluster0'
})

app.use(clientRoutes);
app.use(productRoutes);
app.use(transactionRoutes);

const PORT = 4000;
app.listen(PORT, () => console.log(`API running at http://localhost:${PORT}`));