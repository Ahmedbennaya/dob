const Testimonial = require('../models/Testimonial');

// @desc    Get all testimonials
// @route   GET /api/testimonials
// @access  Public
const getTestimonials = async (req, res) => {
    try {
        const testimonials = await Testimonial.find({});
        res.status(200).json(testimonials);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching testimonials', error: error.message });
    }
};

// @desc    Add a testimonial
// @route   POST /api/testimonials
// @access  Public
const addTestimonial = async (req, res) => {
    const { name, message, rating } = req.body;

    if (!name || !message || rating === undefined) {
        return res.status(400).json({ message: 'All fields (name, message, rating) are required' });
    }

    try {
        const testimonial = new Testimonial({ name, message, rating });
        await testimonial.save();
        res.status(201).json({ message: 'Testimonial added successfully', testimonial });
    } catch (error) {
        res.status(500).json({ message: 'Error adding testimonial', error: error.message });
    }
};

// @desc    Update a testimonial
// @route   PUT /api/testimonials/:id
// @access  Public
const updateTestimonial = async (req, res) => {
    try {
        const updatedTestimonial = await Testimonial.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true, runValidators: true } // Returns updated document & validates fields
        );

        if (!updatedTestimonial) {
            return res.status(404).json({ message: 'Testimonial not found' });
        }

        res.status(200).json({ message: 'Testimonial updated successfully', updatedTestimonial });
    } catch (error) {
        res.status(500).json({ message: 'Error updating testimonial', error: error.message });
    }
};

// @desc    Delete a testimonial
// @route   DELETE /api/testimonials/:id
// @access  Public
const deleteTestimonial = async (req, res) => {
    try {
        const deletedTestimonial = await Testimonial.findByIdAndDelete(req.params.id);

        if (!deletedTestimonial) {
            return res.status(404).json({ message: 'Testimonial not found' });
        }

        res.status(200).json({ message: 'Testimonial deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting testimonial', error: error.message });
    }
};

module.exports = {
    getTestimonials,
    addTestimonial,
    updateTestimonial,
    deleteTestimonial, // ✅ Added missing delete function
};
