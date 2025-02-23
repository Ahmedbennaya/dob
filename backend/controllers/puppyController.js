const Puppy = require('../models/Puppy');

// Create a new puppy listing
const createPuppy = async (req, res) => {
    try {
        const puppy = new Puppy(req.body);
        await puppy.save();
        res.status(201).json(puppy);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all available puppies
const getAllPuppies = async (req, res) => {
    try {
        const puppies = await Puppy.find();
        res.status(200).json(puppies);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single puppy by ID
const getPuppyById = async (req, res) => {
    try {
        const puppy = await Puppy.findById(req.params.id);
        if (!puppy) {
            return res.status(404).json({ message: 'Puppy not found' });
        }
        res.status(200).json(puppy);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a puppy listing
const updatePuppy = async (req, res) => {
    try {
        const puppy = await Puppy.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!puppy) {
            return res.status(404).json({ message: 'Puppy not found' });
        }
        res.status(200).json(puppy);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a puppy listing
const deletePuppy = async (req, res) => {
    try {
        const puppy = await Puppy.findByIdAndDelete(req.params.id);
        if (!puppy) {
            return res.status(404).json({ message: 'Puppy not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createPuppy,
    getAllPuppies,
    getPuppyById,
    updatePuppy,
    deletePuppy
};
