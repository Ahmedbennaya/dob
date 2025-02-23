const express = require('express');
const { 
    createPuppy, 
    getAllPuppies, 
    getPuppyById, 
    updatePuppy, 
    deletePuppy 
} = require('../controllers/puppyController');
const { authMiddleware, adminMiddleware } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/')
    .post(authMiddleware, adminMiddleware, createPuppy)
    .get(getAllPuppies);

router.route('/:id')
    .get(getPuppyById)
    .put(authMiddleware, adminMiddleware, updatePuppy)
    .delete(authMiddleware, adminMiddleware, deletePuppy);

module.exports = router;
