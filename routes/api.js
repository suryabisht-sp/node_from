const express = require('express');
const router = express.Router();
const { submitForm } = require('../controllers/touristController');

// Tourist Form Routes
router.get('/', (req, res) => {
    res.render('form');  // Render form on GET request
});

router.post('/submit', submitForm);

module.exports = router;
