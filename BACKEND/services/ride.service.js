const rideModel = require('../models/ride.model');
const mapService = require('./maps.service');
const crypto = require('crypto');

async function getFare({ pickup, dropoff }) {
  try {
    // Get distance and time from Google Maps API
    const distanceTime = await mapService.getDistanceTime(pickup, dropoff);
    
    // Base fare for different vehicle types
    const baseFares = {
      auto: 30,
      car: 50,
      motorcycle: 20
    };

    // Per kilometer rates
    const perKmRates = {
      auto: 15,
      car: 20,
      motorcycle: 10
    };

    // Calculate fares for all vehicle types
    const fares = {};
    Object.keys(baseFares).forEach(vehicleType => {
      // Distance in kilometers (convert meters to km)
      const distanceInKm = distanceTime.distance.value / 1000;
      
      // Calculate fare components
      const baseFare = baseFares[vehicleType];
      const distanceFare = distanceInKm * perKmRates[vehicleType];
      
      // Add time-based surge (optional)
      const timeSurge = 1.0; // Can be adjusted based on time of day
      
      // Calculate total fare
      const totalFare = Math.round((baseFare + distanceFare) * timeSurge);
      
      fares[vehicleType] = totalFare;
    });

    return fares;
  } catch (error) {
    console.error('Error calculating fare:', error);
    throw error;
  }
}

function getOtp(num){
    return crypto.randomInt(Math.pow(10, num-1), Math.pow(10, num)).toString();
}

module.exports = {
  getFare,
  createRide: async ({ user, pickup, dropoff, vehicleType }) => {
    if(!user || !pickup || !dropoff || !vehicleType){
        throw new Error('All fields are required');
    }

    const fares = await getFare({ 
        pickup, 
        dropoff 
    });

    const ride = await rideModel.create({
        user,
        pickup,
        dropoff,
        vehicleType,
        otp: getOtp(6),
        fare: fares[vehicleType]  // Remove .estimatedFare since fare is a direct number
    });
    return ride;
  }
};