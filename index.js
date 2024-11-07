const express = require('express');
const mongoose = require('mongoose');
const productRoute = require('./routes/product.route.js');
require('dotenv').config(); // Load environment variables from .env
const MONGODB_URI = process.env.MONGODB_URI; // Get the MongoDB URI from environment variablesr


const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Product Routes
app.use('/api/products', productRoute);

// Default route
app.get('/', (req, res) => {
  res.send('Hello from Node API Server Updated');
});

// Configure the port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to database!');
  })
  .catch(() => {
    console.log('Connection Failed');
  });
