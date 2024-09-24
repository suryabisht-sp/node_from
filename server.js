const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const touristRoutes = require('./routes/api');
const path = require('path');
const app = express();

// Connect to MongoDB
connectDB();

// Set view engine to EJS
app.set('view engine', 'ejs');

// Middleware for parsing form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', touristRoutes);

// Success page route
app.get('/success', (req, res) => {
    res.send('Form submitted successfully!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
