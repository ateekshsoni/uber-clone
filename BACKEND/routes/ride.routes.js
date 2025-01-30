const express = require('express');
const router = express.Router();
const { body , query} = require('express-validator');
const rideController = require('../controllers/ride.controller');
const mapService = require('../services/maps.service');
const authMiddleware = require('../middlewares/auth.middleware');

router.post('/create', 
    authMiddleware.authUser,
    body('pickup').isString().isLength({ min: 3 }).withMessage('Pickup address is required'),
    body('dropoff').isString().isLength({ min: 3 }).withMessage('Dropoff address is required'),
    body('vehicleType').isString().isIn(['auto' , 'car' , 'motorcycle']).withMessage('Vehicle type is required'),
    rideController.createRide
);

router.get('/maps/autosuggestions', async (req, res) => {
    try {
        const suggestions = await mapService.getAutoSuggestions(req.query.input);
        res.json(suggestions);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
});
router.get('/get-fare' , 
    authMiddleware.authUser,
    query('pickup').isString().isLength({ min: 3 }).withMessage('Pickup address is required'),
    query('dropoff').isString().isLength({ min: 3 }).withMessage('Dropoff address is required'),
    rideController.getFare
)

module.exports = router;