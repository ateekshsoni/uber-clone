const mapService = require('../services/maps.service');
const { validationResult } = require('express-validator');
module.exports.getCoordinates = async (req, res , next) => { 
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { address } = req.query;
    try {
        const coordinates = await mapService.getAddressCoordinate(address);
        res.status(200).json(coordinates);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }

}   

module.exports.getDistanceTime = async (req, res , next) => {
    try{
        const { origin, destination } = req.query;
        const distanceAndTime = await mapService.getDistanceTime(origin, destination);
        res.status(200).json(distanceAndTime);
    }catch(error){
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
}

module.exports.getAutoSuggestions = async (req, res , next) => {
    try{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array() });
        }
        const { input } = req.query;

        const autoSuggestions = await mapService.getAutoSuggestions(input);
        res.status(200).json(autoSuggestions);
    }catch(err){
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
}