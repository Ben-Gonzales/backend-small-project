const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv'); // Import the dotenv package

// Load environment variables from .env file
dotenv.config();

// Routes
const clientRoutes = require('./routes/client');
const productRoutes = require('./routes/product');
const transactionRoutes = require('./routes/transaction');

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

mongoose.connection.once('open', () => console.log('Now connected to MongoDB Atlas'));

// Use the MONGODB_URI from the .env file
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI, {
    dbName: 'Cluster0',
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(clientRoutes);
app.use(productRoutes);
app.use(transactionRoutes);

const PORT = 4000;
app.listen(PORT, () => console.log(`API running at http://localhost:${PORT}`));
