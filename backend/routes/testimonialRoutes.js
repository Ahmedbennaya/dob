const express = require('express');
const { 
    getTestimonials, 
    addTestimonial, 
    updateTestimonial, 
    deleteTestimonial 
} = require('../controllers/testimonialController');

const router = express.Router();

// Routes
router.route('/').get(getTestimonials).post(addTestimonial);
router.route('/:id').put(updateTestimonial).delete(deleteTestimonial);

module.exports = router;
