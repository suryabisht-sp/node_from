const mongoose = require('mongoose');

const TouristSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    travelDate: {
        type: Date,
        required: true,
    }
});

const Tourist = mongoose.model('Tourist', TouristSchema);
module.exports = Tourist;
