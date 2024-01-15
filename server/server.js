const express = require('express');
const cors = require('cors');
const scrapeRoutes = require('./routes/scrapeRoutes'); // Import scrape routes

const app = express();

// CORS configuration to allow requests from your frontend server
const corsOptions = {
    origin: 'http://localhost:3000', // Your frontend's URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true, // Enable credentials for CORS
    optionsSuccessStatus: 200 // For legacy browser support
};

// Apply CORS middleware with the specified options
app.use(cors(corsOptions));

// Middleware for parsing JSON and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use scrape routes
app.use('/api/scrape', scrapeRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// Export the app for testing or additional configuration
module.exports = app;
