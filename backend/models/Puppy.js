const mongoose = require('mongoose');

const puppySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    gender: {
        type: String,
        enum: ['Male', 'Female'],
        required: true,
    },
    healthDetails: {
        type: String,
        required: true,
    },
    adoptionPrice: {
        type: Number,
        required: true,
    },
    available: {
        type: Boolean,
        default: true,
    },
    images: [{
        type: String,
        required: true,
    }],
}, { timestamps: true });

module.exports = mongoose.model('Puppy', puppySchema);