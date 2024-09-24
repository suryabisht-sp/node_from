const Tourist = require('../models/Tourist');

// Handle form submission
const submitForm = async (req, res) => {
    const { name, age, email, country, travelDate } = req.body;
    
    try {
        const tourist = new Tourist({ name, age, email, country, travelDate });
        await tourist.save();
        res.redirect('/success');  // Redirect to a success page
    } catch (error) {
        res.status(500).send('Server Error');
    }
};

module.exports = { submitForm };
