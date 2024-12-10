const captainModel = require('../models/captain.model.js');
const captainService = require('../services/captain.service.js');
const { validationResult } = require('express-validator');

module.exports.registerCaptain = async (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    const {fullname , email , password , vehicle} = req.body;

    const isCaptainAlreadyExists = await captainModel.findOne({email});
    if(isCaptainAlreadyExists){
        return res.status(400).json({message: 'Email already exists'});
    }

    const hashedPassword = await captainModel.hashPassword(password);

    const captain = await captainService.createCaptain({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword,
        color: vehicle.color,
        plate: vehicle.plate,
        capacity: vehicle.capacity,
        vehicleType: vehicle.vehicleType 
    });

    const token = captain.generateAuthToken();

    res.cookie('token', token);
    res.status(201).json({ captain, token });
}