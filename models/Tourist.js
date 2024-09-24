const mongoose = require('mongoose');

// Tourist Schema
const TouristSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true }, // Unique email to avoid duplicates
    country: { type: String, required: true },
    travelDate: { type: Date, required: true }
});

// Pre-save middleware to prevent duplicate email submissions
TouristSchema.pre('save', async function (next) {
    const tourist = this;

    // Check if the email already exists in the database
    const existingTourist = await mongoose.models.Tourist.findOne({ email: tourist.email });
    if (existingTourist) {
        const err = new Error('This email has already been used.');
        err.statusCode = 400;
        return next(err);
    }

    next();
});

const Tourist = mongoose.model('Tourist', TouristSchema);

module.exports = Tourist;
