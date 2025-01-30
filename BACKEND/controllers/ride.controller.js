const rideService = require('../services/ride.service');
const { validationResult} = require('express-validator')

module.exports.createRide = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    } 

    const { userId, pickup, dropoff, vehicleType } = req.body;
    try{
        const ride = await rideService.createRide({ user: req.user._id, pickup, dropoff, vehicleType });
        return res.status(201).json({ ride });
        
    } catch(error){
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}

module.exports.getFare = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    
    const { pickup, dropoff } = req.query;

    try{
        const fare = await rideService.getFare({ pickup, dropoff});
        return res.status(200).json({ fare });
        
    } catch(error){
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}